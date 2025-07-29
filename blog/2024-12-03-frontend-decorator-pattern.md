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
2. [데코레이터와 프록시](#데코레이터와-프록시)
3. [자바스크립트와 데코레이터](#자바스크립트와-데코레이터)

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

## 데코레이터와 프록시

데코레이터 패턴을 정리하면서 프록시 패턴과 같은거 아닌가? 하는 의문이 들었다 차이점이 뭘지 검색해보니 역시나 다들 비슷하게 생각하는 것 같다. 프록시와 데코레이터, 그 차이점은 뭘까

|기준|데코레이터 패턴|프록시 패턴|
|--|--|--|
|목적|객체에 동적으로 새로운 기능을 추가하기 위함|다른 객체에 대한 접근을 제어하거나 부가기능을 제공하기 위함|
|사용 시점|실행 시간에 객체의 기능을 확장하고자할 때|객체의 생성이나 접근에 대한 제어가 필요할 때|
|구현 방식|추상 클래스나 인터페이스를 사용하여 객체에 새로운 기능을 추가|프록시 객체를 통해 실제 객체에 접근, 프록시 객체와 실제 객체는 같은 인터페이스를 구현|

위와 같이 데코레이터 패턴과 프록시 패턴의 주요 차이점은 목적에 있다.
데코레이터 패턴은 동적으로 기능을 추가함에 의의를 두고 있기에 아래 정리할 활용사례에서도 클라이언트에 의해 제어되는 경우가 많다. 하지만 프록시 패턴은 접근을 제어하는 것에 의의를 두고 있기에 내부 동작에 의해 제어되는 경우가 많다.

### 적용 시 고려사항과 활용사례

#### 데코레이터 패턴

그렇다면 데코레이터 패턴은 언제 사용될까?

* 데코레이터 패턴은 객체들을 사용하는 코드를 훼손하지 않으면서 런타임에 추가 행동들을 객체들에 할당할 수 있어야 할 때 사용해야 한다.
* 상속을 사용하여 객체의 행동을 확장하는 것이 어색하거나 불가능할 때 사용할 수 있다.
  * 만일 `final` 키워드가 기입된 클래스의 경우는 데코레이터 패턴을 통해 래핑하여 재사용할 수 있다.

#### 프록시 패턴

프록시 패턴은 언제 사용될까?

* 가상 프록시, 지연 로딩이 필요한 경우
  * 부담되는 서비스 객체를 바로 초기화 한다면 리소스 낭비가 발생할 수 있으므로 프록시 객체를 통해 객체 초기화를 할 수 있다.
* 보포 프록시, 접근 제어가 필요한 경우
  * 특정 클라이언트에 대해서만 서비스 객체를 이용할 수 있도록 하려는 경우 프록시 객체를 통해서 처리할 수 있다.
* 원격 프록시, 원격 서비스의 로컬 실행이 필요한 경우
  * 서비스 객체가 원격 서버에 있는 경우에 네트워크를 통해 클라이언트의 요청을 전달하여 처리할 수 있다.
* 로깅 프록시, 서비스 객체에 대한 로깅이 필요한 경우
  * 프록시 객체에서 서비스에 전달하기 전과 후로 로깅을 진행할 수 있다.
* 캐싱 프록시, 요청 결과를 캐시하고 생명주기를 관리해야하는 경우
  * 프록시 객체를 통해서 항상 같은 결과를 생성하는 반복 요청에 대한 캐싱을 구현하여 처리할 수 있다.

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

### 제안 동기

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

#### 1. 데코레이터 평가

데코레이터는 표현식으로 평가되며, 계산된 속성 이름과 함께 정렬된다. 이는 왼쪽에서 오른쪽, 위에서 아래로 진행된다. 데코레이터의 결과는 클래스의 정의가 처음 실행을 마친 후 나중에 호출될 로컬 변수에 할당된다.

#### 2. 데코레이터 호출

데코레이터가 호출되면 두개의 매개변수를 받는다.

1. 장식되는 요소 또는 `undefined` 클래스 필드의 특수한 경우
2. 데코레이팅 되는 값에 대한 정보를 포함하는 컨텍스트 객체

간결성과 명확성을 위해 TypeScript 인터페이스를 사용하면 API의 일반적인 모양은 다음과 같다.

```ts
type Decorator = (value: Input, context: {
  kind: string;
  name: string | symbol;
  access: {
    get?(): unknown;
    set?(value: unknown): void;
  };
  private?: boolean;
  static?: boolean;
  addInitializer(initializer: () => void): void;
}) => Output | void;
```

`Input`, `Output`은 여기서 주어진 데코레이터에 전달되고 반환되는 값을 나타낸다. 각 유형의 데코레이터는 다른 입력 및 출력을 가지며, 이에 대해서는 아래에서 더 자세히 살펴보자. 모든 데코레이터는 아무것도 반환하지 않도록 선택할 수 있으며, 기본값은 원래의 데코레이션되지 않은 값을 사용하는 것이다.

컨텍스트 객체는 데코레이팅 되는 값에 따라 달라진다. 속성을 분해하면 다음과 같다.

* `kind`: 장식된 값의 종류. 이는 데코레이터가 올바르게 사용되었는지 확인 하거나 다른 유형의 값에 대해 다른 동작을 하는 데 사용할 수 있다. 종류는 아래와 같다.
  * `class`
  * `method`
  * `getter`
  * `setter`
  * `field`
  * `accessor`

* `name`: 값의 이름 또는 개별 요소의 경우 해당 값에 대한 설명(예: 읽을 수 있는 정보)
* `access`: 값에 액세스하는 메서드를 포함하는 객체. 이러한 메서드는 데코레이터에 전달된 현재 값이 아닌 인스턴스 요소의 최종값도 가져온다 이는 `validator`나 `serializer` 와 같은 액세스와 관련된 대부분의 사용사례에서 중요하다.
* `private`: 값이 개인 클래스 요소인지 여부. 클래스 요소에만 적용된다.
* `addInitializer`: 사용자가 요소나 클래스에 추가적인 초기화 논리를 적용할 수 있도록 한다.

각 유형의 데코레이터에 대한 자세한 분석과 적용 방법은 아래의 데코레이터 API 섹션을 참조하자.

#### 3. 데코레이터 적용

데코레이터는 모든 데코레이터가 호출된 후에 적용된다. 데코레이터 적용 알고리즘의 중간 단계는 관찰할 수 없다. 새로 구성된 클래스는 모든 메서드 및 비정적 필드 데코레이터가 적용된 후에야 사용할 수 있다.

클래스 데코레이터는 모든 메서드와 필드 데코레이터가 호출되어 적용된 후에만 호출된다.

마지막으로 정적 필드가 실행되고 적용된다.

### 문법

이 데코레이터 제안은 이전 2단계 데코레이터 제안의 구문을 사용한다. 즉 다음과 같다.

* 데코레이터 표현식은 변수 체인 `.` 로 제한된다(`[]`, `()` 불가). 임의의 표현식을 데코레이터로 사용하려면 `@(expression)` 이스케이프 구문이 필요하다.
* 클래스 선언뿐 아니라 클래스 표현식에도 사용할 수 있다.
* `export` 클래스 데코레이터는 `export` / `default` 앞, 뒤에만 쓰일 수 있다.

데코레이터를 정의하는 데 특별한 구문은 없으며 모든 함수에 데코레이터를 적용할 수 있다.

#### 데코레이터 API

##### 클래스 메서드

```ts
type ClassMethodDecorator = (value: Function, context: {
  kind: "method";
  name: string | symbol;
  access: { get(): unknown };
  static: boolean;
  private: boolean;
  addInitializer(initializer: () => void): void;
}) => Function | void;
```

클래스 메서드 데코레이터는 데코레이팅 되는 메서드를 첫 번째 값으로 받고, 선택적으로 새 메서드를 반환하여 이를 대체할 수 있습니다. 새 메서드가 반환되면 프로토타입(또는 정적 메서드의 경우 클래스 자체)에서 원본을 대체한다. 다른 유형의 값이 반환되면 오류가 발생한다.

메서드 데코레이터의 한 예는 `@logged` 데코레이터이다. 이 데코레이터는 함수를 받아 래핑하고 호출 전, 후에 로그를 기록하는 새 함수를 반환한다.

```ts
function logged(value, { kind, name }) {
  if (kind === "method") {
    return function (...args) {
      console.log(`starting ${name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      console.log(`ending ${name}`);
      return ret;
    };
  }
}

