# isingmodel.github.io

Fred Kim's blog, in Korean and English. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build in dist/
npm run check    # type check
```

## Write a post

Every post is a folder with one Markdown file per language:

```
src/content/posts/my-new-post/
├── ko.md        → /posts/my-new-post/
├── en.md        → /en/posts/my-new-post/
└── figure.png   (optional, shared by both)
```

Each file starts with:

```yaml
---
title: "Post title"
description: "One sentence shown in the post list and in search results."
date: 2026-10-04
draft: false   # optional; drafts show up in `npm run dev` only
---
```

- The folder name is the URL, so keep it in lowercase English.
- Images sit next to the post and are referenced as `![alt text](./figure.png)`.
- Math is written as `$inline$` or `$$display$$` and rendered with KaTeX.
- A post with only one language file appears only in that language. On it, the language switch leads to the other language's home page.

## Where things are

| Path | What it holds |
| --- | --- |
| `src/config.ts` | Site title, links, analytics ID, comment settings |
| `src/i18n.ts` | Languages and every piece of interface text |
| `src/content/about/` | The About page, one file per language |
| `src/pages/[...lang]/` | Page templates; each one is built once per language |
| `src/components/` | Header tabs, language switch, theme toggle, lattice, comments |
| `src/styles/global.css` | Colours, fonts, and post typography |

Korean is the default language and lives at the root (`/`). English lives under `/en/`.

## Comments

Comments use [giscus](https://giscus.app), which stores them in this repository's GitHub Discussions. Both languages of a post share one thread. To turn them on:

1. Enable Discussions in the repository settings.
2. Install the [giscus app](https://github.com/apps/giscus) on this repository.
3. Pick the repository and the "Announcements" category on [giscus.app](https://giscus.app), copy the `data-category-id` value it shows, and paste it into `giscus.categoryId` in `src/config.ts`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it. This needs **Settings → Pages → Source** set to **GitHub Actions**.
