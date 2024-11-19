---
slug: how-to-upload-opensource-package
title: 오픈소스 패키지 배포 시 고려해야할 것들
authors: mooyeon
tags: [Flutter, pub.dev, Opensource]
date: 2024-11-16T12:47
---

# 오픈소스 패키지 배포 시 고려해야할 것들

## 소개

Flutter 환경에서 커스터마이징 가능한 움직이는 아이콘 개발과 배포를 진행하면서 찾아본 내용들을 정리하였다. 어떻게 하면 좀 더 많은 사람들이 편하게 활용할 수 있도록 작성할 수 있을 지, 어떻게 코드를 작성해야 다른 사람들이 코드를 확인하고 수정하기 더 편할지를 생각하며 성공한 여러 오픈소스 패키지들을 참고하고 관련 글을 찾아본 내용들을 정리하였다.

:::info 목차

1. [Flutter의 패키지 배포 환경](#flutter의-패키지-배포-환경)
2. [Flutter 패키지 개발하기](#flutter-패키지-개발하기)
3. [패키지 버전 관리 가이드](#패키지-버전-관리-가이드)

:::

<!--truncate-->

## Flutter의 패키지 배포 환경

Flutter는 다른 개발자가 Flutter 및 Dart 생태계에 기여한 공유 패키지를 사용하도록 지원한다. 이를 통해 모든 것을 처음부터 개발하지 않고도 앱을 빠르게 빌드할 수 있다.

:::info 패키지와 플러그인의 차이점

플러그인은 패키지의 한 유형으로 전체 명칭은 *플러그인 패키지*이며 일반적으로 플러그인이라고 줄여 부른다.

**패키지**

Dart 패키지는 최소한 `pubspec.yaml` 파일을 포함하는 디렉토리이다. 또한 패키지에는 종속성(pubspec에 나열됨), Dart 라이브러리, 앱, 리소스, 테스트, 이미지, 글꼴 및 예시가 포함될 수 있다. [pub.dev](https://pub.dev/) 사이트에는 Google 엔지니어와 Flutter 및 Dart 커뮤니티의 구성원들이 개발한 패키지들이 소개되어 있으며, 앱에서 활용할 수 있다.

**플러그인**

플러그인 패키지는 플랫폼 기능을 앱에서 사용할 수 있게 해주는 특별한 종류의 패키지이다. 플러그인 패키지는 Android(Kotlin 또는 Java 사용), iOS(Swift 또는 Objective-C 사용), 웹, macOS, Windows, Linux 또는 이들의 조합으로 작성될 수 있다. 예를 들어, 플러그인은 Flutter 앱에 기기의 카메라를 사용할 수 있는 기능을 제공할 수 있다.

[Packages versus plugins | Decoding Flutter](https://www.youtube.com/watch/Y9WifT8aN6o)

:::

### 패키지 사용

패키지는 [pub.dev](https://pub.dev/)에 게시된다. `pub.dev`의 [Flutter 랜딩 페이지](https://pub.dev/flutter)는 Flutter와 호환되는 상위 패키지(일반적으로 Flutter와 호환되는 종속성을 선언한 패키지)를 표시하고 게시된 모든 패키지를 검색하는 기능을 지원한다.

pub.dev의 [Flutter Favorites](https://pub.dev/flutter/favorites) 페이지에는 앱을 작성할 때 크게 도움이 되는 패키지들이 나열되어있어 이를 활용하면 보다 빠르게 애플리케이션을 개발할 수 있다.

또한 `Android`, `iOS`, `web`, `Linux`, `Windows`, `macOS`를 필터링하여 현재 환경에서 활용할 수 있는 패키지 목록도 찾아볼 수 있다.

#### 앱에 패키지 종속성 추가하기

예시로 `css_colors`를 추가해보자

1. `dependencies` 추가
    * 프로젝트 폴더에 있는 `pubspec.yaml` 파일을 열고 `dependencies` 항목에 `css_colors`를 추가한다.

2. Install
    * 터미널:
        `flutter pub get`을 실행한다
    * VS Code:
        다운로드 아이콘으로 표시된 상단 작업 목록의 **패키지 가져오기**를 클릭한다.
    * Android Studio/IntelliJ:
        `pubspec.yaml` 상단의 작업 목록에서 **Pub get**을 클릭한다.

3. Import
    * Dart code에 `import`를 사용하여 패키지를 추가한다.

4. 앱 재실행하기
    * `hot reload/restart`의 경우 Dart 코드만 업데이트 하므로 패키지가 플랫폼별 코드 (Android의 경우 Kotlin/Java, iOS의 경우 Swift/Objective-C)를 가져오는 경우 앱을 재실행하여 빌드해야한다.

#### 터미널 명령어를 통한 추가

`flutter pub add "some-package"`를 통해서도 패키지 종속성을 추가할 수 있다. 마찬가지로 `css_colors`를 예시로 확인해보자.

1. 프로젝트 디렉토리 내부 터미널에서 명령어 실행
    * `flutter pub add css_colors`

2. Import
    * Dart code에 `import`를 사용하여 패키지를 추가한다.

3. 앱 재실행하기
    * `hot reload/restart`의 경우 Dart 코드만 업데이트 하므로 패키지가 플랫폼별 코드 (Android의 경우 Kotlin/Java, iOS의 경우 Swift/Objective-C)를 가져오는 경우 앱을 재실행하여 빌드해야한다.

#### 패키지 종속성 제거

`flutter pub remove`를 통해 패키지를 제거할 수 있다.

1. 프로젝트 디렉토리 내부 터미널에서 명령어 실행
    * `flutter pub add css_colors`

#### 문제 해결

앱에서 `some_package`와 `another_package`를 사용하려 한다. 두 패키지는 모두 `url_launcher`를 종속성으로 가지고 있는데 `url_launcher`의 버전이 다르다고 가정해보자. 그러면 두 패키지를 가져올 때 충돌이 발생하게 될 것이다.

이를 피하는 가장 좋은 방법은 패키지 작성자가 종속성을 지정할 때 특정 버전 대신 **범위** 버전을 설정하는 것 이다.

:::info Caret syntax & Traditional syntax

버전 범위를 설정해주는 방법은 `caret syntax`와 `traditional syntax` 방식이 있다.

**caret syntax**

`caret syntax`의 경우 다음과 같이 사용한다. ex. `^1.2.3`

이는 `>=1.2.3 <2.0.0`의 의미를 가지며 메이저 버전이 바뀌지 않는 모든 버전을 포함하는 의미를 가진다.

**traditional syntax**

`traditional syntax`의 경우 단어 그대로 이전부터 사용되던 범위 설정 방식이며 아래와 같이 설정한다.

|**Value**|**허용 범위**|**사용가능 여부**|**메모**|
|-|-|-|-|
|`any`|모든 버전|No|비어있는 버전 제약 조건을 명시적으로 보여주는 역할이다.|
|`1.2.3`|해당 버전만|No|패키지를 사용하는 앱에 제약이 걸리기 때문에 패키지가 채택되지 않는다.|
|`>=1.2.3`|주어진 버전 이상|Yes||
|`>1.2.3`|주어진 버전 이후|No||
|`<=1.2.3`|주어진 버전 이하|No||
|`<1.2.3`|주어진 버전 이전|No||

패키지의 경우 여러 사용자들이 제약없이 활용할 수 있어야하므로 `>=` 만 허용되는 것에 유의하자.

:::

종속성을 범위 버전으로 설정해주면 pub은 자동으로 문제를 해결해준다.

만약 해당 패키지를 직접 수정할 수 없는 경우에는 어떻게 할까? `pubspec.yaml`파일에서 `dependency_overrides`를 설정하여 종속성을 재정의 할 수 있다.

```yaml title="pubspec.yaml"
dependencies:
    some_package:
    another_package:
dependency_overrides:
    url_launcher: '5.4.0'
```

충돌하는 종속성이 패키지 자체가 아니라 Android나 iOS 전용 라이브러리일 경우에는 어떻게 할까? **Android**의 경우 종속성 재정의 선언을 `Gradle` 빌드 로직에 추가하여 강제할 수 있다. `guava` 패키지를 예시로 보자.

```groovy
configuration.all {
    resolutionStrategy {
        force 'com.google.guava:guava:28.0-android'
    }
}
```

**CocoaPods**의 경우 현재(2024-11-19) 종속성 재정의 기능을 제공하지 않고 있다.



## Flutter 패키지 개발하기

원하는 패키지가 없는 경우 새로운 패키지를 작성하는 방법은 어떻게 될까?

### 패키지 종속성 및 버전 관리

우선 버전 충돌 위험을 최소화하기 위해 `pubspec.yaml` 파일에서 버전 범위를 설정해줘야한다.

#### 패키지 버전

모든 패키지에는 `pubspec.yaml` 파일에 지정된 패키지 버전 번호가 있다. 패키지의 현재 버전은 이름 옆에 표시된다.(예시 `url_launcher`: [url_launcher 6.3.1](https://pub.dev/packages/url_launcher)) 또한 모든 이전 버전 목록을 확인할 수 있다.(예시 [url_launcher 버전](https://pub.dev/packages/url_launcher/versions))

패키지를 업데이트할 때 마이그레이션 작업 없이 앱이 동작하도록 하기 위해 종속성들을 버전 범위로 설정해준다.

* **범위 제약 조건**: 최소 및 최대 버전 지정
    ```yaml
    dependencies:
        url_launcher: '>=5.4.0 <6.0.0'
    ```

* **[캐럿 구문](https://dart.dev/tools/pub/dependencies#caret-syntax)을 이용한 범위 제약**: 최소 버전을 설정한다. 이는 해당 버전부터 다음 메이저 버전 이전까지의 모든 버전을 포함한다.
    ```yaml
    dependencies:
        collection: '^5.4.0'
    ```

    이 구문은 위 **범위 제약 조건** 과 같은 의미를 가진다.

상세 내용은 다음에 살펴볼 [패키지 버전 관리 가이드](#패키지-버전-관리-가이드)에서 확인하자.

#### 공개되지 않은 패키지에 대한 종속성

패키지는 pub.dev에 게시되지 않은 경우에도 활용할 수 있다. 비공개 패키지 또는 로컬 패키지와 같은 게시할 준비가 되지 않은 패키지의 경우 추가 종속성 옵션을 사용할 수 있다.

##### 경로 종속성

Flutter 앱은 파일 시스템 `path:` 종속성을 사용하여 패키지에 종속될 수 있다. 경로는 상대 경로 또는 절대 경로일 수 있다. 상대 경로는 `pubspec.yaml`을 포함하는 디렉토리를 기준으로 평가된다. 예를 들어, 옆 디렉토리에 있는 패키지에 종속되려면 다음과 같이 설정한다.

```yaml title="상대 경로 종속성"
dependencies:
packageA:
    path: ../pacakgeA/
```

##### Git 종속성

Git 저장소에 저장된 패키지에 의존할 수도 있다. 패키지가 저장소 루트에 있는 경우 다음과 같이 설정한다.

```yaml title="Git 종속성"
dependencies:
    packageA:
        git:
            url: https://github.com/flutter/packageA.git
```

##### SSH를 사용한 Git 종속성

저장소가 비공개이고 SSH를 사용하여 연결할 수 있는 저장소의 SSH URL을 사용하여 설정한다.

```yaml title="SSH를 사용한 Git 비공개 저장소"
dependencies:
    packageA:
        git:
            url: git@github.com:flutter/packageA.git
```

##### 폴더 내 패키지에 대한 Git 종속성

Pub은 패키지가 Git 저장소의 루트에 있다고 가정한다. 그렇지 않은 경우 `path`로 위치를 지정한다.

```yaml title="폴더 내 패키지에 대한 Git 종속성"
dependencies:
    packageA:
        git:     
            url: https://github.com/flutter/packages.git
            path: packages/packageA
```

##### 특정 커밋, 브랜치 고정 Git 종속성

마지막으로 `ref`인수를 사용하여 종속성을 특정 git 커밋, 브랜치 또는 태그에 고정한다.

```yaml
dependencies:
  kittens:
    git:
      url: git@github.com:munificent/kittens.git
      ref: some-branch
```

추가적인 내용은 [패키지 종속성](https://dart.dev/tools/pub/dependencies)을 확인하자.

## 패키지 버전 관리 가이드

## 성공적으로 활용중인 오픈소스 패키지들