class C {
  @logged
  m(arg) {}
}

new C().m(1);
// starting m with arguments 1
// ending m
```

이 예는 대략 다음과 같은 "desugars"를 나타낸다. (즉, 그대로 반환할 수 있다.)

```ts
class C {
  m(arg) {}
}

C.prototype.m = logged(C.prototype.m, {
  kind: "method",
  name: "m",
  static: false,
  private: false,
}) ?? C.prototype.m;
```

##### 클래스 접근자

```ts
type ClassGetterDecorator = (value: Function, context: {
  kind: "getter";
  name: string | symbol;
  access: { get(): unknown };
  static: boolean;
  private: boolean;
  addInitializer(initializer: () => void): void;
}) => Function | void;

type ClassSetterDecorator = (value: Function, context: {
  kind: "setter";
  name: string | symbol;
  access: { set(value: unknown): void };
  static: boolean;
  private: boolean;
  addInitializer(initializer: () => void): void;
}) => Function | void;
```

접근자 데코레이터는 원래 기본 `getter/setter` 함수를 첫 번째 값으로 받고, 선택적으로 새 `getter/setter` 함수를 반환하여 이를 대체할 수 있다. 메서드 데코레이터와 마찬가지로 이 새 함수는 원래 함수 대신 프로토타입에 배치되고(정적 접근자의 경우 클래스에 배치), 다른 유형의 값이 반환되면 오류가 발생한다.

접근자 데코레이터는 `getter`와 `setter`에 각각 별도로 적용된다. 다음 예에서 `@foo`는 `get x()`에만 적용된다. `set x()` 는 적용되지 않는다.

```ts
class C {
  @foo
  get x() {
    // ...
  }

