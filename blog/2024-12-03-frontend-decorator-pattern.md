---
slug: frontend-decorator-pattern
title: 프론트앤드에서의 데코레이터 패턴 살펴보기
authors: mooyeon
tags: [FrontEnd, Decorator, DesignPattern, JavaScript, Flutter]
date: 2024-11-25T19:45
---

# 프론트앤드에서의 데코레이터 패턴 살펴보기

## 소개

백엔드 개발자들이라면 **Decorator**나 **Annotation**에 대해 익숙할 것이다. 하지만 프론트엔드 생태계에서는 지금껏 여러 이유로 인해 사용되지 않다가 최근에 들어서 도입을 하려는 시도가 이루어지고 있다. 프론트엔드에서는 왜 이러한 메타프로그래밍 방식을 적용하지 못하였는지, 또 적용하기 위해서 앞으로 넘어야할 산들은 어떤 것들이 있는지 알아보자.

:::info 목차

1. [메타 프로그래밍이란?](#메타-프로그래밍이란)

:::

<!--truncate-->

## 메타 프로그래밍이란?

Java annotation과 관련해서 공부하다 보면 메타 프로그래밍이라는 키워드를 심심찮게 발견할 수 있다. **메타**라는 용어만 봐서는 일반적인 프로그래밍보다 좀 더 상위에 있는 무언가를 말하는 듯 하다. 그렇다면 메타 프로그래밍이란 무엇일까?

위키피디아의 정의를 살펴보자

> 메타프로그래밍(Metaprogramming)이란 자기 자신 혹은 다른 *컴퓨터 프로그램*을 데이터로 취급하며 프로그램을 작성, 수정하는 것을 말한다. 넓은 의미에서 *런타임*에 수행해야 할 작업의 일부를 _컴파일 타임_ 동안 수행하는 프로그램을 말하기도 한다.

런타임에서 실행되는 무언가를 컴파일 단계에서 처리하도록 도와주는 듯하다. 하지만 이 것만으로는 설명이 좀 부족하다 다음 내용을 보자.

### 메타 프로그래밍 살펴보기

아래 내용은 [메타프로그래밍 살펴보기 (Medium blog - SeongHo Hong)](https://medium.com/@hongseongho/%EB%A9%94%ED%83%80%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0-8c30dbe4d566) 글을 참조하여 정리한 내용이다.

메타 프로그래밍에 이용되는 언어를 *메타 언어*라고 하고, 메타 프로그래밍의 대상이 되는 언어를 대상 언어라고 한다.

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
