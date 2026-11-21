import type {Project} from './projects';

type WorkNote = Project & {
  englishName: string;
  period: string;
  category: string;
  headline: string;
};

export const recentWork = [
  {
    title: '새김',
    englishName: 'Saegim',
    period: '2026.11',
    category: '모션 그래픽',
    headline: '새김, 영상 한 장면을 SVG로 다시 그리기',
    description:
      '8초짜리 영상에서 글자와 도형, 움직임을 추출했습니다. 두 화면을 겹쳐 보면 SVG에 남은 디테일과 사라진 선이 보입니다.',
    preview: '/img/work/saegim-source.webp',
    website: '/blog/saegim-motion-to-svg',
    source: 'https://github.com/mooyeon-choi/saegim',
    tags: ['svg'],
  },
  {
    title: '웃픈',
    englishName: 'Wootpun',
    period: '2026.09',
    category: '웹 · 모바일',
    headline: '웃픈, 같은 글을 두 가지 방식으로 읽기',
    description:
      '앱에서는 위로 넘기고 웹에서는 다음 글의 제목을 고릅니다. 하나의 피드를 세 플랫폼에 맞춰 설계한 기록입니다.',
    preview: '/img/work/wootpun.webp',
    website: '/blog/wootpun-reader',
    source: 'https://github.com/mooyeon-choi/wootpun',
    tags: ['typescript', 'mobile', 'rust'],
  },
] satisfies WorkNote[];