  set x(val) {
    // ...
  }
}
```

이전에 정의한 `@logged` 데코레이터를 메서드에 확장하여 접근자를 처리할 수도 있다. 코드는 본질적으로 동일하며, 추가 `kind`만 처리하면 된다.

```ts
function logged(value, { kind, name }) {
  if (kind === "method" || kind === "getter" || kind === "setter") {
    return function (...args) {
      console.log(`starting ${name} with arguments ${args.join(", ")}`);
      const ret = value.call(this, ...args);
      console.log(`ending ${name}`);
      return ret;
    };
  }
}

class C {
  @logged
  set x(arg) {}
}

new C().x = 1
// starting x with arguments 1
// ending x
```

이 예는 대략 다음과 같은 "desugar"를 나타낸다(즉, 그대로 반환할 수 있다.)

```ts
class C {
  set x(arg) {}
}

let { set } = Object.getOwnPropertyDescriptor(C.prototype, "x");
set = logged(set, {
  kind: "setter",
  name: "x",
  static: false,
  private: false,
}) ?? set;

Object.defineProperty(C.prototype, "x", { set });
```

##### 클래스 필드

```ts
type ClassFieldDecorator = (value: undefined, context: {
  kind: "field";
  name: string | symbol;
  access: { get(): unknown, set(value: unknown): void };
  static: boolean;
  private: boolean;
  addInitializer(initializer: () => void): void;
}) => (initialValue: unknown) => unknown | void;
```

메서드 및 접근자와 달리 클래스 필드는 데코레이팅 될 때 직접적인 입력 값이 없다. 대신 사용자는 선택적으로 필드가 할당될 때 실행되는 초기화 함수를 반환하여 필드의 초기 값을 받고 새 초기 값을 반환할 수 있다. 함수 외의 다른 유형의 값이 반환되면 에러가 발생한다.

`@logged` 데코레이터를 확장하여 클래스 필드도 처리하고, 필드가 할당되는 시점과 값을 로깅할 수 있다.

```ts
function logged(value, { kind, name }) {
  if (kind === "field") {
    return function (initialValue) {
      console.log(`initializing ${name} with value ${initialValue}`);
      return initialValue;
    };
  }

  // ...
}

class C {
  @logged x = 1;
}

new C();
// initializing x with value 1
```

이 에는 다음과 같은 결과를 가진다.

```ts
let initializeX = logged(undefined, {
  kind: "field",
  name: "x",
  static: false,
  private: false,
}) ?? (initialValue) => initialValue;

