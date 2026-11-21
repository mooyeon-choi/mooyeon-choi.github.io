# mooyeon.com

Mooyeon Choi의 프로젝트, 블로그 글과 학습 노트를 담은 Astro 정적 사이트입니다.

## 개발

Node.js 20.19 이상에서 `corepack enable`, `yarn install --immutable`, `yarn start` 순서로 실행합니다. `yarn build`가 정적 페이지를 `build/`에 생성합니다. `yarn serve`로 배포 전 결과를 확인할 수 있습니다.

## 콘텐츠

블로그 글은 `blog/YYYY-MM-DD-제목.md`에 작성합니다. 머리말의 `slug`가 공개 주소를 결정하며 `title`, `date`, `tags`가 기록 목록과 피드에 반영됩니다. 학습 노트는 `docs/` 아래 Markdown 파일의 경로와 대소문자를 그대로 주소로 사용합니다. 이미지는 글과 함께 관리하고 상대 경로로 연결합니다.

프로젝트와 메아리 수록 게임은 `src/lib/projects.ts`에서 관리합니다. master에 병합하면 GitHub Actions가 빌드한 결과를 gh-pages 브랜치에 올려 mooyeon.com에 배포합니다.
