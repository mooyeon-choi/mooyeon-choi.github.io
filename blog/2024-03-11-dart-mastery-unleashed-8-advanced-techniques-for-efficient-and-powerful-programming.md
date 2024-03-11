---
slug: monorepo
title: Dart 완전 정복 - 효율적이고 강력한 프로그래밍을 위한 8가지 고급 테크닉
authors: mooyeon
tags: [dart, frontend]
date: 2024-03-11T21:50
---

> Dart에 관한 도움이 될만한 자료들을 번역

# Dart 완전 정복 - 효율적이고 강력한 프로그래밍을 위한 8가지 고급 테크닉

- 원문: https://medium.com/gitconnected/dart-mastery-unleashed-8-advanced-techniques-for-efficient-and-powerful-programming-76c4ad13c743

## 소개

구글에서 개발한 현대적인 프로그래밍 언어 **Dart**는 그 간결한 문법과 강력한 기능, 특히 **Flutter** 프레임워크와의 연계성으로 개발자들 사이에서 상당한 찬사를 받았습니다. 이 글에서는 기술적 깊이, 영감을 주는 특성, 그리고 **Dart** 개발 효율성을 크게 향상시킬 수 있는 능력으로 알려진 8가지 놀라운 **Dart** 프로그래밍 기법을 탐구합니다.

:::info 목차

1. 제네릭 타입 별칭 활용
2. 스트림에 대한 고급 처리 기법
3. `isolate`를 활용한 경량 병렬 컴퓨팅
4. 열거형(Enum)
5. `const` 생성자 활용법
6. 메타데이터 주석 및 리플렉션
7. 익명 믹스인(Mixins)
8. 비동기 프로그래밍 기술

:::

<!--truncate-->

## 1. 제네릭 타입 별칭 활용

Type aliases를 활용하면 간단한 이름으로 더 복잡한 형식을 정의할 수 있으므로 중첩된 제네릭을 처리할 때 유용합니다.

```dart
typedef ComplexList<T> = List<Map<T, T>>;
 ​
void main() {
  // Used for creating lists with specific key-value pair types
  ComplexList<String> complexList = [
    {'key1': 'value1'},
    {'key2': 'value2'},
  ];

  // Operations on a complex collection
  complexList.add({'key3': 'value3'});
  print(complexList);
}
```

제네릭 형식 별칭은 코드 구성과 가독성을 향상시킵니다.

## 2. 스트림에 대한 고급 처리 기법

`stream`에서 제공하는 다양한 연산자 및 변환기를 활용하면 이벤트 스트림 및 비동기 데이터를 처리하기 쉽습니다.

```dart
Stream<int> timedCounter(Duration interval, int maxCount) async* {
  int count = 0;
  while (count < maxCount) {
    await Future.delayed(interval);
    yield ++count;
  }
}
​
void main() async {
  // Listening to a Stream and executing specific logic
  await for (final count in timedCounter(Duration(seconds: 1), 5)) {
    print(count);
  }
}
```

`async* yield`를 활용하면 데이터 시퀀스를 내보내는 **Streams**를 생성하여 비동기 프로그래밍에 대한 강력한 지원을 제공할 수 있습니다.

## 3. **Isolates**를 활용한 경량 병렬 컴퓨팅

`isolate`는 서로 다른 실행 스레드에서 동시에 작업을 실행하는 역할을 합니다.

```dart
import 'dart:isolate';
 ​
Future<void> computeOnIsolate() async {
  final receivePort = ReceivePort();

  Isolate.spawn(_heavyComputation, receivePort.sendPort);

  final message = await receivePort.first as String;
  print(message);
}
​
void _heavyComputation(SendPort sendPort) {
  // Intensive computation
  // Assume this is a CPU-intensive operation
  sendPort.send('Computation complete');
}
​
void main() {
  computeOnIsolate();
}
```

`isolate`를 통해 `main`에 영향을 주지 않고 `Flutter` 애플리케이션에서 시간이 많이 걸리는 작업을 수행할 수 있습니다.

## 4. 열거형(Enum)

