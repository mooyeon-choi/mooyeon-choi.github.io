---
slug: ios-plugin-on-flutter
title: Flutter에 iOS Swift 플러그인 만들기
authors: mooyeon
tags: [flutter, iOS, swift, package]
date: 2024-12-10T08:53
---

# Flutter에 iOS Swift 플러그인 만들기

## 소개

자주 사용되는 로직을 모아 모노레포로 생성하는 프로젝트를 진행하고 있다. 이때 Swift로 작성된 코드를 어떻게 분리하여 사용할 수 있을지, 각 기능들을 모듈화하며 확인해보자

:::info 목차

1. [플러그인 프로젝트 생성](#플러그인 프로젝트 생성)

:::

<!--truncate-->

## 플러그인 프로젝트 생성

```bash
flutter create --org com.example --template=plugin --platforms=ios -i swift hello_world
```

생성된 플러그인 클래스 확인
`/pubspec.yaml` 파일의 `flutter/plugin/platforms`에서 각 플랫폼별로 패키지명이나 클래스을 확인할 수 있다.

```yaml
flutter:
  plugin:
    ios:
      pluginClass: HelloWorldPlugin
```

이제 `lib/` 폴더를 확인해보자. 아래와 같이 세 가지 파일이 생성된 것을 확인할 수 있다.

```
├ lib/
⎪  ├ hello_world.dart
⎪  ├ hello_world_platform_interface.dart
⎪  ⎣ hello_world_method_channel.dart
```

이 파일들은 dart에서 각 플랫폼의 함수를 호출하는 코드로 플랫폼 인터페이스와 메쏘드 채널을 구현하고 있다.

`example/` 하위에는 dart에서 이 plugin을 호출하는 예제로 구성되어있다.

## API 구현

### Platforminterface

플랫폼 api 정의

`lib/hello_world_platform_interface.dart`

기본적인 인스턴스 할당과 구현이 필요한 인터페이스 메서드들을 정의

```dart
import 'package:plugin_platform_interface/plugin_platform_interface.dart';

abstract class HelloWorldPlatform extends PlatformInterface {
   HelloWorldPlatform() : super(token: _token);

   static final Object _token = Object();

   static HelloWorldPlatform _instance = MethodChannelHelloWorld();

   static HelloWorldPlatform get instance => _instance;
   static set instance(HelloWorldPlatform instance) {
      PlatformInterface.verityToken(instance, _token);
      _instance = instance;
   }

   Future<String>? getPlatformVersion() {
      throw UnimplementedError('platformVersion() has not been implemented.');
   }
}
```

### MethodChannel

`lib/hello_world_method_channel.dart`

플랫폼 인터페이스의 구현부로 실제 플랫폼의 메서드 이름을 매핑해 호출하고 결과를 반환

채널명이 `hello_world`인 메서드 채널 생성, 해당 메서드 채널의 특정 메서드 호출

```dart
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

import 'hello_world_platform_interface.dart';

// api 구현부
class MethodChannelHelloWorld extends HelloWorldPlatform {
   @visibleForTesting
   final methodChannel = const MethodChannel('hello_world');

   @override
   Future<String?> getPlatformVersion() async {
      final version = await methodChannel.invokeMethod<String>('getPlatformVersion');
      return version;
   }
}
```

### API 메인 클래스

`lib/hello_world.dart`

```dart
import 'hello_world_platform_interface.dart';

class HelloWorld {
   Future<String?> getPlatformVersion() {
      return HelloWorldPlatform.instance.getPlatformVersion();
   }
}
```

## iOS 플러그인 구현

dart에서 호출할 메서드는 정의되었으니, 각 플랫폼별로 해당 메서드를 구현해 주어야한다. 플랫폼별로 구현의 차이가 있는데, AOS, iOS의 경우 `FlutterPlugin`, Windows의 경우 `flutter::Plugin`을 상속받은 클래스에서 메서드 호출 여부를 위한 메서드를 제공한다.

`FlutterPlugin` 클래스가 해당 메서드와 바인드되도록 하기위해 `FlutterPluginRegistrar` 혹은 `flutter::PluginRegistrarManager` 등을 사용해 해당 클래스를 등록해 주어야 한다. 생성된 샘플에서는 static 메서드로 채널명이 "hello_world" 인 메서드 채널을 등록한다.

이후, `FlutterPlugin` 클래스의 `handle(_ call: result:)` 를 작성한다.(AOS는 `onMethodCall`)

### Swift 로 프로젝트 생성 시

`/ios/Classes/HelloWorldPlugin.swift`

```swift
import Flutter

public class HelloWorldPlugin: NSObject, FlutterPlugin {
   public static func register(with registrar: FlutterPluginRegistrar) {
      let channel = FlutterMethodChannel(name: "hello_world", binaryMessenger: registrar.messenger())
      let instance = HelloWorldPlugin()
      registrar.addMethodCallDelegate(instance, channel: channel)
   }

   public func handle(_ call: FlutterMethodCall, result: @escaping FlutterResult) {
      return IODevice.current.systemVersion
   }
}
```

### objc로 프로젝트 생성 시

`/ios/Classes/HelloWorldPlugin.h`

```h
#import <Flutter/Flutter.h>

@interface HelloWorldPlugin : NSObject<FlutterPlugin>
@end
```

`/ios/Classes/HelloWorldPlugin.m`

```m
@implementation HelloPlugin
+ (void)registerWithRegistrar:(NSObject<FlutterPluginRegistrar>*)registrar {
   FlutterMethodChannel* channel = [FlutterMethodChannel methodChannelWithName:@"hello_world" binaryMessenger:[registrar messenger]];
   HelloWorldPlugin* instance = [[HelloWorldPlugin alloc] init];
   [registrar addMethodCallDelegate:instance channel:channel];
}

- (void)handleMethodCall:(FlutterMethodCall*)call result:(FlutterResult)result {
   if (@"getPlatformVersion" isEqualToString:call.method]) {
      result([@"" stringByAppendingString:[[UIDevice currentDevice] systemVersion]]);
   } else {
      result(FlutterMethodNotImplemented);
   }
}
@end
```

### 권한 요청

패키지에서 사용하는 기능을 적용하기 위해서는 해당 패키지에서 요구하는 권한을 추가해주어야 한다. 이를 위해서는 README 사용법에 필요한 권한 목록을 명시해주거나 `.xcprivacy`를 통해 패키지 설치 시 권한 목록이 추가되도록 해줄 수 있다. 다음은 패키지 파일을 통해 권한을 추가해주는 방법이다.

#### PrivacyInfo.xcprivacy 생성

우선 `PrivacyInfo.xcprivacy` 파일을 통해 필요한 권한 목록을 추가해준다.

```plist title="BackgroundMode 사용 요청 예시"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>UIBackgroundModes</key>
	<array>
		<string>processing</string>
		<string>fetch</string>
	</array>
</dict>
</plist>
```

#### 리소스 번들에 추가

**CocoaPods**을 사용해서 패키지 관리를 해주는 경우 패키지 빌드 시 필요한 속성들을 `.podspec`에 설정해주게 된다. 현재 사용 중인 `Flutter 3.19.X` 버전 기준 **Flutter**에서 **iOS dependency manager**로 **CocoaPods**만을 지원하고 있으므로 관련된 속성은 반드시 `.podspec` 으로 명시 해주어야 한다.

이를 통해 **리소스 번들** 목록에 위에서 정의한 권한 설정 파일을 추가해주자.

```podspec
Pod::Spec.new do |s|
  s.name             = 'example_plugin'
  s.version          = '0.0.1'
  s.summary          = 'A new Flutter plugin project.'
  s.description      = <<-DESC
A new Flutter plugin project.
                       DESC
  s.homepage         = 'http://example.com'
  s.license          = { :file => '../LICENSE' }
  s.author           = { 'Your Company' => 'email@example.com' }
  s.source           = { :path => '.' }
  s.source_files = 'Classes/**/*'
  s.public_header_files = 'Classes/**/*.h'
  s.dependency 'Flutter'
  s.platform = :ios, '13.0'

  # Flutter.framework does not contain a i386 slice.
  s.pod_target_xcconfig = { 'DEFINES_MODULE' => 'YES', 'EXCLUDED_ARCHS[sdk=iphonesimulator*]' => 'i386' }
  s.resource_bundles = {'pinokiolab_multi_file_uploader_privacy' => ['Resources/PrivacyInfo.xcprivacy']}
  s.swift_version = '5.0'
end
```

## 샘플 앱에서 플러그인 사용

`example/pubspec.yaml`

### dependency 설정

```yaml
dependencies:
  flutter:
    sdk: flutter

  hello_world:
    path: ../
```

### 자동생성 등록 루틴

`example/ios/Runner/GeneratedPluginRegistrant.h, .m`

프로젝트 생성 후에는 이 메서드가 존재하지 않으며, 앱 build 시에 자동 생성된다.(`flutter build ios --no-codesign`) 플러그인 구현부의 static 메서드를 호출해 메서드채널과 핸들러를 등록한다.

```m
@interface GeneratedPluginRegistrant: NSObject
+ (void)registerWithRegistry:(NSObject<FlutterPluginRegistry>*)registry;
@end


@impleementation GeneratedPluginRegistrant
+ (void)registerWithRegistry:(NSObject<FlutterPluginRegistry>*)registry {
   [HelloWorldPlugin registerWithRegistrar: [registry registrarForPlugin:@"HelloWorldPlugin"]];
}
```

### AppDelegate 플러그인 등록

실제 AppDelegate는 Flutter 내부에 있으며, FlutterAppDelegate 를 상속받아 생성된 등록 루틴을 호출한다.

```swift
import Flutter

@UIApplicationMain
@objc class Adddelegate: FlutterAppDelegate {
   override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
      GeneratedPluginRegistrant.register(with: self)
      return super.application(application, didFinishLaunchingWithOptions: launchOptions)
   }
}
```

### 플러그인 API 사용

`example/lib/main.dart`

```dart
// entry point
void main() {
   runApp(const MyApp());
}

class MyApp extends StatefulWidget {
   const MyApp({super.key});

   @override
   State<MyApp> createState() => _MyAppState();
}

// api 객체 생성 및 사용
class _MyAppState extends State<MyApp> {
   String _platformVersion = 'Unknown';
   final _helloWorldPlugin = HelloWorld();

   Future<void> initPlaotformState() async {
      String platformVersion;

      try {
         platformVersion = await _helloWorldPlugin.getPlatformVersion() ?? 'unknown';
      } on PlatformException {
         platformVersion = 'faliled';
      }

      if (!mounted) return;

      setState(() {
         _platformVersion = platformVersion;
      });
   }

   @Override
   Widget build(BuildContext context) {
      return MaterialApp(home:
         Scaffold(
            appBar: AppBar(title: const Text('Plugin example app'),
            body: Center(child: Text('version: $_platformVersion')
         )
      );
   }
}
```
