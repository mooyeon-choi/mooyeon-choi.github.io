# 핵심 개념

## `package:bloc`

:::tip 참고
아래 내용을 확인하기 전에 [`package:bloc`](https://pub.dev/packages/bloc) 내용을 읽어봅시다
:::

블록 패키지의 사용법을 이해하기 위해선 다음과 같은 몇가지 중요한 핵심 개념에 대해 알아야합니다. 이어지는 내용에서 각각의 세부내용을 살펴보며 Counter App. 을 생성합니다.

### Streams

:::tip 참고
다음의 [Dart 공식문서](https://dart.dev/tutorials/language/streams)에서 `Streams`에 대한 정보를 추가로 확인할 수 있습니다.
:::

> Stream은 비동기 데이터 시퀀스입니다.

Bloc 라이브러리를 사용하기 위해서는 기본적으로 `Streams`에 대해 이해하고 어떻게 동작하는지 알아야합니다.

> 만약 `Steams`에 대해 잘 모르겠다면, 물이 흐르는 파이프를 생각해보세요 `Stream`은 파이프, 비동기 데이터는 흐르는 물 입니다.

아래와 같이 Dart 코드로 `Stream` `async*`(비동기 생성기) 함수를 생성할 수 있습니다.

```dart
Stream<int> countStream(int max) async* {
    for (int i = 0; i < max; i++) {
        yield i;
    }
}
```

`async*`로 함수를 비동기로 생성하며, `yield`를 통해 `Stream` 데이터를 반환할 수 있습니다. 위의 예시 코드는 `max`까지의 정수 숫자를 반환합니다. `async*` 함수에서 `yield`가 호출될 때마다 `Stream` 데이터 조각을 넘겨줍니다. 이렇게 받은 값을 여러방법으로 활용할 수 있습니다. 아래는 위 `Stream`에서 받은 데이터로 정수의 합을 반환하는 함수입니다.

```dart
Future<int> sumStream(Stream<int> stream) async {
    int sum = 0;
    await for (int value in stream) {
        sum += value;
    }
    return sum;
}
```

위와 같이 함수를 `async`로 선언하면, `await` 키워드를 활용해 정수 값을 `Future`로 반환 받을 수 있습니다. 이 예시에서는 `stream`의 각 값을 기다리고 스트림에 있는 모든 정수의 합을 반환합니다. 이를 아래와 같이 정리할 수 있습니다.

```dart
void main() async {
    /// Initialize a stream of integers 0-9
    Stream<int> stream = countStream(10);
    /// Compute the sum of the stream of integers
    int sum = await sumStream(stream);
    /// Print the sum
    print(sum); // 45
}
```

이제 Dart `Streams`에 대한 기본적인 이해를 마치고 `Bloc` package의 핵심 구성요소인 `Cubit`에 대해 알아보겠습니다.

### Cubit

> `Cubit` 는 모든 유형의 상태를 관리하기 위해 사용할 수 있는 `BlocBase` Class 입니다.

![Cubit Architecture](./images/cubit_architecture_full.png)

`Cubit`는 상태 변경을 트리거하기위한 함수를 제공합니다.

> 상태는 `Cubit`의 출력값이며 애플리케이션 상태의 일부를 나타냅니다. UI 구성 요소는 상태에 대한 알림을 받고 현재 상태에 따라 화면 일부를 다시 그릴 수 있습니다.

:::note
`Cubit`에 대한 추가적인 세부사항은 다음 [Github issue](https://github.com/felangel/cubit/issues/69)에서 확인할 수 있습니다.
:::

### Cubit 생성하기

다음과 같이 `CounterCubit`을 생성합시다.

```dart
class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);
}
```

`Cubit`을 생성할 때, `Cubit`이 관리할 상태들에 대한 type 정의가 필요합니다. 위 `CounterCubit`의 경우 `int`로 설정해주었지만, 더욱 복잡한 코드에서는 `class`를 사용할 필요가 있습니다. 다음으로 할 일은 `Cubit`의 초기 상태를 지정하는 것입니다. `super`를 활용하면 초기 상태의 값을 호출할 수 있습니다. 위 코드에서는 초기 상태를 내부적으로 `0`으로 설정해주었지만, 외부 값을 허용하여 더 유연하게도 설정 가능합니다.

```dart
class CounterCubit extends Cubit<int> {
  CounterCubit(int initialState) : super(initialState);
}
```

다음과 같이 `CounterCubit`을 다양한 초기값을 활용하여 인스턴스화 할 수 있습니다.

```dart
final cubitA = CounterCubit(0); // state starts at 0
final cubitB = CounterCubit(10); // state starts at 10
```

### 상태 변경

> 각각의 `Cubit`은 `emit`을 통해 새로운 상태를 출력합니다.

```dart
class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);

  void increment() => emit(state + 1);
}
```

위 코드는 `CounterCubit`의 상태 증가를 알리기위한 `increment` public method를 제공합니다. `increment`를 호출하면 `Cubit`의 `state` getter를 통해 현재 상태에 접근하며, `emit`을 통해 현재 상태에 1을 더한 새로운 상태에 접근합니다.

:::warning 주의
`emit` method는 `Cubit` 내부에서만 사용되어야합니다.
:::

### Cubit 사용하기

이제 `CounterCubit`을 활용하여 `Cubit`의 활용법에 대해 알아봅시다.

#### 기본 사용법

```dart
void main() {
  final cubit = CounterCubit();
  print(cubit.state); // 0
  cubit.increment();
  print(cubit.state); // 1
  cubit.close();
}
```

먼저 `CounterCubit` 인스턴스를 생성합니다. 이후 cubit의 현재 상태를 출력합니다(새로운 상태를 출력하지 않았으므로 초기 상태가 나올 것을 예상할 수 있습니다). 다음으로 `increment` 함수를 호출하여 상태를 변경해줍니다. 마지막으로, `Cubit`의 현재 상태를 다시 출력합니다. 이후 `close`를 호출해 `Cubit` 내부 상태 스트림을 닫습니다.

#### Stream 사용법

`Cubit`은 실시간 상태를 업데이트할 수 있는 `Stream`을 노출합니다.

```dart
Future<void> main() async {
  final cubit = CounterCubit();
  final subscription = cubit.stream.listen(print); // 1
  cubit.increment();
  await Future.delayed(Duration.zero);
  await subscription.cancel();
  await cubit.close();
}
```

위 코드에서는 `subscription`을 통해 `CounterCubit`의 상태 변경에 대한 출력값을 받습니다. 이후 `increment`를 호출하여 새로운 상태를 반환합니다. 마지막으로, 더 이상 업데이트 정보를 받고싶지 않을 때 `subscription`의 `cancel`을 호출하여 `Cubit`을 닫습니다.

:::note
`await Future.delayed(Duration.zero);` 는 `subscription`이 즉시 취소되는 것을 방지하기위해 추가되었습니다.
:::

:::warning 주의
`listen`을 호출하면 `Cubit`의 다음 상태 변경만 가져옵니다.
:::

### Cubit 뜯어보기

> `Cubit`이 새 상태를 방출할 때, `Change`를 호출합니다. `Cubit`의 `onChange`를 `overriding`하여 모든 변경사항을 확인할 수 있습니다.

```dart
class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);

  void increment() => emit(state + 1);

  @override
  void onChange(Change<int> change) {
    super.onChange(change);
    print(change);
  }
}
```

위와 같이 작성하여 `Cubit`의 모든 변화를 관찰하고 콘솔에 표시합니다.

```dart
void main() {
  CounterCubit()
    ..increment()
    ..close();
}
```

위 코드를 실행하면 다음과 같이 출력됩니다.

```bash
Change { currentState: 0, nextState: 1 }
```

:::note
`Change`는 `Cubit`의 상태가 업데이트 되기 직전에 발생합니다. `Change`는 현재 상태(`currentState`)와 다음 상태(`nextState`)로 구성됩니다.
:::

### BlocObserver

Bloc 라이브러리 사용의 또 다른 이점은 `Changes` 한 곳에서 모든 것에 접근할 수 있다는 것입니다. 현재 예시에는 하나만 있지만 대규모 애플리케이션에는 많은 `Cubits`로 애플리케이션의 여러 다른 부분을 관리하는 것이 일반적입니다. 만약 모든 `Changes`에 대한 응답을 확인하고 싶다면 `BlocObserver`를 활용해 아래와 같이 코드를 작성하여 확인 가능합니다.

```dart
class SimpleBlocObserver extends BlocObserver {
  @override
  void onChange(BlocBase bloc, Change change) {
    super.onChange(bloc, change);
    print('${bloc.runtimeType} $change');
  }
}
```

:::note
우리가 해야할 일은 `BlocObserver`를 확장하고 `onChange` 메서드를 override 하는 것 뿐입니다.
:::

`SimpleBlocObserver`를 활용하면 아래와 같이 `main` 함수에서 간단하게도 활용 가능합니다.

```dart
void main() {
  Bloc.observer = SimpleBlocObserver();
  CounterCubit()
    ..increment()
    ..close();
}
```

위 코드의 출력은 아래와 같습니다.

```bash
CounterCubit Change { currentState: 0, nextState: 1 }
Change { currentState: 0, nextState: 1 }
```

:::note
내부(Internal) `onChange` override 가 먼저 호출되고, `super.onChange` 에 의해 `BlocObserver`에 있는 `onChange`에 전달합니다.
:::

:::tip
`BlocObserver` 뿐만 아니라 `Cubit` 인스턴스에서도 `Change`에 접근할 수 있습니다.
:::

### Error Handling

> 모든 `Cubit`은 에러가 발생했음을 알리는 `addError` 메서드를 사용합니다.

```dart
class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);

  void increment() {
    addError(Exception('increment error!'), StackTrace.current);
    emit(state + 1);
  }

  @override
  void onChange(Change<int> change) {
    super.onChange(change);
    print(change);
  }

  @override
  void onError(Object error, StackTrace stackTrace) {
    print('$error, $stackTrace');
    super.onError(error, stackTrace);
  }
}
```

:::note
`onError` 는 `Cubit`의 특정 에러에 대해 재정의 하기위해 사용될 수 있습니다.
:::

`onError` 또한 모든 에러를 전역적으로(global) 처리하기 위해 `BlocObserver`에서 재정의하여 사용 가능합니다.

```dart
class SimpleBlocObserver extends BlocObserver {
  @override
  void onChange(BlocBase bloc, Change change) {
    super.onChange(bloc, change);
    print('${bloc.runtimeType} $change');
  }

  @override
  void onError(BlocBase bloc, Object error, StackTrace stackTrace) {
    print('${bloc.runtimeType} $error $stackTrace');
    super.onError(bloc, error, stackTrace);
  }
}
```

만약 동일한 프로그램을 동시에 실행하면 아래와 같이 에러로그가 발생합니다.

```bash
Exception: increment error!, #0      CounterCubit.increment (file:///main.dart:7:56)
#1      main (file:///main.dart:41:7)
#2      _delayEntrypointInvocation.<anonymous closure> (dart:isolate-patch/isolate_patch.dart:297:19)
#3      _RawReceivePort._handleMessage (dart:isolate-patch/isolate_patch.dart:184:12)

CounterCubit Exception: increment error! #0      CounterCubit.increment (file:///main.dart:7:56)
#1      main (file:///main.dart:41:7)
#2      _delayEntrypointInvocation.<anonymous closure> (dart:isolate-patch/isolate_patch.dart:297:19)
#3      _RawReceivePort._handleMessage (dart:isolate-patch/isolate_patch.dart:184:12)

CounterCubit Change { currentState: 0, nextState: 1 }
Change { currentState: 0, nextState: 1 }
```

:::note
`onChange`와 마찬가지로 `onError` 또한 내부 override가 먼저 호출되고 `BlocObserver`에 있는 `onChange`에 전달합니다.
:::
