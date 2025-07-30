---
slug: service-worker
title: Web Service Worker로 파일 업로드 분리하기
authors: mooyeon
tags: [sw, service worker, next.js, javascript]
date: 2025-06-16T12:25
---

# Web Service Worker로 파일 업로드 분리하기

## 소개

신규 통합 웹 시스템을 구축하며 물류센터 현장에서 네트워크 사용량에 제한이 있어 파일 업로드가 원할하지 않은 경우가 발생하였다. 이를 위해 화면에서 네트워크 요청 로직을 분리하여 파일을 화면 로직과 별도로 업로드해줄 수 있는 방법이 필요하였다. Service Worker를 통해 어떻게 화면에서 네트워크 요청 로직을 분리하였는지, Service Worker가 무엇이길래? 가능하였는지 알아보자.

:::info 목차

1. [배경](#배경)
2. [Service Worker API란?](#service-worker-api란)

:::

## 배경

새롭게 진행된 통합 웹 시스템의 경우 각 물류센터 현장에서 태블릿이나 PC를 통해 사용하는 B2B용 시스템이다. 현장의 경우 인터넷이 느리거나 심지어 인터넷 연결이 되지 않는 경우도 있어, 한번에 많은 양의 네트워크 요청이 발생할 경우 원할하게 시스템을 사용할 수 없는 문제가 있었다. 따라서

## Service Worker API란?

서비스 워커는 웹 애플리케이션, 브라우저, 그리고 네트워크 사이에 위치하는 프록시 서버 역할을 한다. 서비스 워커는 효과적인 오프라인 환경 구축, 네트워크 요청 가로채기, 네트워크 사용 가능 여부에 따라 적절한 조치 수행, 서버에 있는 자산 업데이트 등의 주요 기능들을 가지고 있다. 또한 푸시 알림 및 백그라운드 동기화 API 접근도 가능하다.

### Service Worker의 개념

서비스 워커는 출처와 경로에 대해 등록된 이벤트 기반 [Worker] 이다. JavaScript 파일 형태로, 연결된 웹 페이지/사이트를 제어하고 탐색 및 리소스 요청을 가로채서 수정하며, 매우 세부적인 방식으로 리소스를 캐싱하여 특정 상황(ex. 네트워크 연결이 끊긴 경우)에서 앱의 동작을 완벽하게 제어할 수 있도록 한다.

서비스 워커는 워커 컨텍스트에서 실행된다. 따라서 DOM에 접근할 수 없으며 앱을 구동하는 기본 JavaScript와는 다른 스레드에서 실행된다. 서비스 워커는 Non-Blocking, Asynchronous로 설계되었다. 따라서 동기식 [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) 및 [웹스토리지](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)와 같은 API는 서비스 워커 내에서 사용할 수 없다.

서비스 워커는 JavaScript 모듈을 동적으로 가져올 수 없으며, 서비스 워커 전역에서 `inport()`를 호출하면 오류가 발생한다. [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 구문을 사용한 정적 가져오기는 허용된다.

서비스 워커는 보안상의 이유로 HTTPS를 통해서만 실행된다. 가장 중요한 점은 HTTP 연결은 [중간자 공격(man-in-middle attack)](https://developer.mozilla.org/en-US/docs/Glossary/MitM)에 의한 악성 코드 삽입에 취약하며, 이러한 강력한 API에 대한 접근이 허용될 경우 공격이 더욱 악화될 수 있다는 것이다. Firefox에서는 서비스 워커 API가 숨겨져 있어 사용자가 시크릿 브라우징 모드에 있을 때는 사용할 수 없다.

:::tip Worker란?

Web Worker API(Worker)의 인터페이스는 스크립트를 통해 생성될 수 있는 백그라운드 작업을 나타내며, 해당 작업은 생성자에게 메시지를 다시 보낼 수 있다.

워커를 생성하려면 `Worker("path/to/worker/script")` 생성자를 호출해야 한다.

Worker는 부모 페이지와 동일한 `Origin(출처)` 에서 호스팅되는 한 새로운 Worker를 직접 생성할 수 있다.

모든 인터페이스와 함수를 웹 워커에서 사용할 수 있는 것은 아니다. 상세 내용은 [웹 워커에서 사용할 수 있는 함수 및 클래스](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)를 참조하자

:::
