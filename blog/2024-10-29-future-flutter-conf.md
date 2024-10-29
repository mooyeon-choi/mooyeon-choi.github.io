---
slug: future-flutter-conf
title: 퓨처 플러터 컨퍼런스 후기
authors: mooyeon
tags: [Dart, Flutter, app]
date: 2024-10-29T12:47
---

# Future Flutter 컨퍼런스 후기

## 소개

조금 늦었지만, 2024년 9월 28일 진행된 Flutter 컨퍼런스 Future Flutter에서 들었던 내용을 정리하고, 실제 회사에 적용해보며 겪었던 이슈들에 대한 내용을 정리한 글이다.

:::info 목차

1. [FFI로 연결하는 고(Go)와 플러터](#ffi로-연결하는-고go와-플러터)
2. [Flutter WebRTC](#flutter-webrtc)
3. [ShoreBird 작동 방식](#shorebird-작동-방식)
4. [풍성한 디자인 요청사항에 대응하기](#풍성한-디자인-요청사항에-대응하기)
5. [플러터 렌더링 해부학](#플러터-렌더링-해부학)
6. [Flutter web을 활용하여 제품 개발 환경 개선하기](#flutter-web을-활용하여-제품-개발-환경-개선하기)
7. [어느날 갑자기 앱이 터졌을 때](#어느날-갑자기-앱이-터졌을-때)
8. [Flutter Bloc을 제품 개발에 야무지게 적용하기](#flutter-bloc을-제품-개발에-야무지게-적용하기)

:::

<!--truncate-->

## FFI로 연결하는 고(Go)와 플러터

멀티 플랫폼에 대응하는 앱을 만들기 위해 Go 언어와 플러터를 활용하며 기본적인 UI 디자인을 적용하며 고성능의 앱을 개발하는 방법에 대해 고민하며 적용한 내용에 대한 발표였다.

### 왜 Go 인가?

고언어를 채택한 장점에는 크게 3가지의 이유가 있었다.

#### 크로스 플랫폼 개발

Windows, macOS, Linux 와 같은 다양한 운영체제와 x86, ARM 등의 아키텍쳐로 크로스 컴파일이 가능하여 보다 빠르게 다양한 플랫폼 지원을 간편하게 한다.

#### 빠른 컴파일과 실행

Go언어는 머신코드로 바로 컴파일 가능하기 때문에 고성능의 앱 개발에 유리하다. 실행속도가 빠를 뿐만아니라 컴파일 속도도 빨라, 수정사항을 빠르게 적용하여 테스트 가능하고 이로인해 개발 속도를 빠르게 가져갈 수 있다.

#### 가벼움과 확장성

고루틴과 채널이라 알려진 동시성 기능을 지원하여 많은 작업들을 성능저하 없이 동시에 처리 가능하다. 효율성과 확장성을 필요로하는 고성능 어플리케이션 개발에 이상적이다.

### 왜 플러터인가?

#### 크로스 플랫폼 개발

하나의 코드 베이스로 안드로이드, IOS, Windows desktop, Web 등 여러 플랫폼 개발이 가능하다. 이로인해 적은 인원과 시간으로 다양한 플랫폼에 대응하는 App.을 개발할 수 있다.

#### 유용한 개발도구

플러터의 핫리로드, 핫리스타스 같은 기능과 유용한 개발 도구를 지원해 개발 속도를 빠르게 한다.

#### 빠르고 아름다운 애플리케이션

플러터는 자체적으로 기본적인 애니메이션과 인터렉션에 대한 처리가 되어있어 보다 간편하게 고퀄리티의 사용자 경험을 제공한다. 또한 각 플랫폼에 맞게 컴파일되어 효율적으로 동작하도록 해준다.

### FFI 란?

Foreign Function Interface (FFI)는 C언어로 짜여진 함수를 다트나 플러터에서 사용하는 방법으로 플러터에서는 `dart:ffi` 패키지를 사용한다.

C뿐만 아니라 Go, C++, Rust 등의 **C 인터페이스를 제공하는 언어**라면 Dart에서 사용이 가능하다.

### 플러터에서 FFI 사용하기

```bash
flutter create --platforms=android,ios,macos,windows,linux --template=plugin ffi native add
```

위 커맨드로 프로젝트를 생성하면 `lib`폴더 아래에 `Dart` 코드, `src` 폴더 아래에 `C` 코드가 생성된다.

#### 고언어 라이브러리 생성하기

##### 고언어 코드 작성

1. `src`폴더 안에 `go.mod` 파일 생성
    > **`go.mod` 파일이란?** 모듈 이름, 버전, 의존성 등을 정의하는 파일

2. `sum.go` 파일을 생성하고 고언어 코드를 작성
    ```go
    // sum.go file
    package main

    import "C"          // cgo 문법으로 
                        // export <함수명> 주석을 이용해서 sum이라는 함수를 C로 export

    // export sum
    func sum(a C.int, b C.int) C.int {      // C에서 사용해야하기 때문에 Go의
        return a + b                        // 타입이 아닌 C 타입으로 C.int 를 사용
    }

    func main() {}
    ```

#### 고언어 라이브러리를 안드로이드용으로 컴파일

최신 안드로이드 단말기들을 지원하기 위해서는 `arm64`와 `x86_64` 아키텍처를 지원하도록 크로스 컴파일 되어야함

```bash
export ANDROID_OUT=../android/src/main/jniLibs
export ANDROID_SDK=$HOME/Library/Android/sdk
export NDK_BIN=$ANDROID_SDK/ndk/23.1.777.9620/toolchains/llvm/prebuilt/darwin-x86_64/bin

# x86_64 아키텍처로 컴파일 해서 android/src/main/jniLibs/x86_64 폴더에 libsum.so 생성
CGO_ENABLED=1 \
GOOS=android \
GOARCH=and64 \
CC=$NDK_BIN/x86_64-linux-android21-clang \
go build -buildmod=c-shared -o $ANDROID_OUT/x86_64/libsum.so

# arm64 아키텍처로 컴파일 해서 android/src/main/jniLibs/arm64-v8a 폴더에 libsum.so 생성
CGO_ENABLED=1 \
GOOS=android \
GOARCH=arm64 \
CC=$NDK_BIN/aarch64-linux-android21-clang \
go build -buildmode=c-shared -o $ANDROID_OUT/arm64-v8a/libsum.so
```

#### 고언어 라이브러리를 IOS용으로 컴파일

기본적인 컨셉은 안드로이드용 빌드와 동일하나 약간의 추가과정이 필요함

* IOS는 static 라이브러리로 컴파일 해야함
* 시뮬레이터용 `arm64`와 *`arm64` 빌드*와 *아이폰용 `arm64` 빌드*, 총 세개의 라이브러리로 컴파일
* 시뮬레이터용 라이브러리 두개를 통합하기 위해 lipo라는 도구를 사용
* 빌드된 모든 라이브러리를 `xframework`패키지로 통합

### 플러터에서 사용하기

#### FFIgen을 사용해서 바인딩 만들기

`C`라이브러리를 `Dart` 코드에서 사용할 수 있게 하는 바인딩을 `ffigen`이라는 도구를 이용해서 자동생성. `ffigen`을 돌리기 위해 `ffigen yaml` 작성

```yaml
# Run with `flutter pub run ffigen --config ffigen.yaml`.
name: NativeLibrary
description: Bindings to `src/sum.h`.
output: `lib/generated_bindings.dart`
headers:
  entry-points:
    -`src/libsum.h`
preamble: |
  // ignore_for_file: always_specify_types
  // ignore_for_file: camel_case_types
  // ignore_for_file: non_constant_identifier_names
  // ignore_for_file: unused_field
  // ignore_for_file: unused_element
comments:
  style: any
  lenght: full
```

#### 다트코드에서 사용하기

이제 라이브러리를 다트에서 로드하고 `generated_bindings.dart` 파일에 `C` 함수로 바인딩된 다트 함수를 호출 가능

```dart
// lib/native_add.dart
import 'dart:ffi';
import 'dart:io';
import 'generated_bindings.dart';

int sum(int a, int b) => _bindings.sum(a, b);

const String _libName = 'native_add';

/// The dynamic library in which the symbols for {NativeAddBindings} can be found.
final DynamicLibrary _dylib = () {
  if (Platform.isAndroid || Platform.isLinux) {
    return DynamicLibrary.open('libsum.so');
  }
  throw UnsupportedError('Unknown platform: ${Platform.operatingSystem}');
}();

/// The bindings to the native functions in [_dylib].
final NativeLibrary _bindings = NativeLibrary(_dylib);
```

### 정리

* `C` 인터페이스를 제공하는 언어라면 `Dart`에서 **FFI**를 통해 사용 가능함
* `ffigen`을 이용하면 `.h`를 읽어 자동으로 바인딩 코드를 생성해줌
* `Go` 언어의 크로스 컴파일러를 이용해 쉽게 크로스 플랫폼 라이브러리 생성 가능

:::info title=Next Step

* IOS / macOS / Windows / Linux 등 안드로이드 외 다른 플랫폼 빌드
  * 예시는 Android / IOS / macOS 까지만 동작
* 웹에서도 동작하도록 빌드 (힌트: WebAssembly)
* 메모리 공유나 비동기 처리등의 고급 사용예제
:::

## Flutter WebRTC

## ShoreBird 작동 방식

멀티 플랫폼 모바일 애플리케이션 개발을 위해 많이 사용되는 프레임워크 하면 ReactNative, Flutter 와 같은 프레임워크들이 생각날 것이다. RN(ReactNative) 하면 여러 기능중 단연 **Code Push** 를 먼저 떠올릴 수 있는데, `Flutter` 에서 `Code push` 를 적용하기 위해 만들어진 서비스인 `Shorebird`에 대해 알아보자.

### Code push란?

* 코드 수정 시 디바이스에서 업데이트를 하지 않아도 지속적으로 사용자가 변경사항을 가져올 수 있다
* 대부분의 큰 애플리케이션들은 `Code push`를 사용중이다.
  * *Large install base = long store update time* 이므로

* 비즈니스에서 현실적인 문제들
  * Downtime = lost revenue
  * Code push = insurance you can fix things quickly if they go wrong


## 풍성한 디자인 요청사항에 대응하기

LINE 2년차 주니어 개발자로 일하면서 플러터를 사용하여 여러 디자인 요구사항들을 해결한 경험들을 공유한 시간이었다.

### CustomPaint를 활용한 Container

다양한 모양의 컨테이너를 생성하기 위해 CustomPaint를 사용하여 오각형의 도형을 만들며 동적으로 수정할 수 있도록 변경한 방법들에 대해 공유해주셨다.

`CustomPaint` 의 경우 Flutter 에서 매우 중요하게 활용된다. 특히 Interactive 한 화면을 디자인하기 위해 Animation 효과를 적용할 때 Svg 파일을 CustomPaint로 변환하면서 특히 많이 활용이 되는데, 현재 회사에서 apple의 [SF Symbols](https://developer.apple.com/sf-symbols/)와 유사하게 아이콘들을 커스텀 가능하게 수정하는 작업을 하며 보고있던 부분이라 반가운 주제였다.

발표내용은 간단한 path 를 생성하는 방법을 공유해주는 조금 쉬운 내용이었지만, `Flutter`를 처음 접하며 겪었던 고민들과 같은 고민을 해봤던 개발자 동료를 만나 반가웠다.

추가로 `CustomPaint` 의 경우 `Flutter` 팀에서 `SVG` 를 대체하기 위해 최적화를 신경써서 좋은 성능으로 화면에 아이콘이나 벡터이미지를 생성할 수 있게 해주었는데, 이와 관련하여 [Youtube](https://www.youtube.com/watch?v=w9lD35D78N8)에서 설명한 내용도 참고하자

### Loading Skeleton

최근 로딩화면을 단순히 Circular Loader로 구현하지 않고 사용자로 하여금 어떤 자료들이 보여질지 예측이 가능하도록 디자인하는 Skeleton Design을 많이 적용하고 있는 것으로 알고있다. 현재 회사에서도 이러한 점 때문에 팀원분들과 디자이너분께 강력하게 어필하여 Loading Skeleton을 모두 적용하였었는데, 마찬가지로 적용했던 내용과 같은 것을 듣게되어 놀랐다.

발표 내용은 두개의 컨테이너를 교차하여 빛반사가 움직이는 효과를 적용한 과정에 대해 간략하게 설명해 주셨고 `Shimmer` 라는 Package를 사용하면 보다 간편하게 적용할 수 있음을 공유해주셨다.

하지만, 두개의 컨테이너를 교차하지 않아도 CustomPaint를 활용하면 같은 효과를 낼 수 있다. Gradient 범위를 설정해주면 범위 밖의 색상은 가장 바깥에 설정해준 색상으로 표시되기 때문에 동일한 효과를 낼 수 있다.

### CustomScrollView + Dropdown

마지막 발표내용까지도 이전에 Help 페이지를 적용하며 구현했던 Scroller 의 위치를 가져와 UI에 적용하는, 이번 회사에 들어오고 한달동안 뜯어 고쳤던 UI들에 대한 내용들이 모두 나와서 깜짝 놀랐다.. 역시 어느회사나 하는 일들은 비슷한 것 같다.

발표자분의 경우 화면 스크롤 시 CustomScrollView 위에 표시해준 Overlay가 화면이 스크롤될 때 같이 올라가는 문제가 있었고 이를 Scrollbar offset을 가져와 높이를 계속 추가해주어 해결한 내용에 대해 공유해 주었다.

이 부분에 있어서도 `Flutter` 의 Overlay 위젯을 활용하면 `Main` 위젯을 부모요소로 가지므로 해결가능한 문제였지만, 스크롤바의 offset을 가져와서 다양한 Interaction을 구현하는 방식은 많이 활용되므로 어떻게 코드를 작성하였는지 흥미롭게 들었다.

### 디자이너와 소통하기

디자이너분들과 메신저를 통해서 소통한 방법들과 내용들에 대해 공유해주셨다. 명확하게 의견을 주고받을 수 있도록 다양한 방법을 제공해주셨는데 해당 방법들은 다음과 같다.

* 내가 이해한 바를 정확하게 공유하기
* 질문할 때는 이해가 쉽게 시각 자료를 첨부하기
* 선택이 필요할 때는 가능한 옵션을 먼저 제공하기
* 디자이너의 의도와 동일하게 구현하기 위해 최선을 다하기

## 플러터 렌더링 해부학

Flutter Seoul의 오거나이저로 활동 중이신 에이든님의 발표로 플로터 위젯이 화면에 표시될 때 어떠한 방식으로 렌더링이 되는지, Dart 코드를 뜯어보며 확인해보도록 자료를 준비해주셨다. 에이든님의 경우 Flutter 월간 세미나에서도 Flutter Web의 Image 렌더링에 대한 발표를 들었었는데, 두 내용 모두 찾아보기 귀찮고 생각만해도 피곤한 내용들을 꼼꼼히 잘 설명해주셔서 많은 도움이 되었다.

### 랜더링 과정



## Flutter web을 활용하여 제품 개발 환경 개선하기

## 어느날 갑자기 앱이 터졌을 때

## Flutter Bloc을 제품 개발에 야무지게 적용하기
