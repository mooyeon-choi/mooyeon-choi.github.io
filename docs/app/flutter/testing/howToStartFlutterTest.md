# 시작하기

## Flutter 개발 환경 설정

이 실습을 완료하려면 [Flutter SDK](https://docs.flutter.dev/get-started/install)와 [편집기](https://docs.flutter.dev/get-started/editor)라는 두 가지 소프트웨어가 필요합니다.

다음 기기 중 하나를 사용하여 이 Codelab을 실행할 수 있습니다.

- 컴퓨터에 연결되어 있고 개발자 모드로 설정된 실제 [Android](https://docs.flutter.dev/get-started/install/macos/mobile-android#configure-android-development) 또는 [iOS](https://docs.flutter.dev/deployment/ios) 기기
- [iOS 시뮬레이터](https://docs.flutter.dev/get-started/install/macos/mobile-ios#configure-your-target-ios-device)(Xcode 도구 설치 필요)
- [Android Emulator](https://docs.flutter.dev/get-started/install/macos/mobile-android#configure-your-target-android-device)(Android 스튜디오 설정 필요)
- 브라우저(디버깅 시 Chrome 필요)
- [Windows](https://docs.flutter.dev/get-started/install/windows/desktop), [Linux](https://docs.flutter.dev/get-started/install/linux#linux-setup) 또는 [macOS](https://docs.flutter.dev/get-started/install/linux#linux-setup) 데스크톱 애플리케이션. 앱을 배포할 플랫폼에서 개발해야 합니다. 따라서 Windows 데스크톱 앱을 개발하려면 적합한 빌드 체인에 액세스할 수 있도록 Windows에서 개발해야 합니다. 자세한 운영체제별 요구사항은 [docs.flutter.dev/desktop](https://docs.flutter.dev/platform-integration/desktop)을 참고하세요.

## 새 Flutter 앱 만들기 및 종속 항목 업데이트

이 Codelab에서는 Flutter 모바일 앱을 테스트하는 데 중점을 둡니다. 따라서 복사하여 붙여넣은 소스 파일을 사용해서 테스트할 앱을 빠르게 만듭니다. 그런 다음, Codelab의 나머지 부분에서는 다양한 종류의 테스트를 알아보는 데 중점을 둡니다.

### [첫 번째 Flutter 앱 시작하기](https://docs.flutter.dev/get-started/test-drive)의 안내를 사용하거나 명령줄에 다음과 같이 입력하여 간단한 템플릿 형식의 Flutter 앱을 만듭니다.

```bash
$ flutter create testing_app
```

### 명령줄에 pub 종속 항목을 추가합니다. 상태 관리를 쉽게 하기 위해 [`provider`](https://pub.dev/packages/provider)를 추가합니다.

```bash
$ cd testing_app
$ flutter pub add provider
Resolving dependencies...
  collection 1.17.0 (1.17.1 available)
  js 0.6.5 (0.6.7 available)
  matcher 0.12.13 (0.12.14 available)
  meta 1.8.0 (1.9.0 available)
+ nested 1.0.0
  path 1.8.2 (1.8.3 available)
+ provider 6.0.5
  test_api 0.4.16 (0.4.18 available)
Changed 2 dependencies!
```

기기와 에뮬레이터에서 Flutter 코드를 자율적으로 구동하여 테스트하기 위해 [`integration_test`](https://github.com/flutter/flutter/tree/main/packages/integration_test)를 추가합니다.

```bash
$ flutter pub add --dev --sdk=flutter integration_test
Resolving dependencies...
+ archive 3.3.2 (3.3.6 available)
  collection 1.17.0 (1.17.1 available)
+ crypto 3.0.2
+ file 6.1.4
+ flutter_driver 0.0.0 from sdk flutter
+ fuchsia_remote_debug_protocol 0.0.0 from sdk flutter
+ integration_test 0.0.0 from sdk flutter
  js 0.6.5 (0.6.7 available)
  matcher 0.12.13 (0.12.14 available)
  meta 1.8.0 (1.9.0 available)
  path 1.8.2 (1.8.3 available)
+ platform 3.1.0
+ process 4.2.4
+ sync_http 0.3.1
  test_api 0.4.16 (0.4.18 available)
+ typed_data 1.3.1
+ vm_service 9.4.0 (11.0.1 available)
+ webdriver 3.0.1 (3.0.2 available)
Changed 12 dependencies!
```

실제 기기와 에뮬레이터에서 실행되는 Flutter 애플리케이션을 테스트하는 고급 API를 위해 [`flutter_driver`](https://api.flutter.dev/flutter/flutter_driver/flutter_driver-library.html)를 추가합니다.

```bash
$ flutter pub add --dev --sdk=flutter flutter_driver
Resolving dependencies...
  archive 3.3.2 (3.3.6 available)
  collection 1.17.0 (1.17.1 available)
  js 0.6.5 (0.6.7 available)
  matcher 0.12.13 (0.12.14 available)
  meta 1.8.0 (1.9.0 available)
  path 1.8.2 (1.8.3 available)
  test_api 0.4.16 (0.4.18 available)
  vm_service 9.4.0 (11.0.1 available)
  webdriver 3.0.1 (3.0.2 available)
Got dependencies!
```

일반적인 테스트 도구를 위해 [`test`](https://pub.dev/packages/test)를 추가합니다.

```bash
$ flutter pub add --dev test
Resolving dependencies...
+ _fe_analyzer_shared 52.0.0
+ analyzer 5.4.0
  archive 3.3.2 (3.3.6 available)
+ args 2.3.2
  collection 1.17.0 (1.17.1 available)
+ convert 3.1.1
+ coverage 1.6.3
+ frontend_server_client 3.2.0
+ glob 2.1.1
+ http_multi_server 3.2.1
+ http_parser 4.0.2
+ io 1.0.4
  js 0.6.5 (0.6.7 available)
+ logging 1.1.1
  matcher 0.12.13 (0.12.14 available)
  meta 1.8.0 (1.9.0 available)
+ mime 1.0.4
+ node_preamble 2.0.1
+ package_config 2.1.0
  path 1.8.2 (1.8.3 available)
+ pool 1.5.1
+ pub_semver 2.1.3
+ shelf 1.4.0
+ shelf_packages_handler 3.0.1
+ shelf_static 1.1.1
+ shelf_web_socket 1.0.3
+ source_map_stack_trace 2.1.1
+ source_maps 0.10.11
+ test 1.22.0 (1.23.0 available)
  test_api 0.4.16 (0.4.18 available)
+ test_core 0.4.20 (0.4.23 available)
  vm_service 9.4.0 (11.0.1 available)
+ watcher 1.0.2
+ web_socket_channel 2.3.0
  webdriver 3.0.1 (3.0.2 available)
+ webkit_inspection_protocol 1.2.0
+ yaml 3.1.1
Changed 28 dependencies!
```

앱 탐색을 처리하기 위해 [`go_router`](https://pub.dev/packages/go_router)를 추가합니다.

```bash
$ flutter pub add go_router
Resolving dependencies...
  archive 3.3.2 (3.3.6 available)
  collection 1.17.0 (1.17.1 available)
+ flutter_web_plugins 0.0.0 from sdk flutter
+ go_router 6.0.4
  js 0.6.5 (0.6.7 available)
  matcher 0.12.13 (0.12.14 available)
  meta 1.8.0 (1.9.0 available)
  path 1.8.2 (1.8.3 available)
  test 1.22.0 (1.23.0 available)
  test_api 0.4.16 (0.4.18 available)
  test_core 0.4.20 (0.4.23 available)
  vm_service 9.4.0 (11.0.1 available)
  webdriver 3.0.1 (3.0.2 available)
Changed 2 dependencies!
```

다음 종속 항목이 [`pubspec.yaml`](https://github.com/flutter/codelabs/blob/main/testing_codelab/step_03/pubspec.yaml)에 추가되어 있어야합니다.

`dependencies` 아래는 다음과 같습니다.

```yaml
dependencies:
  provider: ^6.0.5
  go_router: ^6.0.4
```

`dev_dependencies` 아래는 다음과 같습니다.

```yaml
dev_dependencies:
  integration_test:
    sdk: flutter
  flutter_driver:
    sdk: flutter
  test: ^1.22.0
```

### 선택한 [코드 편집기](https://docs.flutter.dev/get-started/editor)에서 프로젝트를 열고 앱을 실행합니다. 또는 다음과 같이 명령줄에서 앱을 실행합니다.

```bash
$ flutter run
```
