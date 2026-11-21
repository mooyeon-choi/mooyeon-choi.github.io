# 위젯 테스트

이 단계에서는 테스트 위젯에 코드를 추가합니다. 위젯 테스트는 Flutter의 고유한 테스트로, 격리된 방식으로 각 위젯을 테스트할 수 있습니다. 이 단계에서는 `HomePage` 화면과 `FavoritesPage` 화면을 개별적으로 테스트합니다.

위젯 테스트는 `test()` 함수 대신 `testWidget()` 함수를 사용합니다. `test()` 함수와 마찬가지로 `testWidget()` 함수는 두 개의 매개변수, `description`,과 `callback`을 사용하며, 콜백은 `WidgetTester`를 인수로 사용합니다.

위젯 테스트는 `TestFlutterWidgetsBinding`을 사용합니다. 이 클래스는 실행 중인 앱에서 사용하지만, 앱 내에서 실행하지는 않는 리소스와 동일한 리소스를 위젯에 제공합니다. 예를 들어, 화면 크기 정보, 애니메이션 예약 기능 등입니다. 대신, 위젯을 인스턴스화하는 데는 가상 환경을 사용하고 실행하면서 결과를 테스트합니다. 여기서 `pumpWidget`은 애플리케이션에서와 같이 특정 위젯을 마운트하고 측정하도록 프레임워크에 지시함으로써 프로세스를 시작합니다.

위젯 테스트 프레임워크는 위젯을 찾는 파인더(예: `text()`, `byType()`, `byIcon().`)를 제공합니다. 또한, 결과를 확인하기 위해 매처도 제공합니다.

먼저, `HomePage` 위젯을 테스트합니다.

## 새 테스트 파일 만들기

첫 번째 테스트는 `HomePage` 스크롤 기능이 제대로 작동하는지 확인합니다.

> `test` 디렉터리에 새 파일을 만들어 이름을 `home_test.dart`로 지정합니다. 새로 만든 파일에서 다음 코드를 추가합니다.

### [test/home_test.dart](https://github.com/flutter/codelabs/blob/main/testing_codelab/step_06/test/home_test.dart)

```dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:provider/provider.dart';
import 'package:testing_app/models/favorites.dart';
import 'package:testing_app/screens/home.dart';

Widget createHomeScreen() => ChangeNotifierProvider<Favorites>(
      create: (context) => Favorites(),
      child: const MaterialApp(
        home: HomePage(),
      ),
    );

void main() {
  group('Home Page Widget Tests', () {
    testWidgets('Testing Scrolling', (tester) async {
      await tester.pumpWidget(createHomeScreen());
      expect(find.text('Item 0'), findsOneWidget);
      await tester.fling(
        find.byType(ListView),
        const Offset(0, -200),
        3000,
      );
      await tester.pumpAndSettle();
      expect(find.text('Item 0'), findsNothing);
    });
  });
}
```

`createHomeScreen()` 함수를 사용하여 ChangeNotifierProvider에 래핑된 MaterialApp에서 테스트할 위젯을 로드하는 앱을 만듭니다. 위젯 트리에서 HomePage 위젯의 상위에 이러한 두 위젯이 모두 있어야 합니다. 그래야 HomePage 위젯이 두 위젯에서 상속받고 두 위젯이 제공하는 데이터에 액세스할 수 있습니다. 이 함수를 `pumpWidget()` 함수에 매개변수로 전달합니다.

그런 다음, 프레임워크가 화면에 렌더링된 `ListView`를 찾을 수 있는지 테스트합니다.

<aside class="callout tip">

<strong>참고</strong>

`ListView`에서 작업을 실행하기 때문에 이 테스트를 스크롤 테스트보다 먼저 실행해야 합니다. 그러나 위젯 테스트 작성 방식에 관해 개략적으로 설명하기 위해 스크롤 테스트를 먼저 작성했습니다.

</aside>


> 다음 코드 스니펫을 `home_test.dart`에 추가합니다.

### [test/home_test.dart](https://github.com/flutter/codelabs/blob/main/testing_codelab/step_06/test/home_test.dart)

```dart
group('Home Page Widget Tests', () {

  // BEGINNING OF NEW CONTENT
  testWidgets('Testing if ListView shows up', (tester) async {
    await tester.pumpWidget(createHomeScreen());
    expect(find.byType(ListView), findsOneWidget);
  });
  // END OF NEW CONTENT

    testWidgets('Testing Scrolling', (tester) async {
      await tester.pumpWidget(createHomeScreen());
      expect(find.text('Item 0'), findsOneWidget);
      await tester.fling(
        find.byType(ListView),
        const Offset(0, -200),
        3000,
      );
      await tester.pumpAndSettle();
      expect(find.text('Item 0'), findsNothing);
    });
});
```

## 테스트 실행

먼저, 단위 테스트를 실행한 것과 동일한 방식으로 명령어를 사용하여 테스트를 실행합니다.

```bash
$ flutter test test/home_test.dart
```

테스트는 신속하게 실행되어야 하며 다음과 같은 메시지가 표시됩니다.

```cmd
00:02 +2: All tests passed!
```

또한, 기기나 에뮬레이터를 사용하여 위젯 테스트를 실행할 수 있습니다. 이렇게 하면 테스트가 실행되는 것을 관찰할 수 있습니다. 핫 리스타트 기능도 사용할 수 있습니다.

> 기기를 연결하거나 에뮬레이터를 시작합니다. 데스크톱 애플리케이션으로 테스트를 실행할 수도 있습니다.

> 명령줄에서 프로젝트의 루트 디렉터리로 이동하여 다음 명령어를 입력합니다.

```bash
$ flutter run test/home_test.dart
```