class C {
  x = initializeX.call(this, 1);
}
```

초기화 함수는 `this`와 같은 클래스의 인스턴스로 호출되므로 필드 데코레이터를 활용하여 관계를 부트스트랩할 수도 있다. 예를 들어 부모 클래스에 자식요소를 등록할 수 있다.

```ts
const CHILDREN = new WeakMap();

function registerChild(parent, child) {
  let children = CHILDREN.get(parent);

  if (children === undefined) {
    children = [];
    CHILDREN.set(parent, children);
  }

  children.push(child);
}

function getChildren(parent) {
  return CHILDREN.get(parent);
}

function register() {
  return function(value) {
    registerChild(this, value);

    return value;
  }
}

class Child {}
class OtherChild {}

class Parent {
  @register child1 = new Child();
  @register child2 = new OtherChild();
}

let parent = new Parent();
getChildren(parent); // [Child, OtherChild]
```

##### Class

```ts
type ClassDecorator = (value: Function, context: {
  kind: "class";
  name: string | undefined;
  addInitializer(initializer: () => void): void;
}) => Function | void;
```

클래스 데코레이터는 첫 번째 매개변수로 데코레이션되는 클래스를 받고, 선택적으로 새 호출 가능한 클래스, 함수 또는 프록시를 반환하여 이를 대체할 수 있다. 호출 가능하지 않은 값이 반환되면 오류가 발생한다.

클래스 인스턴스가 생성될 때마다 기록하도록 `@logged` 데코레이터를 더 확장할 수 있다.

```ts
class C {}

C = logged(C, {
  kind: "class",
  name: "C",
}) ?? C;

new C(1);
```

#### 새로운 클래스 요소

##### 클래스 자동 접근자

클래스 자동 접근자는 `accessor` 클래스 필드 앞에 키워드를 추가하여 정의되는 새로운 구조이다.

```ts
class C {
  accessor x = 1;
}
```

자동 접근자는 일반 필드와 달리 클래스 프로토타입에서 `getter`와 `setter`를 정의한다. 이 게터와 세터는 기본적으로 개인 슬롯에서 값을 가져오고 설정한다. 위의 내용은 대략 다음과 같다.

```ts
class C {
  #x = 1;

  get x() {
    return this.#x;
  }

  set x(val) {
    this.#x = val;
  }
}
```

정적 자동 접근자와 private auto-accessor도 다음과 같이 정의할 수 있다.

```ts
class C {
  static accessor x = 1;
  accessor #y = 2;
}
```

Auto-accessors는 데코레이터를 적용할 수 있으며 다음과 같은 특징을 갖는다.

```ts
type ClassAutoAccessorDecorator = (
  value: {
    get: () => unknown;
    set(value: unknown) => void;
  },
  context: {
    kind: "accessor";
    name: string | symbol;
    access: { get(): unknown, set(value: unknown): void };
    static: boolean;
    private: boolean;
    addInitializer(initializer: () => void): void;
  }
) => {
  get?: () => unknown;
  set?: (value: unknown) => void;
  init?: (initialValue: unknown) => unknown;
} | void;
```

필드 데코레이터와 달리 자동 접근자 데코레이터는 값을 받는데, 이 값은 클래스의 프로토타입(정적 자동 접근자의 경우 클래스 자체)에 정의된 `get` 및 `set` 접근자를 포함하는 객체이다. 다음으로 데코레이터는 이르 래핑학고 새 `get`과 `set`을 반환하여 데코레이터가 속성에 대한 접근을 가로챌 수 있다. 이는 필드에서는 가능하지 않지만 자동 접근자에서는 가능한 기능이다. 또한 자동 접근자는 함수를 반환할 수 있으며, 이 함수는 필드 데코레이터와 유사하게 개인 슬롯에서 백업 값의 초기 값을 변경하는데 사용할 수 있다. 객체가 반환되었지만 값 중 하나가 생략된 경우 생략된 값에 대한 기본 동작은 원래 동작을 사용하는 것이다. 이러한 속성을 포함하는 객체 외의 다른 유형의 값이 반환되면 오류가 발생한다.

`@logged` 데코레이터를 더 확장하면 자동 접근자도 처리하고 자동 접근자가 초기화 될때와 접근할 때마다 로깅하도록 할 수 있다.

```ts
function logged(value, { kind, name }) {
  if (kind === "accessor") {
    let { get, set } = value;

    return {
      get() {
        console.log(`getting ${name}`);

        return get.call(this);
      },

      set(val) {
        console.log(`setting ${name} to ${val}`);

        return set.call(this, val);
      },

      init(initialValue) {
        console.log(`initializing ${name} with value ${initialValue}`);
        return initialValue;
      }
    };
  }

  // ...
}

