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
      link: {type: 'doc', id: 'preparation/intro'},
      items: [
        'preparation/kanban_vs_scrum',
        'preparation/jira',
        'preparation/slack',
      ],
    },
    {
      type: 'category',
      label: 'Web',
      link: {type: 'doc', id: 'web/intro'},
      items: [
        {
          type: 'category',
          label: 'Web Basic',
          link: {type: 'doc', id: 'web/basic/intro'},
          items: [
            'web/basic/html',
            'web/basic/css',
            'web/basic/javascript'
          ]
        },
        {
          type: 'category',
          label: 'Frontend',
          link: {type: 'doc', id: 'web/frontend/intro'},
          items: [
            'web/frontend/angular_vs_react_vs_vue',
            {
              type: 'category',
              label: 'Vanilla JS',
              link: {type: 'doc', id: 'web/frontend/vanillaJs/intro'},
              items: [
                'web/frontend/vanillaJs/webadvanced',
                'web/frontend/vanillaJs/webapi',
                {
                  type: 'category',
                  label: 'Vanills JavaScript Basic',
                  link: {type: 'doc', id: 'web/frontend/vanillaJs/vanillaJsBasic/intro'},
                  items: []
                },
                'web/frontend/vanillaJs/makeComponents'
              ]
            },
            {
              type: 'category',
              label: 'TypeScript',
              link: {type: 'doc', id: 'web/frontend/typeScript/intro'},
              items: [
                'web/frontend/typeScript/tsIn5min'
              ]
            },
          ]
        },
      ],
    }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
