---
sidebar_position: 4
---

# Markdown

## 목차

- [참고하면 좋은 자료들](#참고하면-좋은-자료들)
- [Heading](#heading)S
- [Line](#line)
- [Text attributes](#text-attributes)
- [Quote](#quote)
- [Bullet list](#bullet-list)
- [Numbered list](#numbered-list)
- [Link](#link)
- [Image](#image)
- [Table](#table)
- [Code](#code)

## 참고하면 좋은 자료들

### [Github Markdown Emoji Markup](https://gist.github.com/rxaviers/7360908)

깃헙 markdown에서 사용할 수 있는 Emoji😊를 모아놓은 rxaviers님의 gist페이지
ctrl + F 로 간단하게 사용하고 싶은 Emoji를 찾아 복사해서 쓰면 된다!

### [Shields.io](https://shields.io/)

다양한 뱃지를 만들어주는 사이트 깃헙 README에 사용하면 좀 더 보기좋게 꾸밀 수 있다.

![brightgreen](https://shields.io/badge/-brightgreen-brightgreen) [![Hits](https://camo.githubusercontent.com/1d9505b45849bc2aa00539021be63569b510e6896b711bc342e1fd6a4e9e804b/68747470733a2f2f686974732e736565796f756661726d2e636f6d2f6170692f636f756e742f696e63722f62616467652e7376673f75726c3d68747470732533412532462532466769746875622e636f6d2532466d6f6f79656f6e2d63686f6926636f756e745f62673d253233373943383344267469746c655f62673d2532333535353535352669636f6e3d69636f6e6966792e7376672669636f6e5f636f6c6f723d253233453745374537267469746c653d6869747326656467655f666c61743d66616c7365)](https://hits.seeyoufarm.com/) [![Codeforces Badge](https://camo.githubusercontent.com/375f0baa53c91117a815978c121ebd40ff83a781e1c4d58b715cf4540e4aaa79/68747470733a2f2f63702d6c6f676f2e76657263656c2e6170702f636f6465666f726365732f6d6f6f79656f6e)](https://codeforces.com/profile/mooyeon) [![Solved.ac 프로필](https://camo.githubusercontent.com/4e73e2a8c562c515d6794d0dff01f4554db50272d56717f38486a41f83e408cf/687474703a2f2f6d617a617373756d6e6964612e7774662f6170692f6d696e692f67656e65726174655f62616467653f626f6a3d6d656d6f7269613232)](https://solved.ac/memoria22) [![Generic badge](https://camo.githubusercontent.com/cd88420c8e5f8756d1aa1a85bc8a2735b6f168cda2fefdd7b6ba9c5ff3d0ddf5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f426c6f672d746973746f72792d79656c6c6f772e737667)](https://moo-choi.tistory.com/)

뿐만 아니라 아래와 같이 내 프로젝트 Repository의 URL을 입력하면 자동으로 추천 Badge들을 생성해주어 쉽게 만들어줄 수 있다

![Shields.io 배지 추천 화면](./images/shieldsio_recommend1.PNG)

![저장소별 배지 예시](./images/shieldsio_recommend2.PNG)

## Heading

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Line

```
paragraph
___ (언더바를 세번 입력해준다.)
```

paragraph

---

## Text attributes

```
This is the **bold** text and this is the *italic* text and let's do ~~strikethrough~~.
```

This is the **bold** text and this is the _italic_ text and let's do ~~strikethrough~~.

## Quote

```
> Don't forget to code your dream.
```

> Don't forget to code your dream.

## Bullet list

```
Fruits:
* 🍎
* 🍋
Other fruits:
- 🍑
- 🍏
```

Fruits:

- 🍎
- 🍋

Other fruits:

- 🍑
- 🍏

## Numbered list

```
Numbers:
1. first
2. second
3. third
```

Numbers:

1. first
2. second
3. third

## Link

```
[Click](https://github.com/mooyeon-choi)
[문서 내 이동](#문서-내-이동)
## 문서 내의 Heading으로도 이동할 수 있다 이때 띄어쓰기는 '-'로 입력해주어야한다.
```

[Click](https://github.com/mooyeon-choi)

### 문서 내 이동

[문서 내 이동](#문서-내-이동)

## Image

```
![image description](image url)
## img Tag
<img src="image url" />
```

## Table

```
|Header|Description1|Description2|
|--:|:--|:--:|  ## 오른쪽, 왼쪽, 가운데 정렬
|cell1|cell2|cell3|
|cell1|cell2|cell3|
```

| Header | Description1 | Description2 |
| -----: | :----------- | :----------: |
|  cell1 | cell2        |    cell3     |
|  cell1 | cell2        |    cell3     |

## Code

````
# `(백틱) 키
To pring message in the console, use `console.log('your message')` and ..

​```ts
console.log('your message')
​```
````

To pring message in the console, use `console.log('your message')` and ..

```ts
console.log("your message");
```
