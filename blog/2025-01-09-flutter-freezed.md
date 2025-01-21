---
slug: flutter-freezed
title: Flutter 상태관리 with freezed
authors: mooyeon
tags: [flutter, state management, freezed]
date: 2025-01-09T12:36
---

# Flutter 상태관리 with freezed

## 소개

Flutter에서 State를 생성할 때, 방법으로 Bloc에서 추천하는 Equatable을 사용해왔다. 하지만 개발 편의성과 copy, toString override, json 변환 등 여러 기본 기능을 활용하여 개발 속도를 단축하고자 Freezed를 도입하게 되었다. 이번 내용은 Flutter freezed의 기본 활용법을 정리한 내용이다.

:::info 목차

1. [Freezed란?](#freezed란)
2. [사용 방법](#사용-방법)

:::

<!--truncate-->

## Freezed란?

Dart는 잘 만들어진 언어로 활용하기 좋지만, **Model**을 정의할 때는 조금 귀찮아질 수 있다. 간단하게만 생각해보아도 모델을 생성하기 위해서는 아래의 과정을 수행해야 한다.

- 생성자(constructor) 와 속성(properties) 정의
- `toString`, `operator ==`, `hashCode` 재작성(override)
- `copyWith` 함수를 통해 객체를 복제하는 방법 구현
- 직렬화(serialization), 역직렬화(deserialization) 처리

이를 매번 생성하기 위해서는 불필요한 반복 작업이 발생하며, 이는 실수로 인한 오류를 낳고 코드를 한눈에 알아보기도 힘들다. 따라서 Freezed는 최소한의 코드만 작성하여 이에 대한 상세 구현은 분리해두어 선언형 프로그래밍을 통해 사용자가 모델 정의에만 집중할 수 있도록 해준다.

| Before                                                                              | After                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| ![model define before](./images/2025-01-09-flutter-freezed/model_define_before.png) | ![model define after](./images/2025-01-09-flutter-freezed/model_define_after.png) |

## 사용 방법

### 설치

Freezed를 사용하려면 `build_runner/code-generator` 설정이 필요하다. 먼저 `pubspec.yaml` 파일에 아래와 같이 dependency를 추가해준다.

```yaml
dependencies:
  freezed_annotation: (*required)
  json_annotation: (optional)

dev_dependencies:
  build_runner: (*required)
  freezed: (*required)
  json_serializable: (optional)
```

> `json_annotaion`과 `json_serializable`의 경우 `fromJson/toJson`을 사용한다면 추가해주어야 한다.

- [build_runner](https://pub.dev/packages/build_runner): Code generator를 실행하기 위한 툴
- [freezed](https://pub.dartlang.org/packages/freezed): Code generator
- [freezed_annotaion](https://pub.dev/packages/freezed_annotation): `freezed`에 대한 **annotation**을 포함하는 패키지

:::note invalid_annotation_target 경고 및 생성 파일에서 경고 비활성화

Freezed와 함께 `json_serializable`을 사용할 때, `json_serializable`과 `meta`의 최신버전을 사용한다면 `invalid_annotaion_target` 경고를 비활성해줘야할 수도 있다.

아래와 같이 `analysis_options.yaml` 파일에 추가하여 비활성화 한다.

```yaml
analyzer:
  errors:
    invalid_annotaion_target: ignore
```

:::

### 모델 코드 작성

아래의 예시를 보자.

```dart
// 파일명은 "example.dart"로 설정하였다.
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:flutter/foundation.dart';

// required: Freezed code generator를 통해 생성된 코드와 연결해준다.
part 'main.freezed.dart';
// optional: 모델 클래스를 직렬화 해줘야한다면 아래의 파일을 추가해주어야 한다. 불필요하다면 넘어가도 된다.
part 'example.g.dart';

@freezed
class Person with _$Person {
  const factory Person({
    required String firstName,
    required String lastName,
    required int age,
  }) = _Person;

  factory Person.fromJson(Map<String, Object?> json)
      => _$PersonFromJson(json);
}
```

위 Snippet은 `Person`이라는 이름의 모델을 정의한다.

- `Person`은 3개의 속성을 가지고 있다. (`firstName`, `lastName`, `age`)
- `@freezed` 를 사용하므로 이 클래스의 모든 속성은 변경할 수 없다(immutable).
- `fromJson`을 정의하였으므로, 직렬화/역직렬화가 가능하다. Freezed는 `toJson` 함수도 제공해줄 것이다.
- Freezed는 다음 사항들도 자동으로 생성해준다.
  - `copyWith` method: 객체를 다른 속성으로 복제하기 위함
  - `toString` override: 객체의 모든 속성을 문자열로 나열
  - `operator ==` and `hashCode` override (`Person`이 immutable 하므로)

위 예에서 우리는 아래와 같은 몇가지 사실을 알 수 있다.

- 모델에 `@freezed`(또는 `@Freezed`/`@unfreezed`) 주석을 달아야한다.
- 클래스의 이름 앞에 `_$`를 붙인 `Mixin`을 적용해야한다. 이 믹스인은 객체의 다양한 속성/메서드를 정의한다.
- Freezed 클래스에서 생성자를 정의할 때는 `factory` 키워드를 표시된대로 사용해야한다. 이 생성자의 매개변수는 이 클래스에 포함된 모든 속성의 목록이 된다. 매개변수는 반드시 `name`을 설정해주거나 `required`일 필요는 없다. 원하는 경우 선택적 매개변수를 자유롭게 사용하면 된다.

#### mutable 클래스 정의하기

위 기본 예시의 경우 모든 속성이 `final`인 모델을 정의하는 방법을 알아보았다. 하지만 상황에 따라 변경 가능한 속성을 정의하고 싶을때도 있을 것이다.

Freezed는 `@freezed` 주석을 `@unfreezed`로 대체하여 이를 지원한다.

```dart
@unfreezed
class Person with _$Person {
  factory Person({
    required String firstName,
    required String lastName,
    required final int age,
  }) = _Person;

  factory Person.fromJson(Map<String, Object?> json)
      => _$PersonFromJson(json);
}
```

이는 이전 Snippet과 거의 동일한 모델을 정의하지만 아래와 같은 차이가 있다.

- `firstName`, `lastName`은 이제 변경 가능하다. 따라서 다음과 같이 활용할 수 있다.

  ```dart
  void main() {
    var person = Person(firstName: 'John', lastName: 'Smith', age: 42);

    person.firstName = 'Mona';
    person.lastName = 'Lisa';
  }
  ```

- `age`의 경우 여전히 변경할 수 없는데, 이는 `final` 속성을 명시적을 표시했기 때문이다.
- `Person` 클래스에는 커스텀 `==`/`hashCode` 구현이 없다.

  ```dart
  void main() {
    var john = Person(firstName: 'John', lastName: 'Smith', age: 42);
    var john2 = Person(firstName: 'John', lastName: 'Smith', age: 42);

    print(john == john2); // false
  }
  ```

- 당연히, `Person` 클래스는 변경 가능하기 때문에 `const`를 사용하여 인스턴스화 하는 것은 불가능하다.

### Mutable Lists/Maps/Sets

기본적으로 `@freezed` 유형의 `List`, `Map`, `Set` 속성은 변경 불가능하도록 반환된다.

즉, 다음과 같이 작성하면 런타임 오류가 발생한다.

```dart
@freezed
class Example with _$Example {
  factory Example(List<int> list) = _Example;
}

void main() {
  var example = Example([]);
  example.list.add(42); // 콜랙션 변경을 시도하므로 오류 발생
}
```

아래와 같이 속성값을 추가하여 해당 동작을 비활성화할 수 있다.

```dart
@Freezed(makeCollectionsUnmodifiable: false)
class Example with _$Example {
  factory Example(List<int> list) = _Example;
}

void main() {
  var example = Example([]);
  example.list.add(42); // OK
}
```

### copyWith 작동 방식

앞서 확인했듯이, Freezed를 사용하여 모델을 정의할 때 코드 생성기는 자동으로 `copyWith` 메서드를 생성해준다. 이 메서드는 다른 값을 가진 객체를 복제하는 데 사용된다.

```dart
@freezed
class Person with _$Person {
  factory Person(String name, int? age) = _Person;
}
```

위 예시와 같이 작성했을 경우 아래와 같이 사용할 수 있다.

```dart
void main() {
  var person = Person('Remi', 24);

  // `age` not passed, its value is preserved
  print(person.copyWith(name: 'Dash')); // Person(name: Dash, age: 24)
  // `age` is set to `null`
  print(person.copyWith(age: null)); // Person(name: Remi, age: null)
}
```

> `person.copyWith(age: null)`와 같이 Freezed는 `null` 값을 입력값으로 사용할 수 있다.

### Deep copy

`copyWith`로도 이미 충분히 쓸만하지만, 만약 더 복잡한 객체를 다룬다면 불충분할 수 있다.

아래의 클래스를 보자.

```dart
@freezed
class Company with _$Company {
  factory Company({String? name, required Director director}) = _Company;
}

@freezed
class Director with _$Director {
  factory Director({String? name, Assistant? assistant}) = _Director;
}

@freezed
class Assistant with _$Assistant {
  factory Assistant({String? name, int? age}) = _Assistant;
}
```

우리가 `Company`를 참조할 때, `Assistant`를 변경하고 싶을 때가 있을 것 이다. `Assistant`의 `name`을 `copyWith`로 변경하기 위해 우리는 아래와 같이 코드를 작성해야할 것이다.

```dart
Company company;

Company newCompany = company.copyWith(
  director: company.director.copyWith(
    assistant: company.director.assistant.copyWith(
      name: 'John Smith',
    ),
  ),
);
```

위와 같이 작성하여도 원하는대로 동작하지만, 중복되는 코드가 많아서 직관적이지 못하다.

이러한 경우에 **Freezed**의 "deep copy"를 사용할 수 있다.

Freezed 모델에 Freezed 모델인 속성이 포함되어 있는 경우 코드 생성기는 아래와 같은 대체 구문을 제공한다.

```dart
Company company;

Company newCompany = company.copyWith.director.assistant(name: 'John Smith');
```

위 코드는 처음에 보았던 코드와 동일하게 동작(`company`내의 assistant `name` 수정)하지만 이제 중복되는 코드를 작성할 필요가 없다.

이 구문을 활용하면 만약, 감독의 이름을 변경하고 싶을 때에도 아래와 같이 사용할 수 있다.

```dart
Company company;
Company newCompany = company.copyWith.director(name: 'John Doe');
```

처음 정의한 `Company` / `Director` / `Assistant` 정의에 따라 아래와 같은 모든 "복사" 구문이 동작한다.

```dart
Company company;

company = company.copyWith(name: 'Google', director: Director(...));
company = company.copyWith.director(name: 'Larry', assistant: Assistant(...));
```

/// 이어서 작성

### Generator 실행

Code generator를 실행하기 위해, 터미널(프로젝트 루트 위치)에 아래의 명령어를 입력한다.

```bash
dart run build_runner build
```
