/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tilSidebar: [
    'intro',
    'helpful',
    'git',
    'markdown',
    {
      type: 'category',
      label: '개발 준비',
      items: [
        'preparation/kanban_vs_scrum',
        'preparation/jira',
        'preparation/slack',
      ],
    },
    {
      type: 'category',
      label: 'Languages',
      items: [
        {
          type: 'category',
          label: 'JavaScript',
          items: [
            'languages/javaScript/javascriptBasic',
            'languages/javaScript/dataType',
          ]
        },
        {
          type: 'category',
          label: 'TypeScript',
          items: [
            'languages/typeScript/tsIn5min',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Web',
      link: {type: 'doc', id: 'web/intro'},
      items: [
        {
          type: 'category',
          label: 'Web Basic',
          items: [
            'web/basic/html',
            'web/basic/css',
          ]
        },
        {
          type: 'category',
          label: 'Frontend',
          items: [
            'web/frontend/angularVsReactVsVue',
            {
              type: 'category',
              label: 'Vanilla JS',
              items: [
                'web/frontend/vanillaJs/webadvanced',
                'web/frontend/vanillaJs/webapi',
                'web/frontend/vanillaJs/vanillaJSBasic',
                'web/frontend/vanillaJs/makeComponents'
              ]
            },
            {
              type: 'category',
              label: 'React',
              items: [
                'web/frontend/react/gettingStarted',
                'web/frontend/react/reactBasic',
                'web/frontend/react/pureComponent',
              ]
            },
            {
              type: 'category',
              label: 'Vue',
              items: [
                'web/frontend/vue/gettingStarted',
                'web/frontend/vue/vueBasic',
              ]
            },
          ]
        },
      ],
    }
  ],
};

module.exports = sidebars;
