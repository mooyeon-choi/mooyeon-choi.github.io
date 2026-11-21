import { records, posts, tagsByPath, tagged, indexedPaths } from './content';
import { works, games, experiments, experimentId } from './projects';

export const routes = [
  ...records.map((r) => r.path),
  '/writing',
  '/docs',
  '/projects',
  '/showcase',
  '/about',
  '/aboutMe',
  '/blog/archive',
  '/blog/authors',
  '/blog/tags',
  '/markdown-page',
  ...indexedPaths('/blog', posts.length),
  ...Array.from(tagsByPath, ([path, tag]) =>
    indexedPaths(path, tagged(tag).length),
  ).flat(),
  ...Object.keys(works).map((id) => '/projects/' + id),
  ...Object.keys(games).map((id) => '/projects/meari/' + id),
  ...experiments.map((project) => '/projects/' + experimentId(project.title)),
];
