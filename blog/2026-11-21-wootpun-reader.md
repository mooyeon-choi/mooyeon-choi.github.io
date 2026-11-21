---
slug: wootpun-reader
title: 웃픈, 같은 글을 두 가지 방식으로 읽기
description: 하나의 유머 게시물을 웹, iOS, Android에서 어떻게 탐색하게 할지 정한 2026년 9월의 설계 기록.
authors: mooyeon
tags: [web, ios, android, 프로젝트]
date: 2026-11-21T17:00:00+09:00
image: /img/work/wootpun.webp
---

웃픈(Wootpun)은 글, 이미지, 짧은 영상이 한 게시물에 섞이는 유머 커뮤니티 프로토타입이다. 9월에 만든 초안에서 흥미로웠던 건 ‘다음 글’이라는 작은 동작이었다. 휴대폰에서 손가락으로 밀어 넘기는 경험을 웹에 옮길 때도 같은 동작이 자연스러울까?

<!--truncate-->

## 앱에서는 넘기고, 웹에서는 제목을 고른다

iOS와 Android 앱에서는 한 게시물이 화면을 차지한다. 위로 넘겨 다음 게시물에 도착하면, 그 화면의 영상을 재생할 수 있다. iOS는 SwiftUI와 AVPlayer, Android는 Jetpack Compose의 VerticalPager와 Media3로 화면을 구성했다.

웹에서는 긴 글을 읽으려고 스크롤하는 동작과 다음 게시물로 넘어가는 동작을 분리했다. 한 글을 끝까지 읽은 뒤 이전 글과 다음 글의 제목을 보고 고른다. 현재 글의 ID는 주소에 들어간다. 링크를 공유한 사람과 받은 사람이 같은 글에서 출발할 수 있다.

## 세 화면이 공유하는 것은 게시물의 구조다

Rust 서버가 보내는 게시물에는 본문을 구성하는 블록 목록이 있다. 첫 블록이 짧은 문장이고 두 번째가 영상이라면, 세 클라이언트 모두 그 순서로 내용을 받는다. 댓글과 추천 수도 같은 API에서 읽는다. 각 클라이언트가 따로 정하는 것은 그 게시물을 화면에 얼마나 크게 보여 주고 다음 게시물로 어떻게 이동할지다.

웹의 기본 경로에서는 HTML로 글을 읽는다. 별도 경로에서는 사용자가 Canvas 효과나 기기 내 AI를 선택할 수 있다. 게시물을 열자마자 그래픽과 모델을 함께 준비할 필요가 없어, 읽기 화면과 실험 기능을 독립적으로 다룰 수 있다.

두 웹 모드와 네이티브 앱의 탐색 규칙은 문서에 함께 정리했다. 구현 초안과 로컬 실행 방법도 공개했다. [웹 제품 기획서](https://github.com/mooyeon-choi/wootpun/blob/master/docs/WEB_PRODUCT_SPEC.md) · [공통 API 계약](https://github.com/mooyeon-choi/wootpun/blob/master/docs/API_CONTRACT.md) · [웃픈 저장소](https://github.com/mooyeon-choi/wootpun)
