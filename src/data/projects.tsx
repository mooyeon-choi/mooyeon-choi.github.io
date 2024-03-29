/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {sortBy} from '@site/src/utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/facebook/docusaurus/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | 'javascript'
  | 'react'
  | 'vuejs'
  | 'canvasTutorial'
  | 'pixi'

// Add sites to this list
// prettier-ignore
const Projects: Project[] = [
  {
    title: 'interactive-3d-cube',
    description: '마우스로 움직일 수 있는 3D Cube',
    preview: '/img/showcase/interactive-3d-cube.png',
    website: 'https://mooyeon-choi.github.io/interactive-3d-cube/',
    source: 'https://github.com/mooyeon-choi/interactive-3d-cube',
    tags: ['javascript', 'canvasTutorial'],
  },
  {
    title: 'aircap-wave',
    description: '',
    preview: '/img/showcase/aircap-wave.png',
    website: 'https://mooyeon-choi.github.io/aircap-wave/',
    source: 'https://github.com/mooyeon-choi/aircap-wave',
    tags: ['javascript', 'canvasTutorial'],
  },
  {
    title: 'bouncing-ball',
    description: '화면 크기에 맞춰 통통 튀어다니는 공',
    preview: '/img/showcase/bouncing-ball.png',
    website: 'https://mooyeon-choi.github.io/bouncing-ball/',
    source: 'https://github.com/mooyeon-choi/bouncing-ball',
    tags: ['javascript', 'canvasTutorial'],
  },
  {
    title: 'moving-waves',
    description: '다양한 색상의 움직이는 파도',
    preview: '/img/showcase/moving-waves.png',
    website: 'https://mooyeon-choi.github.io/moving-waves/',
    source: 'https://github.com/mooyeon-choi/moving-waves',
    tags: ['javascript', 'canvasTutorial'],
  },
  {
    title: 'rotating-polygon',
    description: '마우스 혹은 터치로 드래그 시 회전하는 Polygon',
    preview: '/img/showcase/rotating-polygon.png',
    website: 'https://mooyeon-choi.github.io/rotating-polygon/',
    source: 'https://github.com/mooyeon-choi/rotating-polygon',
    tags: ['javascript', 'canvasTutorial'],
  },
  {
    title: 'bounce-strings',
    description: '움직이는 공에 의해 튕겨지는 줄',
    preview: '/img/showcase/bounce-strings.png',
    website: 'https://mooyeon-choi.github.io/bounce-strings/',
    source: 'https://github.com/mooyeon-choi/bounce-strings',
    tags: ['javascript', 'canvasTutorial'],
  },
  {
    title: 'rotating-globe',
    description: '구 형태로 회전하는 점들',
    preview: '/img/showcase/rotating-globe.png',
    website: 'https://mooyeon-choi.github.io/rotating-globe/',
    source: 'https://github.com/mooyeon-choi/rotating-globe',
    tags: ['javascript', 'canvasTutorial'],
  },
  {
    title: 'hanging-box',
    description: '',
    preview: '/img/showcase/hanging-box.png',
    website: 'https://mooyeon-choi.github.io/hanging-box/',
    source: 'https://github.com/mooyeon-choi/hanging-box',
    tags: ['javascript', 'canvasTutorial'],
  },
  {
    title: 'kinetic-typography-1',
    description: '',
    preview: '/img/showcase/kinetic-typography-1.png',
    website: 'https://mooyeon-choi.github.io/kinetic-typography-1/',
    source: 'https://github.com/mooyeon-choi/kinetic-typography-1',
    tags: ['javascript', 'pixi'],
  },
  {
    title: 'kinetic-typography-2',
    description: '',
    preview: '/img/showcase/kinetic-typography-2.png',
    website: 'https://mooyeon-choi.github.io/kinetic-typography-2/',
    source: 'https://github.com/mooyeon-choi/kinetic-typography-2',
    tags: ['javascript', 'pixi'],
  },
  {
    title: 'kinetic-typography-3',
    description: '',
    preview: '/img/showcase/kinetic-typography-3.png',
    website: 'https://mooyeon-choi.github.io/kinetic-typography-3/',
    source: 'https://github.com/mooyeon-choi/kinetic-typography-3',
    tags: ['javascript', 'pixi'],
  },
  {
    title: 'kinetic-typography-4',
    description: '',
    preview: '/img/showcase/kinetic-typography-4.png',
    website: 'https://mooyeon-choi.github.io/kinetic-typography-4/',
    source: 'https://github.com/mooyeon-choi/kinetic-typography-4',
    tags: ['javascript', 'pixi'],
  },
  {
    title: 'kinetic-typography-6',
    description: '',
    preview: '/img/showcase/kinetic-typography-6.png',
    website: 'https://mooyeon-choi.github.io/kinetic-typography-6/',
    source: 'https://github.com/mooyeon-choi/kinetic-typography-6',
    tags: ['javascript', 'pixi'],
  },
  {
    title: 'kinetic-typography-7',
    description: '',
    preview: '/img/showcase/kinetic-typography-7.png',
    website: 'https://mooyeon-choi.github.io/kinetic-typography-7/',
    source: 'https://github.com/mooyeon-choi/kinetic-typography-7',
    tags: ['javascript', 'pixi'],
  },
  {
    title: 'ink-smear',
    description: '',
    preview: '/img/showcase/ink-smear.png',
    website: 'https://mooyeon-choi.github.io/ink-smear/',
    source: 'https://github.com/mooyeon-choi/ink-smear',
    tags: ['javascript', 'pixi'],
  },
  {
    title: 'react-habit-tracker',
    description: '',
    preview: '/img/showcase/react-habit-tracker.png',
    website: 'https://mooyeon-choi.github.io/react-habit-tracker/',
    source: 'https://github.com/mooyeon-choi/react-habit-tracker',
    tags: ['react'],
  },
  {
    title: 'vue-habit-tracker',
    description: '',
    preview: '/img/showcase/vue-habit-tracker.png',
    website: 'https://mooyeon-choi.github.io/vue-habit-tracker/',
    source: 'https://github.com/mooyeon-choi/vue-habit-tracker',
    tags: ['vuejs'],
  },
  {
    title: 'My to do list',
    description: 'Trello Clone Coding',
    preview: '/img/showcase/trello-clone-coding.png',
    website: 'https://mooyeon-choi.github.io/trello_clone_coding/',
    source: 'https://github.com/mooyeon-choi/trello_clone_coding',
    tags: ['javascript', 'react'],
  },



  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type Project = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  image: string;
};

export const Tags: {[type in TagType]: Tag} = {
  javascript: {
    label: 'JavaScript',
    image: 'https://icongr.am/devicon/javascript-original.svg?size=16&color=currentColor',
  },
  react: {
    label: 'React',
    image: 'https://icongr.am/devicon/react-original.svg?size=16&color=currentColor',
  },
  vuejs: {
    label: 'Vuejs',
    image: 'https://icongr.am/devicon/vuejs-original.svg?size=16&color=currentColor',
  },
  canvasTutorial: {
    label: 'Canvas-tutorial',
    image: '#e9669e',
  },
  pixi: {
    label: 'PIXI',
    image: '#39ca30'
  }
};

export const TagList = Object.keys(Tags) as TagType[];
function sortProjects() {
  let result = Projects;
  // Sort by site name
  result = sortBy(result, (project) => project.title.toLowerCase());
  return result;
}

export const sortedProjects = sortProjects();
