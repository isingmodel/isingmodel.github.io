import katex from 'katex';

const render = (value, displayMode) => ({
  type: 'html',
  value: katex.renderToString(value, { displayMode, throwOnError: false }),
});

/** Sätteri plugin: renders `$...$` and `$$...$$` to KaTeX HTML at build time. */
export const katexPlugin = {
  name: 'katex',
  math(node, ctx) {
    ctx.replaceNode(node, render(node.value, true));
  },
  inlineMath(node, ctx) {
    ctx.replaceNode(node, render(node.value, false));
  },
};
