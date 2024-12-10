---
slug: frontend-decorator-pattern
title: 프론트앤드에서의 데코레이터 패턴 살펴보기
authors: mooyeon
tags: [FrontEnd, Decorator, DesignPattern, JavaScript, Flutter]
date: 2024-12-03T19:45
---

# 프론트앤드에서의 데코레이터 패턴 살펴보기

## 소개

백엔드 개발자들이라면 **Decorator**나 **Annotation**에 대해 익숙할 것이다. 하지만 프론트엔드 생태계에서는 지금껏 여러 이유로 인해 사용되지 않다가 최근에 들어서 도입을 하려는 시도가 이루어지고 있다. 프론트엔드에서는 왜 이러한 메타프로그래밍 방식을 적용하지 못하였는지, 또 적용하기 위해서 앞으로 넘어야할 산들은 어떤 것들이 있는지 알아보자.

:::info 목차

1. [메타 프로그래밍이란?](#메타-프로그래밍이란)
2. [자바스크립트와 데코레이터](#자바스크립트와-데코레이터)

:::

<!--truncate-->

## 메타 프로그래밍이란?

메타 프로그래밍이라는 용어에 대해 익숙하지 않더라도 메타 프로그래밍 방식은 이미 Java, JavaScript, Python을 비롯하여 많은 언어에서 활용되고 있다. 메타 프로그래밍은 프로그램을 작성하고 조작하는 데 기여하는 컴퓨터 프로그램을 만드는 과정과 관련있다.

메타프로그래밍은 오랫동안 존재해 온 개념이다. 70년대와 80년대 사람들이 LISP 프로그래밍 언어와 함께 메타프로그래밍 기능을 사용하여 인공 지능(AI) 애플리케이션을 구축하고 개선하면서 처음 유명세를 타기 시작했다. 그럼에도 불구하고 많은 회사들은 여전히 메타프로그래밍 방식에 익숙하지 않으며 심지어 그게 뭔지, 어떻게 동작하는지도 알지 못한다.

위키피디아의 정의를 살펴보자

> 메타프로그래밍(Metaprogramming)이란 자기 자신 혹은 다른 *컴퓨터 프로그램*을 데이터로 취급하며 프로그램을 작성, 수정하는 것을 말한다. 넓은 의미에서 *런타임*에 수행해야 할 작업의 일부를 _컴파일 타임_ 동안 수행하는 프로그램을 말하기도 한다.

런타임에서 실행되는 무언가를 컴파일 단계에서 처리하도록 도와주는 듯하다. 하지만 이 것만으로는 설명이 좀 부족하다 다음 내용을 보자.

### 메타 프로그래밍 살펴보기

아래 내용은 [메타프로그래밍 살펴보기 (Medium blog - SeongHo Hong)](https://medium.com/@hongseongho/%EB%A9%94%ED%83%80%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0-8c30dbe4d566) 글을 참조하여 정리한 내용이다.

메타 프로그래밍에 이용되는 언어를 *메타 언어*라고 하고, 메타 프로그래밍의 대상이 되는 언어를 *대상 언어*라고 한다.

- 대상 언어: **눈은 하얗다**
- 메타 언어: 눈이 하얗다**는 것은 참이다.**

한 프로그래밍 언어가 자기 자신의 메타 언어가 되는 것을 **반영(reflection)**이라고 한다.

> 메타 프로그래밍을 통해 개발자는 Generic 프로그래밍 패러다임에 해당하는 프로그램을 작성하고 코드를 개발할 수 있다. (...) Generic 프로그래밍은 언어 내에서 메타 프로그래밍 기능을 호출한다. Generic을 쓰면 데이터 타입 지정에 대한 걱정 없이 코드를 작성할 수 있게 해준다. Generic이 사용될 때 파라미터로 제공되기 때문이다.

메타 프로그래밍을 설명하면서 동시에 제너릭 프로그래밍이라는 용어가 등장한다. 제너릭은 자바 컴파일 단계에서 타입 체크를 해주는 기능으로만 알고 있는데 이와 어떻게 연관이 되어있는걸까? 아래 내용을 더 살펴보도록 하자.

리플렉션은 제너릭 소프트웨어 라이브러리를 만들 수 있게 도와준다. 데이터를 표시 하고, 다양한 형식의 데이터를 처리하고, 통신을 위한 직렬화 또는 역직렬화를 수행하거나, 컨테이너를 위한 번들링과 unbundling, 간헐적 소통을 가능하게 한다.

즉, 같은 언어로 메타 프로그래밍을 하는 것을 리플렉션이라고 한다. 제너릭이라는 기능을 만들 때 리플렉션을 활용한다. 제너릭 자체가 메타 프로그래밍은 아니지만, 우리가 제너릭을 사용한다면 메타 프로그래밍의 도움을 받은 것이라고 볼 수 있다.

#### 동작방식

메타 프로그래밍이 동작하는 방식은 세 가지 종류가 있다.

1. run-time 엔진 내부를 프로그래밍 코드로 노출
2. 프로그래밍 명령(command)이 포함된 표현식(expressions)을 동적으로 실행
3. 해당 언어의 범주를 완전히 벗어나는 방식 (컴파일러는 메타 프로그래밍을 직접 구현하는 것이다. 타겟 언어가 메타프로그래밍을 지원하지 않아도 구현할 수 있다.)

#### 종류

1. Type Introspection: 수행중인 프로그램에서 변수나 함수들의 타입이나 속성을 나타내는 능력
2. Reflection: 실행중인 프로그램 자신의 구조와 행동을 조사하고 변경할 수 있는 능력
3. Self-Modifying Code: 코드를 스스로 고칠 수 있는 능력

#### 예제

[Reflective programming - Wikipedia](https://en.wikipedia.org/wiki/Reflective_programming?source=post_page-----8c30dbe4d566--------------------------------#Examples)

여기에 있는 예시 중에 Java, Objective-C 를 살펴보자. 메타 프로그래밍 중에서 리플렉션 관련 예제이다.

```objectivec Objective-C 예시
// Foo class.
@interface Foo : NSObject
- (void)hello;
@end

// Sending "hello" to a Foo instance without reflection.
Foo *obj = [[Foo alloc] init];
[obj hello];

// Sending "hello" to a Foo instance with reflection.
id obj = [[NSClassFromString(@"Foo") alloc] init];
[obj performSelector: @selector(hello)];
```

objc 는 객체에 메시지를 던지는 message dispatch를 사용한다. 클래스를 특정하지 않고 `performSelector`로 직접 메시지를 호출할 수 있다. 해당 클래스와 메소드의 내부 구조를 파악하고 매칭되는 메소드를 호출하는 방식이므로 reflection을 사용했다고 볼 수 있다.

```java Java 예시
import java.lang.reflect.Method;

// Without reflection
Foo foo = new Foo();
foo.hello();

// With reflection
try {
  Object foo = Foo.class.getDeclaredConstructor().newInstance();

  Method m = foo.getClass().getDeclaredMethod("hello", new Class<?>[0]);
  m.invoke(foo);
} catch (ReflectiveOperationException ignored) {}
```

Java에서도 클래스를 직접 생성하는게 아니라 reflection을 통해서 생성하는 방법을 지원한다. 그리고 method를 호출하는 것도 reflection을 통해서 호출할 수 있다. 같은 맥락에서 `getAnnotation()`를 호출해서 annotation이 존재하는지 확인할 수도 있다. 한번 커스텀 어노테이션을 만들어서 확인해보자. 런타임에서도 어노테이션을 확인하려면 `@Retention(RetentionPolicy.RUNTIME)`를 추가해줘야 한다.

```java Annotation Examples
@Retention(RetentionPolicy.RUNTIME)
public @inteface MyAnnotation {
  String greeting() default "hello";
}
// ...
class AppTest {
  @Test
  void testMyAnnotation() {
    App classUnderTest = new App();
    MyAnnotation myAnnotation = classUnderTest.getClass().getAnnotation(MyAnnotation.class);
    assertNotNull(myAnnotation);
    assertEquals("hello", myAnnotation.greeting());
  }
}
```

### 자바스크립트

자바스크립트에서는 보통 프록시를 통해 구현된다. 프록시는 객체를 사용자 정의 동작으로 래핑하고 가로챌 수 있는 방법이며, 아래의 세 가지 요소가 필요하다.

1. 핸들러: 가로채는 작업을 새롭게 정의하거나 재정의한다.
2. 대상: 프록시에 의해 가상화 되도록 생성된 객체이며 프록시가 생성되는 이유다.
3. 트랩: 속성 액세스를 처리하고 대상 간 통신한다.

메타프로그래밍은 프록시를 사용하여 특정 코드의 작동 방식을 수정한다. 수정은 다양한 방식으로 발생할 수 있지만 일반적인 코드의 기대범위 내에 있어야 한다. 개발자는 온라인 웹 스크래핑 도구나 자동화 플랫폼의 도움으로 메타프로그래밍을 적용할 수 있다.

## 자바스크립트와 데코레이터

데코레이터는 클래스, 클래스 요소 또는 기타 JavaScript 구문 형식을 정의할 때 호출되는 함수이다.

```js
@defineElement("my-class")
class C extends HTMLElement {
  @reactive accessor clicked = false;
}
```

데코레이터는 세 가지 주요 기능을 가진다.

1. 데코레이터는 동일한 의미 체계를 가진 일치하는 값으로 요소의 값을 대체할 수 있다. (예시: 데코레이터는 메서드를 다른 메서드로, 필드를 다른 필드로, 클래스를 다른 클래스로 대체할 수 있다.)
2. 액세서 함수를 통해 요소 값에 대한 액세스를 제공할 수 있으며, 이를 공유할 수 있다.
3. 요소의 값을 초기화하고 정의된 후 추가 코드를 실행할 수 있다. 값이 클래스의 멤버인 경우 인스턴스당 한 번씩 초기화가 발생한다.

기본적으로, 데코레이터는 근본적으로 외부 동작을 변경하지 않고도 메타프로그래밍하고 기능을 추가하는 데 사용될 수 있다.

이 제안은 데코레이터가 데코레이팅된 값을 완전히 다른 유형의 값으로 대체할 수 있는 이전 반복과 다르다. 데코레이터가 값을 원래 값과 동일한 의미론을 가진 값으로만 대체해야 한다는 요구사항은 두 가지 주요 디자인 목표를 충족한다.

- **데코레이터를 사용하고 자신의 데코레이터를 작성하는 것은 모두 쉬워야 한다.** 정적 데코레이터 제안과 같은 이전 반복은 특히 작성자와 구현자에게 복잡했다. 이 제안에서 데코레이터는 일반 함수이며 액세스 가능하고 작성하기 쉽다.

- **데코레이터는 요소에 영향을 미쳐야 하며, 혼란스럽거나 외부에 영향을 주는 효과를 피해야 한다.** 이전에는 데코레이터가 데코레이팅된 값을 예측할 수 없는 방식으로 변경할 수 있었고, 관련이 없는 완전히 새로운 값을 추가할 수도 있었다. 이는 런타임에 문제가 되었는데, 데코레이팅된 값을 정적으로 분석할 수 없었기 때문이고, 개발자에게는 데코레이팅된 값이 사용자에게 아무런 표시 없이 완전히 다른 유형의 값으로 바뀔 수 있었기 때문이다.

이 제안에서는 데코레이터를 다음과 같은 기존 유형의 값에 적용할 수 있다.

- Class
- Class field(public, private, static)
- Class method(public, private, static)
- Class 접근자(public, private, static)

또한 이 제안은 새로운 유형의 클래스 요소를 도입한다.

- 클래스 자동 접근자는 `accessor` 키워드를 클래스 필드에 적용하여 정의한다. 여기에는 `getter`와 `setter`가 있는데, 필드는 기본적으로 비공개 스토리지 슬롯에서 값을 가져오고 설정한다.(비공개 클래스 필드와 동일)

  ```js
  class Example {
    @reactive accessor myBool = false;
  }
  ```

이 새로운 요소 유형은 독립적으로 사용할 수 있으며, 데코레이터와 함께 사용하는 것과는 별개의 의미 체계를 가지고 있다. 이 제안에 포함된 이유는 주로 데코레이터가 동일한 의미 체계를 가진 해당 요소로만 요소를 대체할 수 있기 때문에 의미 체계가 필요한 데코레이터에 대한 사용 사례가 많기 때문이다. 이러한 사용 사례는 기존 데코레이터 생태계에서 일반적이며, 데코레이터가 제공하는 기능에 대한 필요성을 보여준다.

### 동기 부여

"이게 왜 필요한 거지?"라고 궁금할 수도 있다. 데코레이터는 코드를 상당히 단순화할 수 있는 강력한 메타 프로그래밍 기능이지만, 사용자에게 세부 정보를 숨겨서 내부에서 무슨일이 일어나고 있는지 이해하기 어렵게 만든다는 의미에서 "마법" 같다고 느낄 수도 있다. 모든 추상화와 마찬가지로, 어떤 경우에는 데코레이터가 기존보다 더 큰 문제로 다가올 수 있다.

그러나 오늘날에도 여전히 데코레이터가 선호되는 주된 이유 중 하나, 특히 클래스 데코레이터가 언어의 중요한 기능인 주된 이유는 데코레이터가 JavaScript에서 메타프로그래밍하는 능력에 존재하는 격차를 메운다는 것이다.

다음 기능을 보자

```js
function logResult(fn) {
  return function (...args) {
    let result;
    try {
      result = fn.call(this, ...args);
      console.log(result);
    } catch (e) {
      console.error(e);
      throw e;
    }
    return result;
  };
}

const plusOne = logResult((x) => x + 1);

plusOne(1); // 2
```

이것은 JavaScript에서 매일 사용되는 일반적인 패턴이며, 클로저를 지원하는 언어의 기본적인 힘이다. 이것은 일반 JavaScript에서 데코레이터 패턴을 구현하는 예입니다. `logResult`를 사용하여 모든 함수 정의에 로깅을 쉽게 추가할 수 있으며, 여러 개의 "데코레이터" 함수로 이를 수행할 수 있다.

```js
const foo = bar(baz(qux(() => /* do something cool */)))
```

Python과 같은 다른 언어에서는 데코레이터가 이 패턴에 대한 구문적 편의 도구이다. 데코레이터는 `@` 기호를 사용하여 다른 함수에 적용하거나 직접 호출하여 추가 동작을 추가할 수 있는 함수이다.

따라서 오늘날의 상황에서는 JavaScript에서 함수에 대한 데코레이터 패턴을 사용할 수 없지만 `@`보다 좋은 구문은 없다. 이 패턴은 또한 선언적이며 중요한 점은 함수 정의와 데코레이션 사이에 단계가 없다는 것이다. 즉, 누군가 실수로 함수의 데코레이션되지 않은 버전을 사용하여 주요 버그를 발생시키고 디버깅을 어렵게 만드는 일이 발생하지 않는다.

하지만 이 패턴을 전혀 사용할 수 없는 곳도 있다. 바로 `Object`와 `Class`이다. 다음 `Class`를 통해 확인하자.

```js
class MyClass {
  x = 0;
}
```

위 클래스의 `x`에 로깅 기능을 추가하려면 어떻게 할까? 아래와 같이 수동으로 적용해줄 수 있다.

```js
class MyClass {
  #x = 0;

  get x() {
    console.log("getting x");
    return this.#x;
  }

  set x(v) {
    console.log("setting x");
    this.#x = v;
  }
}
```

하지만 우리가 이 작업을 많이 한다면, 모든 곳에 `getter`와 `setter`를 추가해줘야하는 귀찮은 작업을 반복해서 해줘야한다. 아래와 같이 헬퍼 함수를 통해 이 작업을 대신하도록 설정할 수 있다.

```js
function logResult(Class, property) {
  Object.defineProperty(Class.prototype, property, {
    get() {
      console.log(`getting ${property}`);
      return this[`_${property}`];
    },

    set(v) {
      console.log(`setting ${property}`);
      this[`_${property}`] = v;
    },
  });
}

class MyClass {
  constructor() {
    this.x = 0;
  }
}

logResult(MyClass, "x");
```

위 방법은 효과가 있지만 클래스 필드를 사용하면 프로토타입에서 정의한 `getter/setter`를 덮어쓰므로 할당 생성자로 옮겨야 한다. 또한 여러 문장에서 수행되므로 정의 자체는 시간이 지남에 따라 발생하며 선언적이지 않다. 여러 파일에 "정의된" 클래스를 디버깅하는 것을 상상해보자. 각 파일은 애플리케이션이 부팅될 때 다른 장식을 추가한다. 나쁜 디자인처럼 보일 수 있지만 클래스가 도입되기 전에는 드문 일이 아니었다. 또한 `private` 필드나 메서드로는 이를 수행할 방법이 없다. 정의를 그냥 바꿀 수는 없기 때문이다.

좀 더 나은 방법을 사용해본다면 아래와 같다.

```js
function logResult(fn) {
  return function (...args) {
    const result = fn.call(this, ...args);
    console.log(result);
    return result;
  };
}

class MyClass {
  x = 0;
  plusOne = logResult(() => this.x + 1);
}
```

이는 선언적이기는 하지만 클래스의 각 인스턴스에 대해 새로운 클로저를 생성하므로 규모에 따라 추가 오버헤드가 많이 발생한다.

클래스 데코레이터를 언어 기능으로 만들어서, 우리는 이 차이를 메우고 클래스 메서드, 필드, 액세서, 클래스 자체에 대한 데코레이터 패턴을 활성화하고 있다. 이를 통해 개발자는 디버그 로깅, 반응형 프로그래밍, 동적 유형 검사 등과 같은 일반적인 작업에 대한 추상화를 쉽게 작성할 수 있다.

### 세부 설계

데코레이터 평가의 3단계:

1. 데코레이터 표현식(`@` 뒤에 오는 것)은 계산된 속성 이름과 함께 평가된다.
2. 데코레이터는 클래스 정의 중에 (함수로) 호출되는데, 이때 메서드는 평가되고 생성자와 프로토타입은 결합되기 전에 호출된다.
3. 데코레이터는 모든 데코레이터가 호출된 후 한번에 적용 된다.(생성자와 프로토타입을 변경)

> 이 곳의 의미론은 일반적으로 2016년 5월 뮌헨에서 열린 TC39 회의에서 합의된 내용을 따른다.

## 참고 자료

- [메타프로그래밍 살펴보기 (Medium blog - SeongHo Hong)](https://medium.com/@hongseongho/%EB%A9%94%ED%83%80%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0-8c30dbe4d566)
- [TC39 - Proposal Decorators](https://github.com/tc39/proposal-decorators)
