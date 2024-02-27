# Bloc 시작하기

## Dart SDK 설치

## Bloc 구성 패키지

- bloc - bloc 코어 라이브러리
- flutter_bloc - 빠르고 반응성이 뛰어난 모바일 애플리케이션 구축을 위한 위젯
- angular_bloc - 빠르고 반응성이 뛰어난 웹 애플리케이션 구축을 위한 Angular 구성 요소
- hydrated_bloc - 블록 상태를 자동으로 유지하고 복원하는 블록 상태 관리 라이브러리
- replay_bloc - 실행 취소 및 다시 실행에 대한 지원을 추가하는 블록 상태 관리 라이브러리

## Install

먼저 `pubspec.yaml` 종속성으로 추가해줍니다.

`pubspec.yaml`

```yaml
dependencies:
  bloc: ^8.0.0
  flutter_bloc: ^8.0.0
  hydrated_bloc: ^9.1.4
  ...
```

다음으로 Bloc을 설치합니다.

:::warning 주의
`pubspec.yaml` 파일과 동일한 위치의 디렉터리에서 실행해야합니다.
:::

- `pub get` or `flutter pub get`

## Import

```dart
import 'package:bloc/bloc.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hydrated_bloc/hydrated_bloc.dart';
```
