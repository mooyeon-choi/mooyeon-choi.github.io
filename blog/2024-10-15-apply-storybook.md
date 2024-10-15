---
slug: apply-storybook
title: 스토리북 적용기
authors: mooyeon
tags: [Next.js, React, Storybook, SWR]
date: 2024-10-15T12:47
---

# Storybook으로 UI 문서화, UI Component 테스트 적용하기 (with. Next.js)

## 소개

UI Component를 문서화하여 보기 쉽게 정리하고 각 컴포넌트별로 변경사항을 따로 확인하도록 하여 디자이너와 좀 더 빠르고 명확하게 커뮤니케이션 하기 위해 회사 FrontEnd에 Storybook을 도입하였다. 아래 내용은 Storybook의 적용 방법을 간단히 작성하고 아직 해결되지 않은 문제를 정리한 내용이다.

:::info 목차

1. Storybook이란?
2. 기존 프로젝트에 Storybook 설치하기
3. Component 문서 만들기
4. UI 수정 미리보기
5. Network 요청 Mocking 하기
6. 아직 해결되지 않은 문제들

:::

<!--truncate-->

## Storybook이란?

Storybook은 Frontend UI를 컴포넌트/페이지 별로 분리하여 빌드할 수 있는 툴이다. 전체 앱을 다시 빌드하거나 실행하지 않아도 화면에 대한 변경사항을 분리하여 보거나 테스트할 수 있고 무료 오픈소스로 제공되어 많은 회사에서 사용중이다.

## 기존 프로젝트에 Storybook 설치하기

> Next.js 프로젝트에 Storybook 적용하기

### init Storybook

#### 프로젝트에 스토리북이 없을 경우

```bash
npx storybook@latest init
```

#### 프로젝트에 이미 스토리북이 추가되어 있는 경우

```bash
npx storybook@latest upgrade
```

### Migration

#### Framework 설치

```bash
npm install --save-dev @storybook/nextjs
```

#### .storybook/main.ts 파일 변경

위 command를 입력하면 `.storybook/`, `storybook/` 폴더가 생성된다. `.storybook/main.js|ts` 파일을 확인해보자

```ts
import { StorybookConfig } from "#storybook/nextjs";

const config: StorybookConfig = {
  // ...
  // framework: '@storybook/react-webpack5', 👈 Remove this
  framework: "@storybook/nextjs", // 👈 Add this
};

export default config;
```

이전에는 아래의 애드온들을 필수로 추가해주어야 했지만 최신 버전에서는 아래 애드온들을 따로 추가해주지 않아도 기본적으로 적용된다.

```ts
import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  // ...
  addons: [
    // ...
    // 👇 These can both be removed
    // 'storybook-addon-next',
    // 'storybook-addon-next-router',
  ],
};

export default config;
```

### Tailwind 적용하기

Tailwind를 사용해 css를 적용한 경우 storybook 화면이 깨지는 것을 볼 수 있다. tailwind를 적용하려면 아래의 단계를 따라 적용하여야 한다.

#### import globals.css
