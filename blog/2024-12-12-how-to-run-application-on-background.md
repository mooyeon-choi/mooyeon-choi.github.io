---
slug: how-to-run-application-on-background
title: 애플리케이션을 백그라운드에서 동작시키기 위한 방법
authors: mooyeon
tags: [flutter, iOS, swift, android]
date: 2024-12-12T15:12
---

# 애플리케이션을 백그라운드에서 동작시키기 위한 방법

## 소개

애플리케이션을 개발하다보면 대용량 파일 업로드/다운로드 주기적인 데이터 fetch 작업 등 애플리케이션에서 백그라운드로 동작을 해줘야하는 상황들이 있다. 이러한 백그라운드 프로세스 작업들의 경우 어떤 식으로 실행할 수 있으며 어떻게 유지할 수 있는지 iOS/Android 각각의 환경에서 알아본 내용이다.

:::info 목차

1. [안드로이드에서의 백그라운드 작업](#안드로이드에서의-백그라운드-작업)
2. [iOS에서의 백그라운드 작업](#ios에서의-백그라운드-작업)
3. [플러터에 연결하기](#플러터에-연결하기)

:::

<!--truncate-->

## 안드로이드에서의 백그라운드 작업

안드로이드에서의 지속적인 작업은 WorkManager를 통해 처리가능하다. 대부분의 백그라운드 처리가 지속적 작업을 통해 수행되기 때문에 WorkManager는 일반적으로 백그라운드 처리를 위한 주요 권장 API로 사용된다.

### 지속적인 작업의 유형

WorkManager는 세 가지 유형의 지속적인 작업을 처리한다.

- **즉시(Immediate)**: 즉시 시작해서 곧 완료해야 하는 작업
- **오래 걸리는 작업(Long Running)**: 10분 이상 소요되는 작업
- **예약 작업(Deferrable)**: 나중에 시작되거나 주기적으로 실행되는 예약된 작업

아래 그림은 다양한 유형의 지속적 작업이 서로 어떻게 연관되어 있는지 간략히 설명한다.

![workmanager_main](./images/2024-12-12-how-to-run-application-on-backend/workmanager_main.svg)
지속적인 작업 유형(https://developer.android.com/develop/background-work/background-tasks/persistent)

마찬가지로, 다음 표에서는 다양한 유형의 작업을 간략히 설명한다.

| 유형             | 주기                 | 접근방법                                                                                                 |
| ---------------- | -------------------- | -------------------------------------------------------------------------------------------------------- |
| 즉각적인         | 일회성               | `OneTimeWorkRequest`, `Worker` 사용, 즉시 처리해야할 경우 `OneTimeWorkRequest`에서 `setExpedited()` 호출 |
| 오래 걸리는 작업 | 한번 또는 주기적으로 | `WorkRequest`, `Worker` 사용, 알림 처리를 위해서는 `setForeground()` 호출                                |
| 예약 작업        | 한번 또는 주기적으로 | `PeriodicWorkRequest`, `Worker` 사용                                                                     |

WorkManager를 설정하는 방법에 대한 자세한 내용은 [WorkRequest 정의](https://developer.android.com/topic/libraries/architecture/workmanager/how-to/define-work?_gl=1*12i8vjd*_up*MQ..*_ga*Nzg3NTIxNDM3LjE3MzQzMTkyNTc.*_ga_6HH9YJMN9M*MTczNDMxOTI1Ni4xLjAuMTczNDMxOTI1Ni4wLjAuMTExNTE5NzcxNQ..#work-constraints) 가이드에서 확인할 수 있다.

### WorkManager 기능

WorkManager는 더 간단하고 일관된 API를 제공하는 것 외에도 여러 가지 주요 이점을 제공한다.

#### 작업 제약

[작업 제약 조건](https://developer.android.com/topic/libraries/architecture/workmanager/how-to/define-work?_gl=1*16egi7j*_up*MQ..*_ga*Nzg3NTIxNDM3LjE3MzQzMTkyNTc.*_ga_6HH9YJMN9M*MTczNDMxOTI1Ni4xLjAuMTczNDMxOTI1Ni4wLjAuMTExNTE5NzcxNQ..#work-constraints)을 사용하여 작업을 실행하기 위한 최적의 조건을 선언적으로 정의한다. 예를 들어, 장치가 무제한 네트워크에 있을 때, 장치가 유휴 상태일 때 또는 베터리가 충분할 때만 실행한다.

## iOS에서의 백그라운드 작업

안드로이드와 비교했을때, iOS에서는 백그라운드 작업에 많은 제한을 두고 있다. iOS 13 이전 버전에서는 백그라운드 프로세스로 동작하는 경우를 고려하지 않아, 많은 개발자들이 여러 방법으로 앱이 현재 "실행 중"인 것 처럼 속여서 프로그램을 동작시켜주는 방식을 많이 활용해왔다. iOS 13 이후 버전에서는 *앱이 현재 "실행 중"인 것 처럼 속여*서 실행하는 개념자체는 동일하지만 이러한 기능들을 더 쉽게 활용할 수 있도록 Bacground Tasks Framework를 제공해주고 있다.

### Background Tasks

iOS 13부터 추가된 프레임워크로 시스템과 앱 간의 Background Task 요청을 담당하는 역할을 한다. 해당 프레임워크에서는 `BGAppRefreshTask`, `BGProcessingTask` 두 가지 타입을 제공해주는데 `BGAppRefreshTask`는 30초 정도가 소요되는 작업에 사용되고 그 이상의(몇분, 보통 5분 내외) 시간이 소요되는 작업들은 `BGProcessingTask`를 사용하게 한다.

![ios background tasks run](./images/2024-12-12-how-to-run-application-on-backend/ios_background_tasks_run.png)

[WWDC 2019년 발표자료](https://developer.apple.com/videos/play/wwdc2019/707/?time=1149)를 참고해보면 사용자가 Foreground로 진입하는 시점을 시스템이 분석하여 Background Task를 먼저 실행해준다. 그 외에도 백그라운드 앱 새로고침 설정, 베터리 충전 상태, 네트워크 연결등의 속성을 추가해주어 호출하는 시점을 정해주며 이 부분은 시스템에서 자체적으로 적용하여 정확한 시점을 파악하기 힘들다.

### BGAppRefreshTask

[WWDC 2019년 발표자료](https://developer.apple.com/videos/play/wwdc2019/707/?time=1131)를 확인해보면 `BGAppRefreshTask`에 대해 아래와 같이 설명한다.

![bgapprefreshtask_info](./images/2024-12-12-how-to-run-application-on-backend/bgapprefreshtask_info.png)

`BGAppRefreshTask`의 경우 30초 이내의 간단한 작업들에 사용되기 위해 만들어졌다. 또한 스케쥴러 속성을 설정하여 주기적으로 새로고침 작업을 실행해줄 수 있다.

### BGProcessingTask

`BGProcessingTask`의 경우 반대로 대용량 파일 다운로드나 데이터 동기화와 같이 시간이 많이 걸리는 작업을 수행하기 위해 만들어졌다.

## 플러터에 연결하기
