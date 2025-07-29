---
slug: Vue.js trend
title: Evan You가 말하는 2024년 Vue.js의 인사이트 및 트렌드
authors: mooyeon
tags: [Vuejs, frontend]
date: 2024-02-24T20:25
---

> [Korean FE Article Team](https://kofearticle.substack.com/about?utm_source=substack&utm_medium=email) 에서 번역해주는 FrontEnd 소식을 아카이브 하였습니다.

# Evan You가 말하는 2024년 Vue.js의 인사이트 및 트렌드

- 원문: https://medium.com/front-end-weekly/insights-and-trends-in-vue-js-from-evan-you-2024-695ed1feef5d

## 소개

이 글에서는 Vite 5가 뷰에 미치는 영향, 매크로, vapor mode, 널리 알려진 오해들, **새로운 특징 또는 기능**, 향후 버전의 option API 지원 여부, VitePress 등에 대한 일반적인 인사이트를 살펴보겠습니다.

:::info 목차

1. Evan You와 함께하는 Q&A 세션
2. 결론
3. 도움 될만한 링크

:::

<!--truncate-->

## Evan You와 함께하는 Q&A 세션

### 1. Vite 5는 어떻게 뷰 성능을 향상시켰을까요?

Vite 내에서 성능 향상을 위해 수행되는 대부분의 작업은 Vite 자체에 한정되어 있습니다. 하지만 Vite를 사용하는 누구든 같은 혜택을 누릴 수 있습니다.

:::info 추가로,
중요한 세부 사항도 언급되었습니다. 뷰 3.4의 모든 이점을 활용하려면 "vitejs/plugin-vue"를 최신 버전으로 업데이트하는 것이 좋습니다. 이 업데이트는 프로젝트의 빌드 성능을 향상시킬 수 있습니다.
:::

### 2. 뷰 코어 기능에 추가적인 Vue.js 매크로가 추가될 예정인가요?

Vue.js 팀은 뷰 코어에 새로운 매크로를 통합하는 것을 매우 신중하게 고려합니다. 현재로서는 뷰에 새로운 매크로를 도입할 계획이 없습니다.

:::info
매크로는 뷰에 공식적으로는 통합되지 않는 개념적인 제안이나 아이디어입니다. 이러한 제안들은 뷰의 추가적인 기능이나 문법적 설탕(syntactic sugar)을 탐구하고 확장하는 것을 목표로 합니다.
:::

### 3. 뷰 vapor mode의 최신 소식은 무엇인가요?

초기 런타임 구현과 컴파일러의 상당 부분이 완료되었습니다. 그 결과, 아직 진행 중이기는 하지만 기능적인 플레이그라운드가 조성되었습니다.

이 모드에서는 복잡한 마이그레이션이나 사용을 위한 준비 조치가 필요하지 않습니다. 이 기술을 이용하면 최적화가 필요한 특정 컴포넌트에 vapor mode를 활성화할 수 있습니다.

:::info vapor mode
성능 향상을 위한 비가상 DOM 모드 개발에 사용되는 vapor mode
:::

### 4. 사람들이 Vue.js에 대해 갖고 있는 가장 큰 오해는 무엇이라고 생각하나요?

잘 알려진 오해에는 JSX 및 타입스크립트에 대한 지원 부족, 그리고 뷰는 간단한 앱에만 적합하다는 것 등이 있습니다. 하지만 더 많은 유명 브랜드에서 거대한 웹 애플리케이션 제작을 위해 뷰를 사용하고 있습니다.

### 5. 향후 Vue.js 버전에서 기대할 만한 흥미로운 신규 기능은 무엇이 있을까요?

vapor mode는 현재 뷰 생태계 내에서 개발되고 있는 가장 중요한 혁신입니다.

이에 더해, 아래 항목들을 포함하여 뷰 코어에 많은 개선이 있었습니다.

- 반응성 시스템 리팩토링

- 빨라진 파서와 향상된 싱글 파일 컴포넌트(Single File Component, SFC) 빌드 성능

- defineModel의 안정화

- v-bind:를 위한 같은 이름의 축약어

  ```html
  <img :id :src :alt />
  ```

- 하이드레이션 불일치 오류 개선

### 6. 향후 뷰 버전에서 Option API를 제거할 것을 계획하고 있나요?

향후 버전에서 option API를 제거할 계획은 없습니다. Composition API와 Option API 두 접근 방식을 모두 유지하는 작업은 어렵지 않습니다.

### 7. 뷰 3는 웹팩을 계속 지원할 예정인가요? 아니면 완전히 Vite로 옮겨가나요?

뷰에서 웹팩을 금지하는 것은 가까운 시일내에는 계획하고 있지 않습니다. 웹팩과 Vite 양측에 대한 지원이 모두 제공될 예정입니다.

### 8. 기타

안정된 버전의 **서스펜스 컴포넌트(suspense component)**의 출시가 계획되어 있습니다.

**defineModel**이 객체와 배열에 대해 깊게 반응성을 유지할 수 없는 이유는 다음과 같습니다. prop을 직접적으로 수정하는 것은 이후 추적에 영향을 미치기 때문에 권장되지 않습니다. 이 경우, 깊은 반응성이 불필요해지며 매번 새로운 객체를 반환할 뿐입니다.

```html
<script setup>
  const modelValue = defineModel();
  console.log(modelValue.value);
</script>

<template>
  <input v-model="modelValue" />
</template>
```

**VitePress 출시에 많은 기대 부탁드립니다.**

:::info VitePress란?
**\*VitePress**는 콘텐츠 중심의 신속한 웹사이트 구축을 위해 제작된 정적 사이트 생성기(SSG)입니다. 문서, 블로그, 포트폴리오, 마케팅 사이트를 생성하는 데 적합합니다.

Nuxt.js보다 훨씬 경량의 대안을 제공하여 웹 개발에 효율성을 높입니다.
:::

## 결론

뷰 생태계와 프레임워크는 활발히 개발되고 있으며, 성능 향상과 반응성에 초점을 맞추고, 비가상 DOM 모드를 발전시키고 있습니다. 뷰는 Option API와 Composition API를 모두 지원하며 융통성을 유지하고 있으며, 웹팩 그리고 Vite와 같은 유명한 번들러에 대한 호환성을 보장합니다. defineModel과 v-bind 단축어와 같은 새로운 기능이 안정적으로 릴리즈되는 등 상당한 진전이 있었습니다. 이러한 모든 요소는 이후 뷰의 역동성과 유망한 미래를 증명합니다.

## 도움 될만한 링크

1. [Vue.js Nation 콘퍼런스](https://vuejsnation.com/)
2. [nuxt를 사용한 프로젝트들](https://github.com/nuxt/awesome?tab=readme-ov-file#projects-using-nuxt)
3. [Vapor mode](https://github.com/vuejs/core-vapor)
4. [뷰 매크로](https://vue-macros.dev/guide/getting-started.html)
5. [Vue School](https://vueschool.io/)
6. [Vue3에서 GraphQL과 Apollo 클라이언트](https://javascript.plainenglish.io/how-to-use-graphql-in-vue3-with-the-apollo-client-79b1c1fda69d)
7. [HMAC(보안)](https://blog.stackademic.com/how-hmac-works-step-by-step-explanation-with-examples-f4aff5efb40e)
