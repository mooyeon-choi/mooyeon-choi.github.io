---
slug: learn-monorepo
title: 모노레포를 위한 준비
authors: mooyeon
tags: [모노레포, sonar, google]
date: 2025-01-03T09:53
---

# 모노레포를 위한 준비

## 소개

최근 Next.js, Flutter 등 많은 프레임워크에서 모노레포를 통한 코드 관리를 사용하고 많은 회사들에서도 모노레포를 이미 도입하거나 도입하기 위한 준비를 진행하고 있다. 최근 우리 회사에서도 중복 작업을 줄이고 코드를 더 잘 관리하기 위해 모노레포, 멀티 패키지 도입을 준비하고 있는데 이 과정에서 찾아본 내용과 왜 회사 코드관리에 도입하도록 결정하게 되었는지 정리한 내용이다.

:::info 목차

1. [모노레포란?](#모노레포란)

:::

<!--truncate-->

## 모노레포란?

모노레포(monolithic repository)는 여러 프로젝트의 모든 코드가 단일 저장소에 저장되는 저장 방식을 말한다. 이 중앙 저장소에는 저장소의 각 프로젝트에 대한 모든 구성 요소, 라이브러리 및 내부 종속성을 보관하며, 종종 여러 프로그래밍 언어와 애플리케이션 유형으로 구성된다.

모노레포를 적용하는 이유는 무엇일까?

1. 간소화된 코드 관리
2. 강화된 협업
3. 간소화된 툴링
4. 코드 공유 및 재사용성
5. 종속성 관리
6. 일관된 개발 환경
7. 유연성 및 확장성
8. 커뮤니케이션 오버헤드 완화

## 모노레포 작성 규칙

1. 일관된 폴더 구조
2. 모듈러 아키텍처
3. 버전 관리 및 종속성 관리
4. 코드 검토 및 품질 보증
5. 분기 전략
6. 지속적인 통합 및 전달(CI/CD)
7. 문서 및 Readme 파일
8. 개발자 교육 및 온보딩
9. 테스트 전략
10. 모니터링 및 로깅
11. 지속적인 학습 및 개선

## 참고 자료

- 플러터 모노레포 관리 툴: Melos
- 플러터 패키지 관리: pub.dev
- 테스트: 단위테스트(flutter test), UI 테스트(widgetbook), E2E 테스트(Patrol)
- 배포
- CI/CD: Github action

- JS 모노레포 관리 툴: Turborepo, nx
- JS 패키지 관리: npm, yarn, pnpm
- 테스트: 단위테스트(Jest vs. vitest), UI 테스트(Storybook), E2E 테스트(Cypress vs. Playwright)
- 배포 환경: [AWS Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/monorepo-configuration.html) vs. [Vercel](https://vercel.com/docs/monorepos)
- CI/CD: Github action
