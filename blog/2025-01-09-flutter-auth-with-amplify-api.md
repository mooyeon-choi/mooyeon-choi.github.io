---
slug: flutter-auth-with-amplify-api
title: AWS Amplify-Cognito를 통한 Flutter 애플리케이션 인증 로직
authors: mooyeon
tags: [모노레포, sonar, google]
date: 2025-01-09T09:53
---

# AWS Amplify-Cognito를 통한 Flutter 애플리케이션 인증 로직

## 소개

현재 진행하고 있는 B2B 서비스들에서 여러 사용자가 동시에 같은 아이디로 접속하거나 구독 시스템을 통해 기존에 이용중이던 특정 계정들을 강제로 로그아웃 시켜줘야할 상황들이 필요했다. 따라서 JWT 토큰만으로는 처리하기 어려워 세션을 통한 사용자 관리 도입이 필요하였고, 이 과정에서 좀 더 쉽게 관리 가능하고 빠르게 적용할 수 있는 방법을 찾다가 백엔드 동료분이 AWS Cognito를 통한 사용자 관리 방법을 공유해주었다. 처음 시도했던 24년 중순~말까지만 하더라도 Cognito와 앱을 직접 연결하기 위해서는 Swift, Kotlin 플러그인 작성이 필수적(원하는 기능을 모두 사용하기 위해서)이었는데, 이후 수정된<sup>[[1]](#footnote_1)</sup> [Amplify Docs Gen2](https://docs.amplify.aws/flutter/) 문서를 보니 Amplify 백엔드 구성 없이도 Cognito 설정이 가능하도록 되어있어 기존의 방식(Swift, Kotlin 플러그인 작성)을 폐기하고 이 방법으로 도입하기로 하였다.

아래 내용은 기존에 사용하려 했던 Swift, Kotlin 플러그인 생성 방식과 Amplify Backend를 구성해서 인증 로직을 처리해주는 방식, 그리고 최종적으로 사용하는 별도의 백엔드 구성 없이 Cognito에 직접 연결하여 사용하는 방식을 정리한 내용이다.

:::info 목차

1. [Cognito란?](#cognito란)

:::

<!--truncate-->

## Cognito란?

:::note 주석

<a name="footnote_1">[1]</a>: 해당 문서를 찾지 못해서 못봤던 것일 수도 있음, 관련된 내용이 이전에는 검색해봐도 안나와서 24년 10월말쯤 추가된게 아닐까 생각

:::
