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

// Add sites to this list
// prettier-ignore
const Projects: Project[] = [
  {
    title: 'kinetic-typography-1',
    description: '',
    preview: '/img/showcase/kinetic-typography-1.png',
    website: 'https://mooyeon-choi.github.io/kinetic-typography-1/',
    source: 'https://github.com/mooyeon-choi/kinetic-typography-1',
    tags: ['javascript'],
  },
  {
    title: 'kinetic-typography-2',
    description: '',
    preview: '/img/showcase/kinetic-typography-2.png',
    website: 'https://mooyeon-choi.github.io/kinetic-typography-2/',
    source: 'https://github.com/mooyeon-choi/kinetic-typography-2',
    tags: ['javascript'],
  },
  {
    title: 'kinetic-typography-3',
    description: '',
    preview: '/img/showcase/kinetic-typography-3.png',
    website: 'https://mooyeon-choi.github.io/kinetic-typography-3/',
    source: 'https://github.com/mooyeon-choi/kinetic-typography-3',
    tags: ['javascript'],
  },
  {
    title: 'kinetic-typography-4',
    description: '',
    preview: '/img/showcase/kinetic-typography-4.png',
    website: 'https://mooyeon-choi.github.io/kinetic-typography-4/',
    source: 'https://github.com/mooyeon-choi/kinetic-typography-4',
    tags: ['javascript'],
  },
  {
    title: 'kinetic-typography-6',
    description: '',
    preview: '/img/showcase/kinetic-typography-6.png',
    website: 'https://mooyeon-choi.github.io/kinetic-typography-6/',
    source: 'https://github.com/mooyeon-choi/kinetic-typography-6',
    tags: ['javascript'],
  },
  {
    title: 'kinetic-typography-7',
    description: '',
    preview: '/img/showcase/kinetic-typography-7.png',
    website: 'https://mooyeon-choi.github.io/kinetic-typography-7/',
    source: 'https://github.com/mooyeon-choi/kinetic-typography-7',
    tags: ['javascript'],
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
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  javascript: {
    label: 'JavaScript',
    color: '#f0db4f',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortProjects() {
  let result = Projects;
  // Sort by site name
  result = sortBy(result, (project) => project.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (project) => !project.tags.includes('favorite'));
  return result;
}

export const sortedProjects = sortProjects();
