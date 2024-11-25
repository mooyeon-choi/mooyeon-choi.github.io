---
slug: first-study-review
title: 기술 블로그 내용 공유 스터디 첫주차 리뷰
authors: mooyeon
tags: [study, pub.dev, refactoring, deploy]
date: 2024-11-23T22:53
---

# 기술 블로그 내용 공유 스터디 첫주차 리뷰

## 소개

매주 꾸준히 글을 작성하기 위한 동기부여 겸, 다양한 분야의 소식들을 다른 개발자분들과 공유하는 시간을 가질 겸, 다른 사람들 앞에서 발표해보는 연습도 할 겸 F-Lab dev club에서 활동중인 개발자분들을 모아 스터디를 만들었다. '제대로 진행이 될까?' 우려했던 것과는 달리 다들 열정도 있고 실력도 좋으셔서 잘 따라가기만 하면 될 것 같다.

이 글은 이번 첫 스터디 모임에서 공유한 주제들을 정리한 내용이다.

:::info 목차

1. [오픈소스 패키지 배포 시 고려해야할 것들](#오픈소스-패키지-배포-시-고려해야할-것들)
2. [레거시에서 어떻게 탑을 쌓아올릴 것인가](#레거시에서-어떻게-탑을-쌓아올릴-것인가)
3. [GITHUB ACTION을 통한 VERCEL 수동 배포 완전 정복 (with 모노레포)](#github-action을-통한-vercel-수동-배포-완전-정복-with-모노레포)

:::

<!--truncate-->

## 오픈소스 패키지 배포 시 고려해야할 것들

[블로그 포스트 링크](https://mooyeon.com/blog/how-to-upload-opensource-package)

첫 순서는 내가 준비한 내용으로 시작했다. 최근 회사 디자이너, 기획자 분들과 소통하는데 있어 어떻게하면 좀 더 빠르고 명확하게 피드백을 주고 받을까 고민하며 다양한 시도를 하고 있다. 이 내용은 그 중 하나인 디자이너분들과 애니메이션 효과 피드백을 위한 오픈소스 프로젝트 제작을 위해 준비해야할 단계에 대해 정리한 내용이다.

Flutter 커뮤니티는 다른 패키지 관리 시스템들보다 쉽게 접근할 수 있도록 다양한 기능을 제공해주기 때문에 보다 쉽게 패키지를 배포할 수 있다. 따라서 이번에는 패키지 버전 관리와 관련하여 어떻게 하면 다른 개발자들이 버전 충돌 문제 없이 잘 사용할 수 있을지에 집중하여 내용을 정리하였다.

발표 내용은 **이번 프로젝트를 진행하게된 계기**, **Flutter에서 패키지를 사용하는 방법**, **Flutter 패키지 개발**, **패키지 버전 관리의 역사(npm, yarn과 비교)** 순서로 진행했다.

### 프로젝트를 진행하게된 계기

회사에서 디자이너분들과 화면 Interaction과 관련하여 소통할 때, 정확하게 의견을 전달하기는 생각보다 매우 힘들다. 가장 명확한 방법은 직접 화면을 보여주는 것이며 이를 모를 사람들은 없을 거라 생각한다. 하지만 스타트업에서 실제로 업무를 진행하다보면 이렇게 진행하기가 어렵다는 것을 알 수 있는데, 크게는 다음의 이유 때문이었다.

먼저 **디자이너가 매번 애니메이션 효과까지 적용하기 어렵다.** 빠르게 결과물을 찍어내야하는 스타트업의 특성상 디자이너분들이 사소한 디테일 하나하나에 신경쓸 시간이 부족하다. 따라서 UI/UX의 큰 틀을 찍어내고 개발자들은 디자인이 나오는 동시에 개발에 들어가서 디테일한 부분을 볼 시간이 부족했다.

다음으로는 **애니메이션 효과를 똑같이 구현하기는 어렵다.** 화면 UI/UX를 디자인할 때에는 생각보다 더 많이 주관적인 평가가 들어간다. 따라서 다양한 상호작용 효과들과 이에 들어가는 애니메이션 효과를 만능 EaseInOut으로는 해결할 수 없는 경우도 많다. 하지만 위 첫번째 이유와 마찬가지로 우리에게는 항상 시간이 부족하므로 적당히 비슷한 수준으로 넘어가는 경우가 많다. 예술에 조금이라도 관심이 있는 사람이라면 이 적당이 비슷한 수준의 차이가 얼마나 치명적인지는 알고있을 것이다. 따라서 미리 가능한 효과 목록을 제공해주고 이를 활용하여 디자인 할 수 있도록 하는 것이 하나의 목표였다.

따라서 이 문제들을 해결하기 위해 이미 Apple이라는 대기업에서 제공하는 방식인 [SF-Symbols](https://developer.apple.com/sf-symbols/)를 참고하여 조금 더 다양한 효과를 넣어볼 수 있는 오픈소스 프로젝트 개발을 시작하였다.

### Flutter에서 패키지를 활용하는 방법

Flutter 에서 패키지를 활용하기 위한 pub.dev 소개와 `pubspec.yaml` 작성 방법에대해 간단히 이야기 했다. 다른 분들도 이미 `npm`이나 `pnpm`, `yarn`을 활용해본 경험이 있어 이와 다른 점에 대해서만 간단히 설명하고 넘어갔다.

JavaScript의 대표적인 패키지 매니저 `npm`과 비교해본다면 `npm`의 경우 유연한 버전 관리를 지향하고 `pub.dev`의 경우 엄격한 버전 관리를 지향하고 있다. 따라서 공유 종속성 문제를 해결하기 위해 `pub.dev`에서는 더 큰 범위의 버전을 설정가능하게 해줘야한다. 그 결과 `pub.dev`는 의미론적 버전관리를 할 때 최소단위가 메이저 버전이 되었다.

이 외에도 **Android** 종속성 관리, **CocoaPods**의 경우 종속성 관리가 불가능한 점을 공유하였다.

### Flutter 패키지 개발하기

플러터에서 패키지를 개발하는 방법과 `publish_to: ` 옵션을 통해 배포하는 방법, 비공개 배포나 로컬 배포 방법에 대해 공유하였다. 또 종속성 버전을 관리하는 방법에 대해 얘기하며 다음 내용인 패키지 버전 관리로 넘어간다.

### 패키지 버전 관리의 역사(npm, yarn과 비교)

패키지 버전 관리를 시작하게된 계기와 공유 종속성을 어떻게 해결하는지, 그럼에도 아직 해결하기 어려운 경우는 어떤 것들이 있는지에 대해 정리하였다.

공유 종속성 해결 문제와 관련하여 `npm`, `yarn`과 비교하여 `pub.dev`가 다른 점을 설명하였다. 세부 내용은 [해당 포스트](https://mooyeon.com/blog/how-to-upload-opensource-package)에서 확인하자.

## 레거시에서 어떻게 탑을 쌓아올릴 것인가

[블로그 포스트 링크](https://archanwriteup.tistory.com/entry/%EB%A0%88%EA%B1%B0%EC%8B%9C%EC%97%90%EC%84%9C-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%83%91%EC%9D%84-%EC%8C%93%EC%95%84%EC%98%AC%EB%A6%B4-%EA%B2%83%EC%9D%B8%EA%B0%80)

소개팅 애플리케이션 스타트업에 리드 개발자로 합류하면서 기존 Python Django 코드를 어떻게 Java Spring으로 전환하였는지 이 과정에서 어떻게 하면 실행중인 서비스를 멈추지 않으면서 필요한 기능 개발도 이어가면서 전환할 수 있었는지 공유해주었다.

대규모 리브랜딩을 진행 중인 스타트업에 참여하여 바로 리드 개발자로 팀원들을 이끌어 나가며 어떻게 개발 생산성을 높일 수 있었는지 공유해주는 내용과 리팩토링의 다양한 방법론에 대해 설명해주어서 많은 도움이 되었다.

발표 내용은 **레거시 코드를 수정하게된 계기**, **리팩토링 종류**, **실제 적용 방법** 순서로 진행되었다.

### 레거시 코드를 수정하게 된 계기

보통 스타트업 회사들이 경력있는 개발자를 채용하는 타이밍은 큰 프로젝트를 진행하기 직전인 경우가 많을 것이다. Archan님의 경우도 리드 개발자로 해당 회사에 합류하자 마자 대규모 리브랜딩을 어떻게 진행해야할 지 고민하게 된다. 이때 기존에 사용중이던 시스템을 개선해야한다면 문제는 더 복잡해진다. 기존의 레거시 코드들이 어떻게 동작하는지 빠르게 파악해야하며 이를 어떻게 개선할지 또한 빠르게 선택해야한다.

지금까지 경험해본바 스타트업의 레거시 코드들은 *고쳐쓰기*에는 이미 코드가 너무 복잡하게 얽혀있는 경우가 많다. 이를 보통 **기술 부채**라고 한다. 시험기간 많이들 "내일의 내가 하겠지"라며 게임을 하거나 친구들과 놀러가본 경험이 있을 것이다. 개발을 진행할 때에도 이와 마찬가지로 "회사가 성장해서 개발자가 더 많아지면 하겠지"와 같은 생각을 하게되고 기능 개발에만 급급하게 된다. 이렇게 개발을 진행하다 보면 *깨진 유리창 이론*과 같이 점차 문제 있는 코드에 대한 경각심이 사라지게 된다.

이렇게 개발을 지속하게 되면 결국에는 프로젝트 코드가 하나하나 고쳐쓰기에는 겉잡을 수 없을만큼 얼기설기 얽혀있어 건들기 어렵다. 이를 많이들 들어봤을 *스파게티 코드*라 하고 이젠 새로만드는게 더 빠를 지경에 이른다. 이번에도 같은 문제로 인해 *고쳐쓰기*보다는 새롭게 만들어내는게 나을 것이라 판단하고 이를 하나하나 새롭게 개발하게 된다.

내 경우도 지금의 회사에 들어와서 개발팀장님과 자주 얘기하는 내용이 "현재의 코드는 고쳐쓰기에는 너무 멀리왔다 새롭게 만드는게 더 빠를 것이다." 였는데 우리 회사의 경우와 겹쳐보여 많이 공감이 되었다. 하지만 여기서 회사의 상황에 따라 선택할 수 있는 방법에 차이가 발생하는데 리팩토링의 종류를 보며 확인할 수 있다.

### 리팩토링의 종류

리팩토링 방법에는 크게 빅뱅과 도살자 방법 두가지가 있다.

> *The only thing a Big Bang rewrite guarantees is a Big Bang! - Martin Fowler*

빅뱅 방법은 단어에서 유추할 수 있듯 기존의 코드를 버리고 모든 것을 새롭게 만드는 방식이다.

실제 운영되는 코드의 리팩토링을 진행하기란 매우 어렵다. 아래의 말을 한번쯤 들어보았을 것이다.

*멈춰있는 자동차보다, 달리는 자동차의 바퀴를 바꾸는 것이 더 까다롭기 때문이죠.*

운영되고 있는 서비스를 리팩토링 하는 것은 '달리는 자동차의 바퀴를 갈아끼우는 것'과 같다고 한다.

:::info 유레카! 

![Eureka!](./images/2024-11-23-first-study-review/first_study_review_1.png)<br/>*"달리는 자동차의 바퀴를 갈아끼는 것이 어렵다면, 새로운 자동차를 만들어버리면 되지 않을까?"*

:::

사람들은 생각한다. '그냥 새로 만드는게 더 빠르겠는데?' 이렇게 진행되는 리팩토링 방식이 **빅뱅 리팩토링**이다.

하지만 이렇게 한번에 모든 것을 고치려고 하면 모든 팀원들이 리팩토링 이외의 업무를 중단하고 리팩토링에만 집중해서 참여해야한다. 스타트업에서는 당장 새로운 서비스와 기능들을 출시하기에도 바쁜데 현재 "잘 실행되고 있는" 서비스를 위해 시간을 할애하기는 쉽지 않을 것이다.

이를 위한 또 다른 방법으로 **도살자** 방식이 있다. **점진적 리팩토링(Incremental Refactoring)** 을 통해 한 번에 모든 코드를 바꾸지 않고 여러 작은 단위로 나누어 변경하므로 기능 개발을 지속하며 코드를 개선해 나갈 수 있다.

### 실제 적용 방법

백엔드에서 코드를 하나하나 수정하기 위해서는 어떻게 해야할까? 기술스택을 유지하며 개발을 진행한다면 새로운 API를 추가해주고 기능 하나하나 요청 API를 변경해주며 적용한다면 기존 시스템에 문제가 발생하지 않으면서 새로운 코드로 전환이 가능할 것 이다.

하지만 이 경우 기존 Django로 작성된 레거시 코드를 Spring으로 전환하며 새로운 기술스택으로 전환하며 새로운 서버를 구성해주어 위 방법으로는 해결할 수 없다.

이를 보통 프록시 서버나 URL 구분을 위한 레이어를 추가하여 새로운 서버로 넘겨 주겠지만 AWS를 활용하여 로드밸런서에서 바로 URL 패턴을 구분하여 넘겨주는 방식을 사용하였다.

기존에는 로드밸런서는 부하분산을 위해서 사용한다는 것 정도만 알고있었는데 이런 기능도 추가해줄 수 있다는 내용을 들을 수 있어 흥미로웠다.

## GITHUB ACTION을 통한 VERCEL 수동 배포 완전 정복 (with 모노레포)

[블로그 포스트 링크](https://roseline.oopy.io/dev/vercel-deploy-by-github-action-in-monorepo)

서비스 배포를 위해서는 커밋 이력이 필요하다. 하지만 간혹 수정된 내용이 없어 커밋이력을 남길 수 없어 난감한 경우가 있을 것이다. 사람들의 생각이 다 똑같은게 가장 만만한건 역시 `README.md` 파일이었다. 내 블로그의 경우에도 한번씩 배포중 문제가 발생하거나 한다면 리드미에 엔터를 추가해서 커밋 이력을 남겨서 배포한 적도 있고 이전 회사에서도 리드미를 수정해서 커밋 이력을 만든 적이 있었다.

하지만 많은 사람들이 이와 같은 방식을 쓰게되면 문제가 발생한다. 사람들이 동시에 이러한 방법을 쓴다면 어떻게 될까? 공통된 파일에 수정사항이 발생해 git에서는 바로 충돌 에러가 발생할 것이다.

이번 내용에서도 이와 관련하여 기존의 자동 배포 방식을 왜 포기하고 수동 배포를 적용하였는지 이와 관련하여 어떻게 설정해주었는지 공유하는 시간이었다.

발표 진행 순서는 **수동 배포를 적용하게된 배경**, **배포 Flow 개선**, **추가 개발사항**, **개선 결과** 순서로 진행되었다.

### 수동 배포를 적용하게된 배경

회사에서는 기존에 FrontEnd 코드를 모노레포로 관리하며 vercel의 git integration 기능을 통해 특정 브랜치의 특정 패키지에 변경사항이 생기면 자동으로 배포하게 되어있었다. 하지만 회사 모노레포 구조상 특정 패키지들의 경우 변경사항이 발생하지 않아 자동으로 배포되지 않는 문제가 발생하였다.

이를 해결하기 위해 약간의 *꼼수*로 `README.md` 파일을 수정하는 방식을 사용하는 사람이 생기고 이를 점차 많은 사람들이 빈번하게 사용하여 불필요한 fake commit 생성, merge conflict 등 여러 문제가 발생한다. 따라서 이를 개선하기 위해 다른 방안을 찾게되었다.

:::tip 모노레포 파이프라인 최적화

모노레포를 직접 회사에서 적용해보지는 않아 잘 이해가 안가는 부분도 많았다. 검색해보다가 아래의 내용이 많은 도움이 되었다. 

[200여개 서비스 모노레포의 파이프라인 최적화](https://toss.tech/article/monorepo-pipeline)

:::

### 배포 Flow 개선

`vercel_ignore_step.sh`를 수정하고 dispatch workflow로 브랜치, 패키지명을 선택해서 배포하는 등의 방법들에 대해 설명해주었다. 세부내용은 해당 [포스트](https://roseline.oopy.io/dev/vercel-deploy-by-github-action-in-monorepo)에서 확인하자

### 추가 개발사항

`pnpm`을 사용해 패키지 의존성을 설치할 때 종속성 패키지를 캐싱하여 설치시간을 단축한 내용이 인상적이었다. 현재 우리 회사도 웹배포 시 CI/CD 로직을 좀 개선해야하는데 다른 프로젝트들로 인해 계속해서 미루고 있다. 우리의 경우도 의존성 변경이 거의 없으므로 추후 이 내용을 참고하면 배포시간을 크게 단축할 수 있을 것 같다. 

이 외에도 수동 배포 시 랜덤한 url 생성을 막기 위한 **vercel alias** 활용법, **배포 결과 자동 알림** 등의 기능을 적용한 방법들에 대해 공유해주었다.

### 개선 결과

fake commit을 만들고 vercel_ignore_step을 고치고 merge conflict를 수정하는 세 단계의 과정이 workflow를 트리거하는 하나의 단계로 줄었다. 또한 fake commit 작성을 깜빡하는 등 휴먼 에러를 줄이고 수동으로 전달하던 배포 알림을 직접 입력하지 않아도 되도록 하였다.

내년 우리 회사의 매인 프로젝트인 서비스 통합 과정에서 도입 준비중인 모노레포와 관련된 문제점들과 해결과정에 대해 공유해주셔서 많은 도움이 되었다. 아직은 직접 경험해보지 못해 크게 공감할 수는 없었지만, 내년에 프로젝트를 진행하며 다시 본다면 "아~ 그래서 저렇게 했구나"하고 공감할 수 있을 것 같다.

## 정리

여느 회사나 고민하는 내용들은 비슷한 것 같다. 회사에서 고민하고 있던 "기존 레거시 코드들을 어떻게 고칠까?", "모노레포를 적용해야 할까?" 같은 고민들을 다른 회사의 상황들을 들으며 어떻게 접근해보면 좋을지 생각하는 시간이 되어 좋았다.

## 참고 문헌

[빅뱅 리팩토링(Big Bang Rewrite 대응기 - 유우비트 velog)](https://velog.io/@uwoobeat/Big-Bang-Rewrite-%EB%8C%80%EC%9D%91%EA%B8%B0)