---
slug: writing-css-with-accessibility-in-mind
title: 접근성을 고려하여 CSS 작성하기
authors: mooyeon
tags: [CSS, frontend]
date: 2024-02-26T21:55
---

> [Korean FE Article Team](https://kofearticle.substack.com/about?utm_source=substack&utm_medium=email) 에서 번역해주는 FrontEnd 소식을 아카이브 하였습니다.

# 접근성을 고려하여 CSS 작성하기

## 소개

접근성(Accessibility)을 고려하여 개발하는 것은 검색 엔진 최적화와 사용자 경험 향상을 넘어서 법적 요구사항이나 사회적 책임을 이행하는 매우 중요한 업무입니다.

이 글은 특히 CSS를 이용하여 접근성을 향상하는 방법에 대해 소개하고 있습니다. 시리즈로는 “접근성을 고려하여 HTML 작성하기”, “접근성을 고려하여 JavaScript 작성하기”가 있습니다. 2017년에 작성되어 오랜 시간이 지났음에도 여전히 유용한 정보를 제공하고 있어 번역하여 소개하게 되었습니다.

:::info 목차

- 가독성 있는 텍스트에서 읽기 쉬운 텍스트로
- 가상 요소에 콘텐츠 신중하게 사용하기
- 화면만이 유일한 매체가 아니다
- 완전히 지원되지 않는 속성 값에 대한 대안
- 콘텐츠를 숨기는 여러 가지 방법
- 나쁜 대비는 신뢰할 수 없다
- 색상이 정보의 유일한 단서가 되어서는 안 된다
- 순서에 신경 쓰기
- 중요한 것에 집중하기: focus
- 그리드와 평평한 문서 구조

:::

<!--truncate-->

CSS를 사용하여 웹사이트와 앱의 접근성을 향상시키는 데 도움이 되는 팁에 대한 소개입니다.

이 글은 [러시아어](https://medium.com/@ABatickaya/%D0%B4%D1%83%D0%BC%D0%B0%D1%8F-%D0%BE-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%BF%D0%B8%D1%88%D0%B5%D0%BC-css-9032d7b64fb2)(역자: [Workafrolic](https://medium.com/@ABatickaya)), [포르투갈어](https://maujor.com/tutorial/escrevendo-css-com-acessibilidade-em-mente.php)(역자: [Maujor](https://maujor.com/)), 그리고 [일본어](https://frasco.io/writing-css-with-accessibility-in-mind-4fc82b26aecb)(역자: [Keita Nakanishi](https://twitter.com/nakanishy))로 번역되었습니다.

읽기를 선호하지 않는다면, **CSS Conf Budapest**에서 이 글의 대부분에 대해 이야기한 [녹음본](https://www.youtube.com/watch?v=EOiC2M47GBY)을 들을 수 있습니다.

약 1년 전, 저는 웹 접근성에 좀 더 집중하기 시작했습니다. 저에게 가장 효과적인 학습 방식은 다른 사람들을 가르치는 것입니다. 이것이 바로 제가 [밋업과 컨퍼런스](https://speakerdeck.com/matuzo/)에서 발표하고, 이 주제에 대한 글을 쓰는 이유 중 하나입니다. 저는 **Smashing Magazine**에 [점진적인 향상](https://www.smashingmagazine.com/2017/07/enhancing-css-layout-floats-flexbox-grid/), 그리고 접근성 기초에 대해 **Medium**에 글을 작성했습니다. 이 글은 접근성 팁 모음 시리즈 중 세 번째 글입니다. 관심이 있다면 특별한 순서 없이, [접근성을 고려하여 HTML 작성하기](https://medium.com/alistapart/writing-html-with-accessibility-in-mind-a62026493412)와 [접근성을 고려하여 자바스크립트 작성하기](https://medium.com/@matuzo/writing-javascript-with-accessibility-in-mind-a1f6a5f467b9)를 지금이나 나중에 읽어보면 좋습니다.

<hr/>

접근성을 고려하여 CSS 작성하기

CSS를 사용하여 문제를 해결하는 무한한 방법과 다양한 속성이 우리의 삶을 더 쉽게 만들어주지만, 동시에 사용자의 경험을 악화시킬 수도 있습니다. 사실, 단 세 줄의 CSS 만으로 웹사이트에 접근하기 어렵게 만들 수 있습니다.

이 글에서는 접근성 있는 CSS를 작성하는 데 도움이 될만한 기술과 고려 사항 그리고 접근방식을 모두 모았습니다. 이 컬렉션은 기본 개념과 잘 알려진 속성으로 시작하여, 끝에는 좀 더 새로운 것들을 다룹니다.

예상했던 것보다 많은 내용을 담게 되어, 가장 관심 있는 섹션으로 바로 이동할 수 있도록 링크가 걸린 목차를 마련했습니다.