class C {
  @logged accessor x = 1;
}

let c = new C();
// initializing x with value 1
c.x;
// getting x
c.x = 123;
// setting x to 123
```

이 예는 대략 다음과 같다.

```ts
class C {
  #x = initializeX.call(this, 1);

  get x() {
    return this.#x;
  }

  set x(val) {
    this.#x = val;
  }
}

let { get: oldGet, set: oldSet } = Object.getOwnPropertyDescriptor(C.prototype, "x");

let {
  get: newGet = oldGet,
  set: newSet = oldSet,
  init: initializeX = (initialValue) => initialValue
} = logged(
  { get: oldGet, set: oldSet },
  {
    kind: "accessor",
    name: "x",
    static: false,
    private: false,
  }
) ?? {};

Object.defineProperty(C.prototype, "x", { get: newGet, set: newSet });
```

##### `addInitializer` 초기화 논리 추가

`addInitializer` 메서드는 모든 유형의 값에 대해 데코레이터에 제공되는 컨텍스트 객체에서 사용할 수 있다. 이 메서드는 클래스 또는 클래스 요소와 초기화 함수를 연결하기 위해 호출할 수 있으며, 이는 값이 정의된 후 임의의 코드를 실행하여 설정을 완료하는 데 사용할 수 있다. 이러한 초기화 함수의 타이밍은 데코레이터 유형에 따라 달라진다.

* **클래스 데코레이터**: 클래스가 완전히 정의된 후 또는 클래스 정적 필드가 할당된 후
* **클래스 정적 요소**
  * **메서드 및 Getter/Setter 데코레이터**: 클래스 정의 중, 정적 클래스 메서드가 할당된 후, 정적 클래스 필드가 초기화되기 전
  * **필드 및 접근자 데코레이터**: 클래스 정의 중에 데코레이터가 적용된 필드 또는 접근자가 초기화된 직후
* **클래스 동적 요소**
  * **메서드 및 Getter/Setter 데코레이터**: 클래스 생성 중, 모든 클래스 필드가 초기화 되기 전에
  * **필드 및 접근자 데코레이터**: 클래스 생성 중에 데코레이터가 적용된 필드 또는 액세서가 초기화된 직후

##### `@customElement` 예시

브라우저에 웹 구성 요소를 등록하는 `addInitializer` 데코레이터를 생성하기 위해 클래스 데코레이터와 함께 사용할 수 있다.

```ts
function customElement(name) {
  return (value, { addInitializer }) => {
    addInitializer(function() {
      customElements.define(name, this);
    });
  }
}

@customElement('my-element')
class MyElement extends HTMLElement {
  static get observedAttributes() {
    return ['some', 'attrs'];
  }
}
```

이 예는 대략 다음과 같다.

```ts
class MyElement {
  static get observedAttributes() {
    return ['some', 'attrs'];
  }
}

let initializersForMyElement = [];

MyElement = customElement('my-element')(MyElement, {
  kind: "class",
  name: "MyElement",
  addInitializer(fn) {
    initializersForMyElement.push(fn);
  },
}) ?? MyElement;

for (let initializer of initializersForMyElement) {
  initializer.call(MyElement);
}
```

##### `@bound` 예시

`@bound` 메서드 데코레이터를 사용하여 `addInitializer` 데코레이터를 생성할 수도 있다. 데코레이터는 메서드를 클래스 인스턴스에 바인딩한다.

```ts
function bound(value, { name, addInitializer }) {
  addInitializer(function () {
    this[name] = this[name].bind(this);
  });
}

class C {
  message = "hello!";

  @bound
  m() {
    console.log(this.message);
  }
}

let { m } = new C();

m(); // hello!
```

이 예는 대략 다음과 같다.

```ts
class C {
  constructor() {
    for (let initializer of initializersForM) {
      initializer.call(this);
    }

    this.message = "hello!";
  }

  m() {}
}

let initializersForM = []

