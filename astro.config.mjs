import { defineConfig, passthroughImageService } from 'astro/config';
import { visit } from 'unist-util-visit';

function namedHeadings() {
  return (tree) =>
    visit(tree, 'heading', (node) => {
      const last = node.children.at(-1);
      const match =
        last?.type === 'text' && last.value.match(/\s*\{#([\w-]+)\}$/u);
      if (!match) return;
      last.value = last.value.slice(0, match.index);
      node.data = { ...node.data, hProperties: { id: match[1] } };
    });
}

const annotatedCode = {
  name: 'article-code-annotations',
  preprocess(code) {
    if (!code.includes('// highlight-')) return;
    const lines = [];
    const highlights = new Set();
    let range = false;
    let next = false;
    for (const line of code.split('\n')) {
      const directive = /^\s*\/\/ highlight-(start|end|next-line)\s*$/.exec(
        line,
      )?.[1];
      if (directive === 'next-line') next = true;
      else if (directive) range = directive === 'start';
      else {
        lines.push(line);
        if (range || next) highlights.add(lines.length);
        next = false;
      }
    }
    this.meta.highlights = highlights;
    return lines.join('\n');
  },
  line(node, number) {
    if (this.meta.highlights?.has(number))
      this.addClassToHast(node, 'highlighted');
  },
  root(node) {
    const title = /\btitle="([^"]+)"/.exec(this.options.meta?.__raw || '')?.[1];
    if (title) {
      node.children = [
        {
          type: 'element',
          tagName: 'figure',
          properties: { className: ['code-example'] },
          children: [
            {
              type: 'element',
              tagName: 'figcaption',
              properties: {},
              children: [{ type: 'text', value: title }],
            },
            ...node.children,
          ],
        },
      ];
    }
  },
};

export default defineConfig({
  site: 'https://mooyeon.com',
  publicDir: './static',
  outDir: './build',
  build: { format: 'file' },
  image: { service: passthroughImageService() },
  experimental: { headingIdCompat: true },
  markdown: {
    smartypants: false,
    remarkPlugins: [namedHeadings],
    shikiConfig: { theme: 'github-dark', transformers: [annotatedCode] },
  },
});
