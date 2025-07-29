# Provider 단위 테스트

먼저, `favorites` 모델에 대한 단위 테스트를 시작해 보겠습니다. 단위 테스트란 무엇인가요? 단위 테스트는 소프트웨어의 모든 개별 단위(함수, 객체 또는 위젯)가 의도한 동작을 올바르게 실행하는지 확인합니다.

Flutter 앱의 모든 테스트 파일은 `test` 디렉터리에 있습니다(통합 테스트 제외).

::: tip 참고
이 안내에서는 명령줄을 사용하여 테스트를 실행합니다. 그러나 VS Code 및 Android 스튜디오에서 제공하는 옵션을 사용하여 애플리케이션의 단위 및 위젯 테스트를 실행할 수도 있습니다.
:::

## `test/widget_test.dart` 삭제

> 테스트를 시작하기 전에 `widget_test.dart` 파일을 삭제합니다. 자체 테스트 파일을 추가하겠습니다.

## 새 테스트 파일 만들기

먼저, `Favorites` 모델의 `add()` 메서드를 테스트하여 새 항목이 목록에 추가되었는지와 목록에 변경사항이 반영되었는지 확인합니다. 규칙에 따라 test 디렉터리의 디렉터리 구조는 `lib` 디렉터리의 구조를 모방하고, Dart 파일은 같은 이름에 `_test`를 추가합니다.

> `test` 디렉터리에 `models` 디렉터리를 만듭니다. 이 새 디렉터리에 다음과 같은 내용으로 `favorites_test.dart` 파일을 만듭니다.

### [test/models/favorites_test.dart](https://github.com/flutter/codelabs/blob/main/testing_codelab/step_05/test/models/favorites_test.dart)

```dart
import 'package:test/test.dart';
import 'package:testing_app/models/favorites.dart';

void main() {
  group('Testing App Provider', () {
    var favorites = Favorites();

    test('A new item should be added', () {
      var number = 35;
      favorites.add(number);
      expect(favorites.items.contains(number), true);
    });
  });
}
```

Flutter 테스트 프레임워크를 사용하면 그룹 내에서 서로 관련된 유사한 테스트를 결합할 수 있습니다. `lib` 디렉터리에 있는 상응하는 파일의 다양한 부분을 테스트하기 위한 단일 테스트 파일에는 여러 그룹이 있을 수 있습니다.

`test()` 메서드는 위치가 지정된 2개의 매개변수를 사용합니다. 하나는 테스트의 `description`이며, 다른 하나는 실제로 테스트를 작성하는 `callback`입니다.

> 목록에서 항목을 삭제하는 것을 테스트합니다. 동일한 `Testing App Provider` 그룹에 다음 테스트를 삽입합니다.

### [test/models/favorites_test.dart](https://github.com/flutter/codelabs/blob/main/testing_codelab/step_05/test/models/favorites_test.dart)

```dart
test('An item should be removed', () {
  var number = 45;
  favorites.add(number);
  expect(favorites.items.contains(number), true);
  favorites.remove(number);
  expect(favorites.items.contains(number), false);
});
```

## 테스트 실행

> 명령줄에서 프로젝트의 루트 디렉터리로 이동하여 다음 명령어를 입력합니다.

```bash
$ flutter test test/models/favorites_test.dart
```

모든 것이 제대로 작동한다면 다음과 유사한 메시지가 표시됩니다.

```bash
00:06 +2: All tests passed!
```

전체 테스트 파일은 [`test/models/favorites_test.dart`](https://github.com/flutter/codelabs/blob/main/testing_codelab/step_05/test/models/favorites_test.dart)에서 확인할 수 있습니다.

::: tip 도움말
다음을 실행하면 `test` 디렉터리의 모든 테스트를 한 번에 실행할 수 있습니다.

```bash
$ flutter test
```

:::

단위 테스트에 관한 자세한 내용은 [단위 테스트 소개](https://flutter.dev/docs/cookbook/testing/unit/introduction)를 참고하세요.