C.prototype.m = bound(
  C.prototype.m,
  {
    kind: "method",
    name: "m",
    static: false,
    private: false,
    addInitializer(fn) {
      initializersForM.push(fn);
    },
  }
) ?? C.prototype.m;
```

액세스는 일반적으로 값이 읽히거나 쓰이도록 의도된 값인지 여부에 따라 제공된다. 필드와 자동 접근자는 읽고 쓸 수 있다. 접근자는 게터의 경우 읽을 수 있고, 세터의 경우 쓸 수 있다. 메서드는 읽을 수만 있다.

### Babel 레거시 데코레이터와의 차이

Babel 레거시 데코레이터는 2014년 기준 JavaScript 데코레이터 제안의 상태를 기반으로 한다. 위에 나열된 구문 변경사항 외에도 Babel 레거시 데코레이터 호출 규칙은 이 제안과 다르다.

* 레거시 데코레이터는 "대상"(구축 중인 클래스 또는 프로토타입)과 함께 호출되는 반면, 이 제안에서는 구축 중인 클래스가 데코레이터에 제공되지 않는다.
* 레거시 데코레이터는 전체 속성 설명자와 함께 호출되는 반면, 이 제안은 "데코레이션되는 것"과 컨텍스트 객체만 있는 데코레이터를 호출한다. 즉, 예를 들어 속성을 변경할 수 없으며 getter와 setter가 "통합"되지 않고 별도로 데코레이션 된다.

이러한 차이점에도 불구하고, 일반적으로 이 데코레이터 제안을 통해 Babel 레거시 데코레이터와 동일한 종류의 기능을 달성할 수 있다.

### TypeScript "실험적" 데코레이터와의 차이

TypeScript 실험적 데코레이터는 Babel 레거시 데코레이터와 대체로 유사하므로 해당 섹션의 주석도 적용된다.

* 아직 매개변수 데코레이터가 제안에 포함되어 있지 않지만, 추후 내장 데코레이터에서 제공될 수 있다.
* TypeScript 데코레이터는 모든 정적 데코레이터보다 모든 인스턴스 데코레이터를 먼저 실행한다. 반면, 이 제안서에서 평가 순서는 정적 데코레이터인지 인스턴스 데코레이터인지에 관계없이 프로그램 내의 순서에 따라 결정된다.

### 이전 단계(2단계)와 비교

2단계 데코레이터 제안은 다음을 포함하여 이 제안보다 더 많은 기능이 포함되어있었다.

* 모든 데코레이터가 단순히 데코레이션되는 요소를 래핑하거나 변경하는 것이 아니라, 임의의 '추가' 클래스 요소를 추가할 수 있는 기능
* 여러 클래스에서 private name을 재사용하는 것을 포함하여 새로운 private field 를 선언하는 기능
* 클래스 내의 모든 필드와 메서드를 조작하기 위한 클래스 데코레이터 액세스
* 초기화 프로그램을 "thunk"으로 처리하여 보다 유연하게 처리

이전 2단계 데코레이터 제안은 다양한 클래스 요소를 대신하는 설명자 개념을 기반으로 하였다. 이러한 설명자는 클래스에 과도하게 유연성/확장성을 제공하여 현재는 제거되었다.

현재 데코레이터 제안은 데코레이터의 의미를 범위가 명확하고 직관적으로 유지가능하고 트랜스파일러와 네이티브 엔진에서 구현을 단순화 하기 위해 의도적으로 이러한 기능을 생략하였다.

### "정적 데코레이터" 제안과 비교

정적 데코레이터는 내장된 데코레이터 세트를 포함하고, 이로부터 파생된 사용자 정의 데코레이터를 지원하는 아이디어였다. 정적 데코레이터는 정적 분석 가능성을 지원하기 위해 별도의 네임스페이스에 있었다.

정적 데코레이터 제안은 과도한 복잡성과 불충분한 최적화라는 두 가지 문제점을 안고 있다. 이 제안은 데코레이터가 일반적인 함수라는 일반적인 모델로 돌아가서 그 복잡성을 피한다.

## 참고 자료

- [메타프로그래밍 살펴보기 (Medium blog - SeongHo Hong)](https://medium.com/@hongseongho/%EB%A9%94%ED%83%80%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0-8c30dbe4d566)
- [TC39 - Proposal Decorators](https://github.com/tc39/proposal-decorators)
