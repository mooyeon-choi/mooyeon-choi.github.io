# Mylog

이 웹사이트는 개발 학습과 경험을 기록하는 개인 블로그입니다. [Docusaurus 2](https://docusaurus.io/)를 사용하여 구축되었습니다.

## 📖 프로젝트 소개

- **블로그**: 프론트엔드, 백엔드, 모바일 개발 관련 기술 포스팅
- **문서**: 개발 공부 내용과 유용한 정보 정리
- **쇼케이스**: 진행한 프로젝트들 소개

## 🚀 시작하기

### 설치

```bash
yarn
```

### 로컬 개발

```bash
yarn start
```

로컬 개발 서버가 시작되고 브라우저 창이 열립니다. 대부분의 변경사항은 서버를 재시작하지 않고도 실시간으로 반영됩니다.

### 빌드

```bash
yarn build
```

정적 콘텐츠를 `build` 디렉토리에 생성합니다. 모든 정적 콘텐츠 호스팅 서비스에서 제공할 수 있습니다.

### 배포

SSH 사용:

```bash
USE_SSH=true yarn deploy
```

SSH 미사용:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

GitHub Pages를 사용하는 경우, 이 명령어로 웹사이트를 빌드하고 `gh-pages` 브랜치에 푸시할 수 있습니다.

## 📁 프로젝트 구조

```
├── blog/                  # 블로그 포스트 (Markdown)
├── docs/                  # 문서 페이지
│   ├── app/              # 앱 개발 관련
│   ├── languages/        # 프로그래밍 언어 학습
│   ├── preparation/      # 취업 준비
│   └── web/             # 웹 개발 관련
├── src/
│   ├── css/             # 커스텀 CSS
│   ├── data/            # 데이터 파일
│   ├── pages/           # 페이지 컴포넌트
│   └── utils/           # 유틸리티 함수
├── static/              # 정적 파일 (이미지, 아이콘 등)
└── docusaurus.config.js # Docusaurus 설정
```

## 🛠 기술 스택

- **Framework**: Docusaurus 2
- **Language**: TypeScript, JavaScript
- **Styling**: CSS
- **3D Graphics**: Three.js, React Three Fiber
- **Deployment**: GitHub Pages

## 🔗 링크

- **웹사이트**: [https://mooyeon.com](https://mooyeon.com)
- **GitHub**: [https://github.com/mooyeon-choi](https://github.com/mooyeon-choi)
- **이력서**: [Notion Resume](https://evanescent-table-194.notion.site/Frontend-0866085aac3c4c619efbd9ab1d940329)
- **CoffeeChat**: [오픈카톡](https://open.kakao.com/o/sEenYDXg)
