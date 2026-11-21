import type { MarkdownInstance } from 'astro';
import kebabCase from 'lodash.kebabcase';

type Frontmatter = {
  title?: string;
  slug?: string;
  date?: string | Date;
  tags?: string[];
  description?: string;
  image?: string;
};
const files = import.meta.glob<MarkdownInstance<Frontmatter>>(
  ['/blog/*.md', '/docs/**/*.md'],
  { eager: true },
);
const groupNames: Record<string, string> = {
  'app/flutter': 'Flutter',
  'web/basic': 'HTML과 CSS',
  'web/network': '네트워크',
  'web/frontend': '프론트엔드',
  languages: '프로그래밍 언어',
  preparation: '개발 준비',
  web: '웹',
};
export const records = Object.entries(files).map(([source, module]) => {
  const fm = module.frontmatter;
  const post = source.startsWith('/blog/');
  const id = source.replace(/^\/(blog|docs)\//, '').replace(/\.md$/, '');
  const headings = module.getHeadings();
  const declared =
    fm.date instanceof Date
      ? fm.date.toISOString()
      : String(fm.date || id.slice(0, 10));
  // Earlier posts used UTC timestamps without a zone in their frontmatter.
  const date = post
    ? new Date(
        /^\d{4}-\d\d-\d\dT[\d:.]+$/.test(declared) ? declared + 'Z' : declared,
      ).toISOString()
    : '';
  const title =
    fm.title ||
    headings.find((h) => h.depth === 1)?.text ||
    id.split('/').at(-1)!;
  const path = post
    ? '/blog/' + (fm.slug || id.replace(/^\d{4}-\d\d-\d\d-/, ''))
    : '/docs/' + id;
  const category =
    Object.entries(groupNames).find(([prefix]) =>
      id.startsWith(prefix + '/'),
    )?.[1] || '기본 도구';
  return {
    path,
    title,
    post,
    date,
    day: post ? declared.slice(0, 10) : '',
    category,
    description: fm.description || '',
    image: fm.image,
    tags: fm.tags || [],
    headings,
    module,
  };
});
export type RecordEntry = (typeof records)[number];
export const posts = records
  .filter((r) => r.post)
  .sort((a, b) => b.date.localeCompare(a.date) || a.path.localeCompare(b.path));
export const notes = records
  .filter((r) => !r.post)
  .sort((a, b) => a.path.localeCompare(b.path));
export const noteGroups = [...new Set(notes.map((r) => r.category))];
export const tagPath = (tag: string) => '/blog/tags/' + kebabCase(tag);
export const tags = [...new Set(posts.flatMap((post) => post.tags))].sort(
  (a, b) => a.localeCompare(b, 'ko'),
);
export const tagsByPath = new Map(tags.map((tag) => [tagPath(tag), tag]));
export const tagged = (tag: string) =>
  posts.filter((post) => post.tags.some((t) => tagPath(t) === tagPath(tag)));
export const pageSize = 10;
export function indexedPaths(base: string, count: number) {
  return Array.from(
    { length: Math.max(1, Math.ceil(count / pageSize)) },
    (_, i) => (i ? base + '/page/' + (i + 1) : base),
  );
}
