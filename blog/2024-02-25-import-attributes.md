---
slug: import-attributes
title: Import 속성 (attributes)
authors: mooyeon
tags: [V8, v12.3, frontend, JavaScript]
date: 2024-02-25T20:01
---

# Import 속성(attributes)

- 원문: https://v8.dev/features/import-attributes#deprecation-and-eventual-removal-of-assert

## 소개

V8 v12.3부터 새롭게 지원되는 import 속성(attributes)에 대해 설명하는 글입니다. import 속성이 왜 필요하게 되었는지, v9.1 부터 사용된 import 어설션(assertions)과는 어떻게 다른지 이 글을 통해 살펴보실 수 있습니다.

:::info 목차

- 이전 버전
- Import 속성
- 동적 import()
- with 사용 가능 여부
- assert의 사용 중단 및 최종 제거
- Import 속성 지원

:::

<!--truncate-->

## 이전 버전

V8은 v9.1에서 [import 어설션(assertions)](https://chromestatus.com/feature/5765269513306112) 기능을 제공했습니다. 이 기능을 사용하면 모듈 import 문에 `assert` 키워드를 사용하여 추가 정보를 포함할 수 있습니다. 이 추가 정보는 현재 자바스크립트 모듈 내에서 JSON 및 CSS 모듈을 임포트하는 데 사용됩니다.

## Import 속성

그 이후로 import 어설션은 [import 속성(attributes)](https://github.com/tc39/proposal-import-attributes)로 발전했습니다. 모듈 import 문에 추가 정보를 포함할 수 있도록 허용한다는 기능의 요점은 동일하게 유지됩니다.

가장 중요한 차이점은 import 어설션에는 어설션 전용 시멘틱이 있는 반면 import 속성에는 좀 더 완화된 시멘틱이 있다는 것입니다. 어설션 전용 시멘틱은 추가 정보가 모듈이 로드되는 방식에는 영향을 미치지 않고 로드 여부에만 영향을 미친다는 것을 의미합니다. 예를 들어, JSON 모듈은 MIME 유형에 따라 항상 JSON 모듈로 로드되며, `assert { type: 'json' }` 절은 요청된 모듈의 MIME 유형이 `application/json`이 아닌 경우에만 로드에 실패할 수 있습니다.

하지만 어설션 전용 시맨틱에는 치명적인 결함이 있었습니다. 웹에서는 요청되는 리소스 유형에 따라 HTTP 요청의 형태가 달라집니다. 예를 들어 [Accept 헤더](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)는 응답의 MIME 유형에 영향을 미치고, [Sec-Fetch-Dest 메타데이터 헤더](https://web.dev/articles/fetch-metadata)는 웹 서버가 요청을 수락할지 거부할지에 영향을 줍니다. import 어설션은 모듈을 로드하는 방법에 영향을 줄 수 없으므로 HTTP 요청의 형태를 변경할 수 없습니다. 요청되는 리소스의 유형은 사용되는 [콘텐츠 보안 정책(CSP, Content Security Policies)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)에도 영향을 미치므로 import 어설션이 웹의 보안 모델에서 올바르게 작동하지 않을 수 있습니다.

`import` 속성은 어설션 전용 시멘틱을 완화하여 속성이 모듈 로드 방식에 영향을 줄 수 있도록 합니다. 즉, import 속성은 적절한 **Accept** 및 **Sec-Fetch-Dest** 헤더를 포함하는 HTTP 요청을 생성할 수 있습니다. 구문을 새 시멘틱과 일치시키기 위해 이전 **assert** 키워드는 **with**으로 업데이트됩니다.

```js
// main.mjs
//
// 새로운 'with' 문법.
import json from './foo.json' with { type: 'json' };
console.log(json.answer); // 42
```

## 동적 import()

마찬가지로 [동적 import()](https://v8.dev/features/dynamic-import#dynamic)도 with 옵션을 허용하도록 업데이트됩니다.

```js
// main.mjs
//
// 새로운 'with' 옵션.
const jsonModule = await import("./foo.json", {
  with: { type: "json" },
});
console.log(jsonModule.default.answer); // 42
```

## with 사용 가능 여부

Import 속성은 V8 v12.3에서 기본적으로 활성화됩니다.

## assert의 사용 중단 및 최종 제거

assert 키워드는 V8 v12.3부터 더 이상 사용되지 않으며 v12.6에서 제거될 예정입니다. assert 대신 with를 사용해 주세요! assert 절을 사용하면 콘솔에 with를 사용하라는 경고가 출력됩니다.

## Import 속성 지원

Chrome: 123 버전 부터 지원

Firefox: 지원하지 않음

Safari: 17.2 버전 부터 지원

Node.js: 지원하지 않음

Babel: [`@babel/syntax-import-attributes` 플러그인을 통해 지원](https://babeljs.io/blog/2023/05/26/7.22.0#import-attributes-15536-15620)
