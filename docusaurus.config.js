// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mooyeon’s Log',
  tagline: 'Mooyeon Choi의 프론트엔드 개발 기록과 프로젝트',
  url: 'https://mooyeon.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/log-mark.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mooyeon-choi', // Usually your GitHub org/user name.
  projectName: 'mooyeon-choi.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mooyeon-choi/mooyeon-choi.github.io/tree/master/',
        },
        blog: {
          showReadingTime: false,
          // The older posts put their full table of contents before the explicit marker.
          truncateMarker: /<!--\s*truncate\s*-->|\{\/\*\s*truncate\s*\*\/\}|^:::info 목차/m,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mooyeon-choi/mooyeon-choi.github.io/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/work/saegim-source.webp',
      navbar: {
        title: 'mooyeon.com',
        logo: {alt: '', src: 'img/log-mark.png'},
        items: [
          {to: '/blog', label: '블로그', position: 'left'},
          {to: '/showcase', label: '프로젝트', position: 'left'},
          {type: 'doc', docId: 'intro', label: '개발 노트', position: 'left'},
          {to: '/aboutMe', label: '소개', position: 'left'},
          {href: 'https://github.com/mooyeon-choi', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        links: [
          {
            href: 'https://www.canva.com/design/DAGz-nqnzUs/hqoQlPIJGeUcR_Zt0MYSRA/view?utm_content=DAGz-nqnzUs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h675136036a',
            label: '이력서',
          },
          {
            href: 'https://www.canva.com/design/DAG0FtTtc7Q/5bxilRwjMyASzdWmJYeuIA/watch?utm_content=DAG0FtTtc7Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he3cc71b0d4',
            label: '포트폴리오',
          },
          {
            href: 'https://open.kakao.com/o/sEenYDXg',
            label: '커피챗',
          },
        ],
        copyright: 'Mooyeon Choi · mooyeon.com',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['dart'],
      },
    }),

};

module.exports = config;
