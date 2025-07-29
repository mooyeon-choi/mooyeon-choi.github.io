---
slug: refs-from-dom-to-api
title: Refs in React - DOM 접근에서 명령형 API까지
authors: mooyeon
tags: [React, Javascript, frontend, useEffect, useLayoutEffect]
date: 2024-03-16T21:51
---

> FrontEnd에 관한 도움이 될만한 자료들을 번역

# "깜빡이는" UI를 거부하세요. useLayoutEffect, 페인팅 그리고 브라우저 이야기

![refs-from-dom-to-api](./images/2024-03-16-refs-from-dom-to-api/refs-from-dom-to-api_welcome.png)

- 원문: https://www.developerway.com/posts/refs-from-dom-to-api

## 소개

:::info 목차
1. useRef를 통한 React DOM 접근
2. 부모 요소에서 자식 요소로 prop로 ref 전달하기
3. forwardRef로 ref 전달하기
4. useImperativeHandle를 사용하는 명령형 API
5. 명령형 API에서 useImperativeHandle 제거하기
:::

<!--truncate-->

React에서 DOM에 접근 해야하는 이유와 Ref가 이를 어떻게 도와주는지, `useRef`, `forwordRef`, `useImperativeHandle` Hook 가 무엇이고 어떻게 사용하는지 알아봅시다.

React의 많은 장점 중 하나는 실제 DOM을 다루는 복잡한 과정들을 추상화하여 쉽게 다룰 수 있다는 것입니다. 이제 각 요소들을 직접 쿼리하거나, 해당 요소에 클래스를 추가하는 방법에 대해 고민하거나, 브라우저가 달라 어려움을 겪지 않고도 사용자 경험에 집중하여 화면 구성 요소를 작성할 수 있습니다. 그러나 가끔은(아주 드물지만!) 실제 DOM에 직접 접근해야하는 경우도 여전히 있습니다.

