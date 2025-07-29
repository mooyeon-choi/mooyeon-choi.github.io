---
slug: eslint-with-tailwindcss
title: 왜 eslint-plugin-tailwindcss 를 버리고 eslint-plugin-better-tailwindcss 를 새로 개발하였을까?
authors: mooyeon
tags: [web, eslint, tailwindcss]
date: 2025-07-14T20:25
---

# 왜 eslint-plugin-tailwindcss 를 버리고 eslint-plugin-better-tailwindcss 를 새로 개발하였을까?

## 소개

Tailwind CSS v3 까지 활발하게 사용되던 `eslint-plugin-tailwindcss` 패키지는 2024년 3월 [[Feature request] Support Tailwind 4](https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/325#issuecomment-2966585530)을 기점으로 Tailwind CSS 최신 버전에 대응하는 업데이트를 하지 않고있다. 이전까지 활발하게 사용되던 이 패키지가 왜 업데이트를 중단하였는지, 개발자들이 왜 새롭게 코드를 다시 작성할 수 밖에 없었는지 알아보자.

:::info 목차

1. [배경](#배경)
2. [eslint-plugin-tailwindcss 패키지](#eslint-plugin-tailwindcss-패키지)

:::

## 배경

최근에는 Biome을 활용하는 개발자들도 점차 늘고있지만, 여전히 Front-End 개발자들 사이에서 가장 많이 선택되는 정적 분석 도구는 ESLint 이다. 코드의 오류와 일관성 있는 스타일을 위해 사용되지만 규칙을 하나하나 설정해주기에는 개발 준비 과정에 너무 많은 시간을 소요하게 되었고, 많은 개발자들이 보편적인 규칙을 미리 적용하여 보다 빠르게 설정할 수 있도록 하였다.
tailwind CSS는 현재 많은 웹 서비스에서 채택되어 사용중인 CSS 프레임워크이다. 따라서 이에 대한 규칙을 적용해주는 `tailwind css` 관련 패키지도 수많은 개발자들에 의해 선택되었다.
기존에 사용되던 `eslint-plugin-tailwindcss`와 `eslint-plugin-better-tailwindcss`의 차이가 뭔지 왜 `eslint-plugin-better-tailwindcss`를 사용하게 되었는지 알아보자

## eslint-plugin-tailwindcss 패키지

Tailwind CSS 프로젝트 초창기, 클래스명이 무작위로 나열되거나 일관성이 없을 경우 코드 관리와 협업이 어려웠다.
이에 `prettier-plugin-tailwindcss` 패키지가 개발되었고 클래스 정렬 기능을 제공해주었다. 이에 만족하고 사용 중인 개발자도 많지만, 많은 사람들이 Tailwind 전용 린팅 규칙이 부족하다고 느꼈고, **eslint-plugin-tailwindcss**가 등장하게 되었다.
공식 문서에서도 “기존 플러그인(prettier-plugin-tailwindcss) 외 5가지 이상의 규칙을 제공한다”고 명시하고 있으며, 정확한 클래스 구조와 일관된 스타일 유지에 초점을 맞춘 것을 알 수 있다.

## Tailwind CSS v4의 등장

