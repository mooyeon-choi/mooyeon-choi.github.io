# Flutter 패키지 개발하기

원하는 패키지가 없는 경우 새로운 패키지를 작성하는 방법은 어떻게 될까?

## 패키지 종속성 및 버전 관리

우선 버전 충돌 위험을 최소화하기 위해 `pubspec.yaml` 파일에서 버전 범위를 설정해줘야한다.

### 패키지 버전

모든 패키지에는 `pubspec.yaml` 파일에 지정된 패키지 버전 번호가 있다. 패키지의 현재 버전은 이름 옆에 표시된다.(예시 `url_launcher`: [url_launcher 6.3.1](https://pub.dev/packages/url_launcher)) 또한 모든 이전 버전 목록을 확인할 수 있다.(예시 [url_launcher 버전](https://pub.dev/packages/url_launcher/versions))

패키지를 업데이트할 때 마이그레이션 작업 없이 앱이 동작하도록 하기 위해 종속성들을 버전 범위로 설정해준다.

- **범위 제약 조건**: 최소 및 최대 버전 지정

  ```yaml
  dependencies:
    url_launcher: ">=5.4.0 <6.0.0"
  ```

- **[캐럿 구문](https://dart.dev/tools/pub/dependencies#caret-syntax)을 이용한 범위 제약**: 최소 버전을 설정한다. 이는 해당 버전부터 다음 메이저 버전 이전까지의 모든 버전을 포함한다.

  ```yaml
  dependencies:
    collection: "^5.4.0"
  ```

  이 구문은 위 **범위 제약 조건** 과 같은 의미를 가진다.

상세 내용은 다음에 살펴볼 [패키지 버전 관리 가이드](#패키지-버전-관리-가이드)에서 확인하자.

### 공개되지 않은 패키지에 대한 종속성

패키지는 pub.dev에 게시되지 않은 경우에도 활용할 수 있다. 비공개 패키지 또는 로컬 패키지와 같은 게시할 준비가 되지 않은 패키지의 경우 추가 종속성 옵션을 사용할 수 있다.

#### 경로 종속성

Flutter 앱은 파일 시스템 `path:` 종속성을 사용하여 패키지에 종속될 수 있다. 경로는 상대 경로 또는 절대 경로일 수 있다. 상대 경로는 `pubspec.yaml`을 포함하는 디렉토리를 기준으로 평가된다. 예를 들어, 옆 디렉토리에 있는 패키지에 종속되려면 다음과 같이 설정한다.

```yaml title="상대 경로 종속성"
dependencies:
packageA:
  path: ../pacakgeA/
```

#### Git 종속성

Git 저장소에 저장된 패키지에 의존할 수도 있다. 패키지가 저장소 루트에 있는 경우 다음과 같이 설정한다.

```yaml title="Git 종속성"
dependencies:
  packageA:
    git:
      url: https://github.com/flutter/packageA.git
```

#### SSH를 사용한 Git 종속성

저장소가 비공개이고 SSH를 사용하여 연결할 수 있는 저장소의 SSH URL을 사용하여 설정한다.

```yaml title="SSH를 사용한 Git 비공개 저장소"
dependencies:
  packageA:
    git:
      url: git@github.com:flutter/packageA.git
```

#### 폴더 내 패키지에 대한 Git 종속성

Pub은 패키지가 Git 저장소의 루트에 있다고 가정한다. 그렇지 않은 경우 `path`로 위치를 지정한다.

```yaml title="폴더 내 패키지에 대한 Git 종속성"
dependencies:
  packageA:
    git:
      url: https://github.com/flutter/packages.git
      path: packages/packageA
```

#### 특정 커밋, 브랜치 고정 Git 종속성

마지막으로 `ref`인수를 사용하여 종속성을 특정 git 커밋, 브랜치 또는 태그에 고정한다.

```yaml
dependencies:
  kittens:
    git:
      url: git@github.com:munificent/kittens.git
      ref: some-branch
```

추가적인 내용은 [패키지 종속성](https://dart.dev/tools/pub/dependencies)을 확인하자.
