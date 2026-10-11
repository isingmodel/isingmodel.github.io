import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { katexPlugin } from './src/lib/katex.mjs';

export default defineConfig({
  site: 'https://isingmodel.github.io',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ko', locales: { ko: 'ko-KR', en: 'en-US' } },
    }),
  ],
  markdown: {
    processor: satteri({
      features: { math: true },
      mdastPlugins: [katexPlugin],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
  redirects: {
    // This post's URL on the old Jekyll site.
    '/posts/sublime-text와-pyenv-연동하기': '/posts/sublime-text-pyenv/',
    // The release-timing essay was originally published as a project page.
    '/projects/ai-model-release-timing/': '/posts/ai-model-release-timing/',
    '/en/projects/ai-model-release-timing/': '/en/posts/ai-model-release-timing/',
  },
});
