---
slug: ondevice-ai-model-with-coreml
title: iOS 환경에서 온디바이스 AI모델 최적화하기
authors: mooyeon
tags: [iOS, Swift, CoreML, Flutter, Torch]
date: 2024-11-25T19:45
---

# iOS 환경에서 온디바이스 AI모델 최적화하기

## 소개

현재 Yolo ML model을 활용하여 이미지에서 정보를 추출하고 이를 활용한 프로젝트를 진행하고 있다. 이때 서버 부하를 최소화 하기 위해 가벼운 모델들의 경우 온디바이스 환경에서 동작하도록 작성해주었는데, 이 과정에서 스레드 메모리공간을 할당해주는 방법과 Flutter에서 `methodChannel`와 `ViewController`를 통해 이를 어떻게 실행하는지 정리한 내용이다.

:::info 목차

1. [CoreML](#coreml)
2. [Torch에서 Core ML로 변환하기](#torch에서-core-ml로-변환하기)
3. []

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

* Python 3.8+
* Torch
* Ultralytics
* coremltools
* argparse

:::

### 의존성 설치

```bash
pip install torch ultralytics coremltools
```

