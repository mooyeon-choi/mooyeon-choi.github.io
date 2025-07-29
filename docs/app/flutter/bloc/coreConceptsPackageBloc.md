# 핵심 개념 (package:bloc)

:::tip 참고
아래 내용을 확인하기 전에 [`package:bloc`](https://pub.dev/packages/bloc) 내용을 읽어봅시다
:::

블록 패키지의 사용법을 이해하기 위해선 다음과 같은 몇가지 중요한 핵심 개념에 대해 알아야합니다. 이어지는 내용에서 각각의 세부내용을 살펴보며 Counter App. 을 생성합니다.

## Streams

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

## Cubit

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

#### BlocObserver

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

## Bloc

`Bloc`은 함수보다는 `state` 변경 사항을 트리거하는 클래스입니다. `Bloc` 또한 `Cubit`과 마찬가지로 `BlocBase`를 확장합니다. 그러나 `Cubit`과 다르게 `Bloc`은 `state` 정보를 `function`을 통해 바로 내보내지 않고, `events`를 받아 `event`를 수신하여 `state`를 내보내는 방식으로 처리됩니다.

![Bloc Architecture](./images/bloc_architecture_full.png)

### Bloc 생성하기

`Bloc`을 생성하기 위해서는 `Cubit`과 비슷하며 추가적으로 상태 관리 외에 이벤트에 대한 정의를 작성해주어야합니다.

> 이벤트는 블록에 대한 입력입니다. 주로 버튼 클릭과 페이지 로드 같은 **lifecycle events**에 대한 응답으로 처리됩니다.

```dart
sealed class CounterEvent {}

final class CounterIncrementPressed extends CounterEvent {}

class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0);
}
```

`CounterCubit`을 생성할 때와 마찬가지로 `super` 클래스에 전달하여 초기 상태를 정의해야합니다.

### 상태 변경

`Bloc`은 `Cubit`과 달리 `on<Event>` API를 통해 이벤트를 등록해야합니다. 이벤트 핸들러는 전달받은 이벤트를 0개 이상의 `state`로 내보냅니다.

```dart
sealed class CounterEvent {}

final class CounterIncrementPressed extends CounterEvent {}

class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<CounterIncrementPressed>((event, emit) {
      // handle incoming `CounterIncrementPressed` event
    });
  }
}
```

:::tip
`EventHandler`는 이벤트를 추가하는 것 외에도 `Emitter`를 통해 전달받은 이벤트에 대한 응답을 0개 이상의 `state`로 내보낼 수 있습니다.
:::

`EventHandler`를 활용하여 `CounterIncrementPressed` 이벤트를 처리하도록 작성해봅니다.

```dart
sealed class CounterEvent {}

final class CounterIncrementPressed extends CounterEvent {}

class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<CounterIncrementPressed>((event, emit) {
      emit(state + 1);
    });
  }
}
```

위 코드에서는 모든 `CounterIncrementPressed` 이벤트들을 관리하기위해 `EventHandler`에 등록하였습니다. 각각의 이벤트는 `state` getter와 `emit(state + 1)`을 통해 현재 상태에 접근할 수 있습니다.

:::note
`Bloc`은 `BlocBase`를 상속받으므로 `Cubit`에서와 같이 `state` getter를 통해 언제든지 현재 상태에 접근할 수 있습니다.
:::

:::warning
Bloc은 직접 `emit`을 호출하여 새로운 상태에 접근하면 안됩니다. 항상 `EventHandler`의 이벤트를 거쳐 상태를 변경해야합니다.
:::

:::warning
`Bloc`과 `Cubit` 모두 중복상태는 무시합니다. 만약 `state == nextState`일 때, `State nextState`를 내보내면 상태 변경이 발생하지 않습니다.
:::

### Bloc 사용하기

`CounterBloc`의 인스턴스를 생성하여 사용해봅시다.

#### 기본 사용법

```dart
Future<void> main() async {
  final bloc = CounterBloc();
  print(bloc.state); // 0
  bloc.add(CounterIncrementPressed());
  await Future.delayed(Duration.zero);
  print(bloc.state); // 1
  await bloc.close();
}
```

위 코드에서, 우리는 `CounterBloc`의 인스턴스를 생성합니다. 그런 다음 현재 상태를 표시합니다.(새 상태로 변경이 없으므로 초기 상태) 다음으로 `CounterIncrementPressed` 이벤트를 추가하여 상태를 변경해줍니다. 마지막으로 `Bloc`의 `state`를 다시 확인하면 `0`에서 `1`로 바뀐 상태를 확인할 수 있습니다. 이후 `close`를 호출하여 `Bloc` 내부 상태 스트림을 닫습니다.

:::note
`await Future.delayed(Duration.zero)` 는 다음 이벤트 루프를 기다리도록 설정하기 위해 추가되었습니다. (`EventHandler`가 이벤트를 처리할 수 있도록 허용)
:::

#### Stream 사용법

`Cubit`과 마찬가지로 `Bloc`은 `Stream`의 특수한 형태입니다. 따라서 상태의 실시간 변경을 확인하기 위해 `Bloc`을 구독할 수 있습니다.

```dart
Future<void> main() async {
  final bloc = CounterBloc();
  final subscription = bloc.stream.listen(print); // 1
  bloc.add(CounterIncrementPressed());
  await Future.delayed(Duration.zero);
  await subscription.cancel();
  await bloc.close();
}
```

위 코드는 `CounterBloc`을 구독하여 상태 변경을 표시합니다. 그런 다음 `CounterIncrementPressed` 이벤트를 추가하여 `on<CounterIncrementPressed>` `EventHandler` 를 통해 새 상태를 받아옵니다. 마지막으로 `cancel`을 호출하여 `Bloc`을 닫습니다.

:::note
`await Future.delayed(Duration.zero)` 은 구독이 즉시 취소되는 것을 막기위해 추가된 코드입니다.
:::

### Bloc 살펴보기

`Bloc`은 `BlocBase`를 상속받으므로 `onChange`를 통해 모든 상태변화를 관찰할 수 있습니다.

```dart
sealed class CounterEvent {}

final class CounterIncrementPressed extends CounterEvent {}

class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<CounterIncrementPressed>((event, emit) => emit(state + 1));
  }

  @override
  void onChange(Change<int> change) {
    super.onChange(change);
    print(change);
  }
}
```

`main.dart`를 아래와 같이 작성해줍니다.

```dart
void main() {
  CounterBloc()
    ..add(CounterIncrementPressed())
    ..close();
}
```

위 코드를 실행하면 아래와 같이 출력됩니다.

```bash
Change { currentState: 0, nextState: 1 }
```

`Bloc`과 `Cubit`의 중요한 차이점 중 하나는 `Bloc`에서는 상태 변화의 원인이 되는 이벤트에 대해서도 확인할 수 있습니다. 이를 위해 `onTransition`을 overriding 해줍니다.

> 현재 상태에서 다른 상태로 변경되는 것을 `Transition` 이라고 합니다. `Transition`은 현재 상태, 이벤트, 다음 상태로 구성됩니다.

```dart
sealed class CounterEvent {}

final class CounterIncrementPressed extends CounterEvent {}

class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<CounterIncrementPressed>((event, emit) => emit(state + 1));
  }

  @override
  void onChange(Change<int> change) {
    super.onChange(change);
    print(change);
  }

  @override
  void onTransition(Transition<CounterEvent, int> transition) {
    super.onTransition(transition);
    print(transition);
  }
}
```

`main.dart`를 다시 실행하면 아래와 같은 출력을 확인할 수 있습니다.

```bash
Transition { currentState: 0, event: Instance of 'CounterIncrementPressed', nextState: 1 }
Change { currentState: 0, nextState: 1 }
```

:::note
`onTransition`은 `onChange` 전에 발생하며 `currentState`에서 `nextState`로 변경하는 이벤트도 포함합니다.
:::

#### BlocObserver

위에서 본 내용과 마찬가지로 `onTransition`을 override 해서 `BlocObserver` 단일 위치에서 발생하는 모든 변화를 관찰할 수 있습니다.

```dart
class SimpleBlocObserver extends BlocObserver {
  @override
  void onChange(BlocBase bloc, Change change) {
    super.onChange(bloc, change);
    print('${bloc.runtimeType} $change');
  }

  @override
  void onTransition(Bloc bloc, Transition transition) {
    super.onTransition(bloc, transition);
    print('${bloc.runtimeType} $transition');
  }

  @override
  void onError(BlocBase bloc, Object error, StackTrace stackTrace) {
    print('${bloc.runtimeType} $error $stackTrace');
    super.onError(bloc, error, stackTrace);
  }
}
```

먼저 `SimpleBlocObserver`를 초기화합니다.

```dart
void main() {
  Bloc.observer = SimpleBlocObserver();
  CounterBloc()
    ..add(CounterIncrementPressed())
    ..close();
}
```

위 코드를 실행하면 아래와 같이 출력됩니다.

```bash
CounterBloc Transition { currentState: 0, event: Instance of 'CounterIncrementPressed', nextState: 1 }
Transition { currentState: 0, event: Instance of 'CounterIncrementPressed', nextState: 1 }
CounterBloc Change { currentState: 0, nextState: 1 }
Change { currentState: 0, nextState: 1 }
```

:::note
`onTransition`이 호출되고 난 후 `onChange`를 호출합니다.
:::

`Bloc` 인스턴스의 또 다른 기능으로 새 이벤트를 호출할 때 `onEvent`를 override하여 `onChange`와 `onTransition` 같이 `onEvent` 도 로컬(locally) 및 전역(globally)으로 재정의할 수 있습니다.

```dart
sealed class CounterEvent {}

final class CounterIncrementPressed extends CounterEvent {}

class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<CounterIncrementPressed>((event, emit) => emit(state + 1));
  }

  @override
  void onEvent(CounterEvent event) {
    super.onEvent(event);
    print(event);
  }

  @override
  void onChange(Change<int> change) {
    super.onChange(change);
    print(change);
  }

  @override
  void onTransition(Transition<CounterEvent, int> transition) {
    super.onTransition(transition);
    print(transition);
  }
}
```

```dart
class SimpleBlocObserver extends BlocObserver {
  @override
  void onEvent(Bloc bloc, Object? event) {
    super.onEvent(bloc, event);
    print('${bloc.runtimeType} $event');
  }

  @override
  void onChange(BlocBase bloc, Change change) {
    super.onChange(bloc, change);
    print('${bloc.runtimeType} $change');
  }

  @override
  void onTransition(Bloc bloc, Transition transition) {
    super.onTransition(bloc, transition);
    print('${bloc.runtimeType} $transition');
  }
}
```

이제 `main.dart`를 다시 실행하면 아래와 같이 출력됩니다.

```bash
CounterBloc Instance of 'CounterIncrementPressed'
Instance of 'CounterIncrementPressed'
CounterBloc Transition { currentState: 0, event: Instance of 'CounterIncrementPressed', nextState: 1 }
Transition { currentState: 0, event: Instance of 'CounterIncrementPressed', nextState: 1 }
CounterBloc Change { currentState: 0, nextState: 1 }
Change { currentState: 0, nextState: 1 }
```

:::note
`onEvent`가 추가되자마자 호출되는 것을 볼 수 있습니다. 로컬 `onEvent`는 `BlocObserver`의 전역 `onEvent`보다 먼저 호출됩니다.
:::

### 에러 핸들링

`Cubit`에서와 같이 각각의 `Bloc`은 `addError`와 `onError` 메서드를 가지고 있습니다. `addError`를 활용하면 우리는 `Bloc` 내부 어디에서나 에러가 발생했음을 알 수 있습니다. 그런 다음 `Cubit`과 마찬가지로 `onError`를 override하여 에러가 발생했을 때 적용할 코드를 삽입할 수 있습니다.

```dart
sealed class CounterEvent {}

final class CounterIncrementPressed extends CounterEvent {}

class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<CounterIncrementPressed>((event, emit) {
      addError(Exception('increment error!'), StackTrace.current);
      emit(state + 1);
    });
  }

  @override
  void onChange(Change<int> change) {
    super.onChange(change);
    print(change);
  }

  @override
  void onTransition(Transition<CounterEvent, int> transition) {
    print(transition);
    super.onTransition(transition);
  }

  @override
  void onError(Object error, StackTrace stackTrace) {
    print('$error, $stackTrace');
    super.onError(error, stackTrace);
  }
}
```

`main.dart`를 실행해보면 아래와 같은 에러 내역이 나타납니다.

```bash
Exception: increment error!, #0      new CounterBloc.<anonymous closure> (file:///main.dart:10:58)
#1      Bloc.on.<anonymous closure>.handleEvent (package:bloc/src/bloc.dart:229:26)
#2      Bloc.on.<anonymous closure> (package:bloc/src/bloc.dart:238:9)
#3      _MapStream._handleData (dart:async/stream_pipe.dart:213:31)
#4      _ForwardingStreamSubscription._handleData (dart:async/stream_pipe.dart:153:13)
#5      _RootZone.runUnaryGuarded (dart:async/zone.dart:1594:10)
#6      CastStreamSubscription._onData (dart:_internal/async_cast.dart:85:11)
#7      _RootZone.runUnaryGuarded (dart:async/zone.dart:1594:10)
#8      _BufferingStreamSubscription._sendData (dart:async/stream_impl.dart:339:11)
#9      _BufferingStreamSubscription._add (dart:async/stream_impl.dart:271:7)
#10     _ForwardingStreamSubscription._add (dart:async/stream_pipe.dart:123:11)
#11     _WhereStream._handleData (dart:async/stream_pipe.dart:195:12)
#12     _ForwardingStreamSubscription._handleData (dart:async/stream_pipe.dart:153:13)
#13     _RootZone.runUnaryGuarded (dart:async/zone.dart:1594:10)
#14     _BufferingStreamSubscription._sendData (dart:async/stream_impl.dart:339:11)
#15     _DelayedData.perform (dart:async/stream_impl.dart:515:14)
#16     _PendingEvents.handleNext (dart:async/stream_impl.dart:620:11)
#17     _PendingEvents.schedule.<anonymous closure> (dart:async/stream_impl.dart:591:7)
#18     _microtaskLoop (dart:async/schedule_microtask.dart:40:21)
#19     _startMicrotaskLoop (dart:async/schedule_microtask.dart:49:5)
#20     _runPendingImmediateCallback (dart:isolate-patch/isolate_patch.dart:118:13)
#21     _RawReceivePort._handleMessage (dart:isolate-patch/isolate_patch.dart:185:5)

CounterBloc Exception: increment error! #0      new CounterBloc.<anonymous closure> (file:///main.dart:10:58)
#1      Bloc.on.<anonymous closure>.handleEvent (package:bloc/src/bloc.dart:229:26)
#2      Bloc.on.<anonymous closure> (package:bloc/src/bloc.dart:238:9)
#3      _MapStream._handleData (dart:async/stream_pipe.dart:213:31)
#4      _ForwardingStreamSubscription._handleData (dart:async/stream_pipe.dart:153:13)
#5      _RootZone.runUnaryGuarded (dart:async/zone.dart:1594:10)
#6      CastStreamSubscription._onData (dart:_internal/async_cast.dart:85:11)
#7      _RootZone.runUnaryGuarded (dart:async/zone.dart:1594:10)
#8      _BufferingStreamSubscription._sendData (dart:async/stream_impl.dart:339:11)
#9      _BufferingStreamSubscription._add (dart:async/stream_impl.dart:271:7)
#10     _ForwardingStreamSubscription._add (dart:async/stream_pipe.dart:123:11)
#11     _WhereStream._handleData (dart:async/stream_pipe.dart:195:12)
#12     _ForwardingStreamSubscription._handleData (dart:async/stream_pipe.dart:153:13)
#13     _RootZone.runUnaryGuarded (dart:async/zone.dart:1594:10)
#14     _BufferingStreamSubscription._sendData (dart:async/stream_impl.dart:339:11)
#15     _DelayedData.perform (dart:async/stream_impl.dart:515:14)
#16     _PendingEvents.handleNext (dart:async/stream_impl.dart:620:11)
#17     _PendingEvents.schedule.<anonymous closure> (dart:async/stream_impl.dart:591:7)
#18     _microtaskLoop (dart:async/schedule_microtask.dart:40:21)
#19     _startMicrotaskLoop (dart:async/schedule_microtask.dart:49:5)
#20     _runPendingImmediateCallback (dart:isolate-patch/isolate_patch.dart:118:13)
#21     _RawReceivePort._handleMessage (dart:isolate-patch/isolate_patch.dart:185:5)

Transition { currentState: 0, event: Instance of 'CounterIncrementPressed', nextState: 1 }
CounterBloc Transition { currentState: 0, event: Instance of 'CounterIncrementPressed', nextState: 1 }
CounterBloc Change { currentState: 0, nextState: 1 }
Change { currentState: 0, nextState: 1 }
```

:::note
로컬 `onError`는 `BlocObserver`의 글로벌 `onError`보다 먼저 호출됩니다.
:::

:::note
`onError`와 `onChange`는 `Bloc`과 `Cubit`에서 동일하게 동작합니다.
:::

:::warning
`EventHandler`에서 발생하는 처리되지 않은 예외도 `onError`에 보고됩니다.
:::

## Cubit vs. Bloc

이제 `Cubit`과 `Bloc` 클래스에 대해 모두 살펴보았으니, 언제 `Cubit`을 사용하고 `Bloc`을 사용할지 궁금할 것입니다.

### Cubit 심화

#### Simplicity

`Cubit`의 사용에 있어 가장 큰 장점은 **단순성**입니다. `Cubit`을 생성할 때, 우리는 상태(state)와 상태를 변경할 함수만 정의해주면 됩니다. 반면 `Bloc`을 생성할때는 상태(state)와 이벤트(event), `EventHandler`까지 정의해주어야 합니다. 이런점에 있어 `Cubit`은 상대적으로 더 이해하기 쉽고 적은 코드로 작성가능합니다.

아래에 두가지 카운터 구현 코드를 살펴봅시다.

#### CounterCubit

```dart
class CounterCubit extends Cubit<int> {
  CounterCubit() : super(0);

  void increment() => emit(state + 1);
}
```

#### CounterBloc

```dart
sealed class CounterEvent {}
final class CounterIncrementPressed extends CounterEvent {}

class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    on<CounterIncrementPressed>((event, emit) => emit(state + 1));
  }
}
```

`Cubit`은 함수가 이벤트처럼 동작하므로 코드가 좀 더 간결합니다. 또한 `emit`을 호출하여 언제든지 간단하게 상태 변화를 감지할 수 있습니다.

### Bloc 심화

#### 추적 가능

`Bloc`의 가장 큰 장점중 하나는 상태 변화를 촉발한 원인을 알 수 있는 것입니다. 애플리케이션에 있어 매우 중요한 상태(state)인 경우 이벤트 중심 접근을 통해 상태 변화를 감지하는 것이 더 나은 방법이 될 수 있습니다.

`AuthenticationState`를 관리하는 일반적인 방식을 통해 확인해봅시다. 먼저 단순화를 위해 `enum` 통해 관리해봅시다.

```dart
enum AuthenticationState { unknown, authenticated, unauthenticated }
```

애플리케이션의 상태가 `authenticated`에서 `unauthenticated`로 변경되는데는 많은 원인이 있을 수 있습니다. 예를 들어, 사용자가 로그아웃 버튼을 탭하여 로그아웃하도록 요청할 수 있고 사용자의 액세스 토큰이 취소되어 강제로 로그아웃이 되었을 수도 있습니다. 이때 `Bloc`을 사용하면 애플리케이션의 상태가 어떠한 원인에 의해 특정 상태에 도달했는지 추적할 수 있습니다.

```bash
Transition {
  currentState: AuthenticationState.authenticated,
  event: LogoutRequested,
  nextState: AuthenticationState.unauthenticated
}
```

위 내용은 `Transition` 상태가 변경된 이유에 대한 모든 정보를 제공합니다. 만약 `Cubit`을 사용하여 관리하였다면 `AuthenticationState` 로그는 아래와 같습니다.

```bash
Change {
  currentState: AuthenticationState.authenticated,
  nextState: AuthenticationState.unauthenticated
}
```

이는 사용자가 로그아웃되었음을 알려주지만 시간이 지남에 따라 애플리케이션의 상태가 어떻게 변하는지 디버깅하고 이해하는데 부족합니다.

#### 이벤트 변환 심화

`Bloc`의 또 다른 장점은 `buffer`, `debounceTime`, `throttle`, 등의 반응 연산자를 활용할 때 나타납니다. `Bloc`에는 이벤트 흐름을 관리하고 제어할 수 있는 **event sink**를 가지고 있습니다. 예를 들어, 실시간 검색을 구축하는 경우 우리는 속도 제한을 피하고 백엔드의 부하/비용을 줄이기 위해 백엔드에 대한 요청을 디바운싱 하고 싶을 겁니다. `Bloc`을 사용하면 이벤트가 처리되는 방식을 변경하는 `EventTransformer` 사용자 정의를 제공할 수 있습니다.

```dart
EventTransformer<T> debounce<T>(Duration duration) {
  return (events, mapper) => events.debounceTime(duration).flatMap(mapper);
}

CounterBloc() : super(0) {
  on<Increment>(
    (event, emit) => emit(state + 1),
    /// Apply the custom `EventTransformer` to the `EventHandler`.
    transformer: debounce(const Duration(milliseconds: 300)),
  );
}
```

위 코드를 사용하면 추가 코드를 거의 작성하지 않고 들어오는 이벤트를 쉽게 디바운싱할 수 있습니다.

:::tip
독자적인 이벤트 변환기에 대해서는 [package:bloc_concurrency](https://pub.dev/packages/bloc_concurrency)에서 확인하세요
:::

:::tip
만약 아직도 어떤 것을 사용해야할지 확신이 없다면 `Cubit`을 사용하고 필요에따라 `Bloc`으로 리팩토링하거나 확장할 수 있습니다.
:::
