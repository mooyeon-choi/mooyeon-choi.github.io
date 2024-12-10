---
slug: ondevice-ai-model-with-coreml
title: iOS 환경에서 온디바이스 AI모델 최적화하기
authors: mooyeon
tags: [iOS, Swift, CoreML, Flutter, Torch]
date: 2024-12-02T19:45
---

# iOS 환경에서 온디바이스 AI모델 최적화하기

## 소개

현재 Yolo ML model을 활용하여 이미지에서 정보를 추출하고 이를 활용한 프로젝트를 진행하고 있다. 이때 서버 부하를 최소화 하기 위해 가벼운 모델들의 경우 온디바이스 환경에서 동작하도록 작성해주었는데, 이 과정에서 스레드 메모리공간을 할당해주는 방법과 Flutter에서 `methodChannel`와 `ViewController`를 통해 이를 어떻게 실행하는지 정리한 내용이다.

:::info 목차

1. [CoreML](#coreml)
2. [Torch에서 Core ML로 변환하기](#torch에서-core-ml로-변환하기)
3. [Core ML 실행하기](#core-ml-실행하기)
4. [메모리 공간 할당](#메모리-공간-할당)

:::

<!--truncate-->

## CoreML

:::info Apple Core ML 개요

Core ML은 Apple Silicon을 활용하고 메모리 공간 및 전력 소모를 최소화하여 다양한 모델 유형의 온디바이스 성능에 최적화되어 있습니다.

:::

Core ML은 Apple 아이폰 CPU, GPU를 활용하여 온디바이스 환경에서 네트워크 연결 없이 ML 모델을 실행할 수 있도록 필요한 기능을 제공해준다. Neural Engine Instruments를 활용하면 더 최적화된 성능을 활용할 수도 있지만 이를 활용하기 위해서는 이에 맞춘 파라미터 값으로 조정을 해주어야해 Apple 생태계에만 최적화된 ML 모델이 아니라면 조금 적용이 힘들었다.

우리의 경우 iOS, Android, Web 환경을 모두 고려하여 ML model을 적용하였기에 뉴럴 엔진을 활용하기에는 무리가 있었고 `cpuAndGpu`를 활용하여 `GPU`가 있는 디바이스의 경우에는 GPU를 활용하도록 최적화 해주었다.

이를 위해 Torch로 생성된 ML model을 어떻게 CoreML로 변환하는지 간단하게 알아보자.

## Torch에서 Core ML로 변환하기

:::note 요구사항

- Python 3.8+
- Torch
- Ultralytics
- coremltools
- argparse

:::

### 의존성 설치

```bash
pip install torch ultralytics coremltools
```

### 모델 변환

모델 변환은 python의 `coremltools` 패키지의 `convert` 매서드를 활용한다. `minimum_deployment_target`의 경우 **Neural Engine** 기능을 사용하기 위해서는 최소 **iOS 16** 버전 이상이어야 하며, `.mlpackage` 파일을 사용하기 위해서는 **iOS 15** 버전 이상이어야 한다.

```py title="export.py"
# ...
import coremltools as ct
# ...

def torchscript_to_mlprogram(torchscript_path:str, mlprogram_path:str):
    # ...
    mlprogram_model = ct.convert(
        scripted_model,
        inputs=[ct.ImageType(name='input', shape=example_input.shape, bias=[0, 0, 0], scale=1/255.0, color_layout=ct.colorlayout.RGB)],
        outputs=[ct.TensorType(name='box'), ct.TensorType(name='score'), ct.TensorType(name='kpts')],
        minimum_deployment_target=ct.target.iOS15,
        compute_precision=ct.precision.FLOAT16,
        convert_to='mlprogram',
        compute_units=ct.ComputeUnit.ALL,
    )
    #...
```

## Core ML 실행하기

그렇다면 플러터 애플리케이션에서 Core ML을 활용하려면 어떻게 해야할까. Method Channel을 활용하여 Swift ViewController에 접근하는 방법과 Swift background thread를 활용하는 방법에 대해 알아보자.

### Method Channel 설정

#### FlutterAppDelegate

FlutterAppDelegate 클래스에서 methodChannel을 설정해준다.

```swift title="AppDelegate.swift"
import UIKit
import Flutter
import Vision

@UIApplicationMain
@objc class AppDelegate: FlutterAppDelegate {

  private let methodChannelName = "spino.app.flutter/modelne"
  // ...
  override func application(
    // ...
    let methodChannel = FlutterMethodChannel(name: methodChannelName, binaryMessenger: controller as! FlutterBinaryMessenger)
    methodChannel.setMethodCallHandler { [weak self] methodCall, result in
      methodChannel.setMethodCallHandler(handleMethodCall)
    }
  )
  return super.application(application, didFinishLaunchingWithOptions: launchOptions)
}
```

methodCall시 실행되는 로직을 설정해준다. 임의로 메서드 명칭은 "caseName", 함수명은 "methodController" 으로 설정해주었다.

```swift title="Appdelegate.swift"
private func handleMethodCall(_ methodCall: FlutterMethodCall, _ result: @escaping FlutterResult) {
  switch methodCall.method {
  case "caseName":
    guard let args = methodCall.arguments as? [String: Any] else {
      result(FlutterError(code: "INVALID_ARGUMENTS", message: "Invalid arguments: imageData is nil", details: nil))
      return
    }

    methodController(result: result)
  }
}
```

#### Controller

Model을 생성할 때에는 `UIViewController`를 활용했다. 다른 좋은 방법이 더 있을지는 모르겠으나 각 기능을 객체화 하고 따로 관리해주기 위해서는 `UIViewController`를 따로 분리해주어 설정해주는 것이 관리하기 좋을 것이라 판단했다.

```swift title="MethodController.swift"
import UIKit
import SwiftUI

@available(iOS 15.0, *)
class UIViewController: UIViewController {
    @Published var predictionContents: [String: [Double]?]? = nil
    let imagePredictor = YoloMLModelClass()
    let predictionsToShow = 2
}

@available(iOS 15.0, *)
extension UIViewController {
    public func classifyImage(_ image: UIImage) {
        do {
            try self.imagePredictor.makePredictions(for: image,
                                                    completionHandler: imagePredictionHandler)
        } catch {
            print("Vision was unable to make a prediction...\n\n\(error.localizedDescription)")
        }
    }
    private func imagePredictionHandler(_ predictions: YoloMLModelClass.Prediction?) {
        guard let predictions = predictions else {
            return
        }

        self.predictionContents = [
            "score": predictions.score,
            "points": predictions.points
        ]
    }
}
```

## 메모리 공간 할당

### Configuration 설정

```swift
let defaultConfig = MLModelConfiguration()
defaultConfig.computeUnits = .cpuAndGPU // all / cpuOnly / cpuAndNeuralNetwork
```

### Background thread

iOS에서 메모리 공간의 경우 동적으로 할당된다 하지만, QoS를 통해 우선순위를 지정해줄 수 있는데 이를 활용하여 필요한

```swift title="AppDelegate.swift"
private func getPointsFromImage(result: @escaping FlutterResult, image: UIImage) {
  if #available(iOS 15.0, *) {
    let detectPointController = DetectPointController()

    DispatchQueue.global(qos: .userInitiated).async {
      detectPointController.classifyImage(image)

      DispatchQueue.main.async {
        result(detectPointController.predictionContents)
      }
    }
  } else {
    result(FlutterError(code: "Flutter Error", message: "Error", details: nil))
  }
}
```
