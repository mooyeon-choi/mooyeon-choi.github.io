import { posts } from './content';
export const xml = (s: string) =>
  s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
export async function feed(site: URL, atom: boolean) {
  const name = 'Mooyeon’s Log';
  const home = new URL('/blog', site).href;
  const items = await Promise.all(
    posts.map(async (post) => {
      const href = new URL(post.path, site).href;
      const date = new Date(post.date).toISOString();
      const html = await post.module.compiledContent();
      const content = xml(
        html.replace(
          /(src|href)="(\/[^"]*)"/g,
          (_, attr, path) => attr + '="' + new URL(path, site).href + '"',
        ),
      );
      const title = xml(post.title);
      return atom
        ? `<entry><title>${title}</title><link href="${href}"/><id>${href}</id><updated>${date}</updated><author><name>Mooyeon Choi</name></author><content type="html">${content}</content></entry>`
        : `<item><title>${title}</title><link>${href}</link><guid>${href}</guid><pubDate>${new Date(date).toUTCString()}</pubDate><description>${xml(post.description || post.title)}</description><content:encoded>${content}</content:encoded></item>`;
    }),
  );
  const body = atom
    ? `<feed xmlns="http://www.w3.org/2005/Atom"><title>${name}</title><id>${home}</id><link href="${home}"/><link rel="self" href="${home}/atom.xml"/><updated>${new Date(posts[0].date).toISOString()}</updated>${items.join('')}</feed>`
    : `<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/"><channel><title>${name}</title><link>${home}</link><description>Mooyeon Choi의 개발 기록</description><language>ko</language>${items.join('')}</channel></rss>`;
  return new Response('<?xml version="1.0" encoding="UTF-8"?>\n' + body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