`Enum` 타입은 명명된 상수 집합을 나타내는데에도 유용하지만, 확장 메서드를 활용하면 기능을 더욱 향상시킬 수 있습니다.

```dart
enum ConnectionState {
  none,
  waiting,
  active,
  done,
}
​
extension ConnectionStateX on ConnectionState {
  bool get isTerminal => this == ConnectionState.done;
}
​
void main() {
  final state = ConnectionState.active;

  print('Is the connection terminal? ${state.isTerminal}');
}
```

`Enum` 타입의 확장성은 객채지향과 유사한 패턴을 제공하여 안정성을 유지하면서 기능을 추가할 수 있습니다.

## 5. `const` 생성자 활용법

`const` 생성자를 사용하면 컴파일 시간에 변경할 수 없는 인스턴스를 만들어 성능 최적화에 도움이 됩니다.

```dart
class ImmutableWidget {
  final int id;
  final String name;
​
  const ImmutableWidget({this.id, this.name});
​
  @override
  String toString() => 'ImmutableWidget(id: $id, name: $name)';
}
​
void main() {
  const widget1 = ImmutableWidget(id: 1, name: 'Widget 1');
  const widget2 = ImmutableWidget(id: 1, name: 'Widget 1');
​
  // Since identifiers are the same, they refer to the same instance
  print(identical(widget1, widget2)); // Output: true
}
```

`const` 생성자를 사용하여 만든 인스턴스는 불변성(Immutable)을 가지므로 `Dart` VM 여러 위치에서 다시 사용할 수 있습니다.

## 6. 메타데이터 주석 및 리플렉션

`Flutter`에서는 라이브러리를 사용할 수 없지만 메타데이터의 사용 방법을 이해한다면 디자인에 대한 새로운 영감을 얻을 수 있습니다.

```dart
import 'dart:mirrors'; // Note: Not available on non-Web platforms
 ​
class Route {
  final String path;
  const Route(this.path);
}
​
@Route('/login')
class LoginPage {}
​
void main() {
  final mirror = reflectClass(LoginPage);
  for (final instanceMirror in mirror.metadata) {
    final annotation = instanceMirror.reflectee;
    if (annotation is Route) {
      print('Route for LoginPage: ${annotation.path}');
    }
  }
}
```

주석을 통해 읽기 쉬운 메타데이터를 추가하고, 실행 시점에 리플렉션을 사용하여 이를 가져올 수 있습니다. 또한 `Flutter`에서는 코드 생성과 같은 다른 방법도 활용할 수 있습니다.

## 7. 익명 믹스인(Mixins)

익명 `Mixin`을 생성하면 `Mixin`을 `global scope`에 노출하지 않고도 코드를 재사용할 수 있습니다.

```dart
class Bird {
  void fly() {
    print('Flying');
  }
}
​
class Swimmer {
  void swim() {
    print('Swimming');
  }
}
​
class Duck extends Bird with Swimmer {}
​
void main() {
  final duck = Duck();
  duck.fly();
  duck.swim();
}
```

익명 `Mixin`을 활용하면 명시적인 **Class 계층 구조**를 만들지 않고도 다른 클래스에 유사한 기능을 통합할 수 있으므로 코드를 재사용할 수 있습니다.

## 8. 비동기 프로그래밍 기술

비동기 프로그래밍에서 `Dart`는 `Future`, `Stream`, `async` 및 `await`와 같은 강력한 도구를 제공합니다.

```dart
Future<String> fetchUserData() {
  // Assume this is a network request
  return Future.delayed(Duration(seconds: 2), () => 'User data');
}
​
Future<void> logInUser(String userId) async {
  print('Attempting to log in user...');
  try {
    final data = await fetchUserData();
    print('Login successful: $data');
  } catch (e) {
    print('Login failed: $e');
  }
}
​
void main() {
  logInUser('123');
}
```

`async` 및 `await`를 사용하면 동기 코드와 비슷하게 표시되는 비동기 작업을 작성하여 비동기 코드를 간결하고 이해하기 쉽게 작성할 수 있습니다.
