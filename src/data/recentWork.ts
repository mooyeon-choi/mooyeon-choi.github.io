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
    title: '메아리',
    englishName: 'MEARI',
    period: '2026.11',
    category: '브라우저 게임',
    headline: '메아리, 방향키로 고르는 웹 오락실',
    description:
      '조이스틱을 내리면 다음 게임의 플레이 화면이 뜹니다. 직접 만든 브라우저 게임 세 편을 한 대의 오락기에 모았습니다.',
    preview: '/img/work/meari-arcade.webp',
    website: '/blog/meari-web-arcade',
    liveUrl: 'https://meari.games/',
    source: null,
    tags: ['javascript', 'svg'],
  },
  {
    title: '미리내',
    englishName: 'MIRINAE',
    alternateName: 'mirine',
    period: '2026.11',
    category: '3D · 천문 시각화',
    headline: '미리내, 오리온자리를 옆에서 보면',
    description:
      '밤하늘에서 고른 별자리를 옆으로 돌려 봅니다. 별 목록에 담긴 거리 추정치로 지구에서 각 별까지의 깊이를 그렸습니다.',
    preview: '/img/work/mirinae-orion.webp',
    website: '/blog/mirinae-constellations',
    liveUrl: 'https://mirinaesky.com/',
    source: null,
    tags: ['javascript', 'threejs'],
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