테스트를 실행할 기기를 선택해야 할 수도 있습니다. 그런 경우에는 다음 안내에 따라 기기를 선택합니다.

```cmd
Multiple devices found:
Linux (desktop) • linux  • linux-x64      • Ubuntu 22.04.1 LTS 5.15.0-58-generic
Chrome (web)    • chrome • web-javascript • Google Chrome 109.0.5414.119
[1]: Linux (linux)
[2]: Chrome (chrome)
Please choose one (To quit, press "q/Q"):
```

모든 것이 제대로 작동한다면 다음과 비슷한 출력이 표시됩니다.

```cmd
Launching test/home_test.dart on Linux in debug mode...
Building Linux application...
flutter: 00:00 +0: Home Page Widget Tests Testing if ListView shows up
Syncing files to device Linux...                                    62ms

Flutter run key commands.
r Hot reload. 🔥🔥🔥
R Hot restart.
h List all available interactive commands.
d Detach (terminate "flutter run" but leave application running).
c Clear the screen
q Quit (terminate the application on the device).

💪 Running with sound null safety 💪

An Observatory debugger and profiler on Linux is available at: http://127.0.0.1:35583/GCpdLBqf2UI=/
flutter: 00:00 +1: Home Page Widget Tests Testing Scrolling
The Flutter DevTools debugger and profiler on Linux is available at:
http://127.0.0.1:9100?uri=http://127.0.0.1:35583/GCpdLBqf2UI=/
flutter: 00:02 +2: All tests passed!
```

다음으로, 테스트 파일을 변경하고 `Shift + R` 키를 눌러 앱을 핫 리스타트하고 모든 테스트를 다시 실행합니다. 애플리케이션을 중지하면 안 됩니다.

> HomePage 위젯을 테스트하는 그룹에 테스트를 더 추가합니다. 다음 테스트를 파일에 복사합니다.

### [test/home_test.dart](https://github.com/flutter/codelabs/blob/main/testing_codelab/step_06/test/home_test.dart)

```dart
testWidgets('Testing IconButtons', (tester) async {
  await tester.pumpWidget(createHomeScreen());
  expect(find.byIcon(Icons.favorite), findsNothing);
  await tester.tap(find.byIcon(Icons.favorite_border).first);
  await tester.pumpAndSettle(const Duration(seconds: 1));
  expect(find.text('Added to favorites.'), findsOneWidget);
  expect(find.byIcon(Icons.favorite), findsWidgets);
  await tester.tap(find.byIcon(Icons.favorite).first);
  await tester.pumpAndSettle(const Duration(seconds: 1));
  expect(find.text('Removed from favorites.'), findsOneWidget);
  expect(find.byIcon(Icons.favorite), findsNothing);
});
```

이 테스트는 `IconButton`을 탭하면 `Icons.favorite_border`(🤍)에서 `Icons.favorite`(❤️)으로 변경되고 다시 탭하면 `Icons.favorite_border`로 되돌아가는지 확인합니다.

> `Shift + R` 키를 입력합니다. 그러면 앱이 핫 리스타트되고 모든 테스트가 다시 실행됩니다.

전체 테스트 파일은 [`test/home_test.dart`](https://github.com/flutter/codelabs/blob/main/testing_codelab/step_06/test/home_test.dart)에서 확인할 수 있습니다.

> 동일한 프로세스를 사용하여 다음 코드로 `FavoritesPage`를 테스트합니다. 동일한 단계를 따르고 실행합니다.

### [test/favorites_test.dart](https://github.com/flutter/codelabs/blob/main/testing_codelab/step_06/test/favorites_test.dart)

```dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:provider/provider.dart';
import 'package:testing_app/models/favorites.dart';
import 'package:testing_app/screens/favorites.dart';

late Favorites favoritesList;

Widget createFavoritesScreen() => ChangeNotifierProvider<Favorites>(
      create: (context) {
        favoritesList = Favorites();
        return favoritesList;
      },
      child: const MaterialApp(
        home: FavoritesPage(),
      ),
    );

void addItems() {
  for (var i = 0; i < 10; i += 2) {
    favoritesList.add(i);
  }
}

void main() {
  group('Favorites Page Widget Tests', () {
    testWidgets('Test if ListView shows up', (tester) async {
      await tester.pumpWidget(createFavoritesScreen());
      addItems();
      await tester.pumpAndSettle();
      expect(find.byType(ListView), findsOneWidget);
    });

    testWidgets('Testing Remove Button', (tester) async {
      await tester.pumpWidget(createFavoritesScreen());
      addItems();
      await tester.pumpAndSettle();
      var totalItems = tester.widgetList(find.byIcon(Icons.close)).length;
      await tester.tap(find.byIcon(Icons.close).first);
      await tester.pumpAndSettle();
      expect(tester.widgetList(find.byIcon(Icons.close)).length,
          lessThan(totalItems));
      expect(find.text('Removed from favorites.'), findsOneWidget);
    });
  });
}
```

이 테스트는 닫기(삭제) 버튼을 누를 때 항목이 사라지는지 확인합니다.

위젯 테스트에 관한 자세한 내용은 다음을 참고하세요.

- [위젯 테스트 소개](https://flutter.dev/docs/cookbook/testing/widget/introduction)
- [위젯 찾기](https://flutter.dev/docs/cookbook/testing/widget/finders)
- [텍스트 탭, 드래그, 입력](https://flutter.dev/docs/cookbook/testing/widget/tap-drag)
- [`flutter_test` 라이브러리](https://api.flutter.dev/flutter/flutter_test/flutter_test-library.html)
- [`WidgetTester` 클래스](https://api.flutter.dev/flutter/flutter_test/WidgetTester-class.html)
