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
- Add `project: <project-folder-name>` to link a post to a project. The post then points to the project, and the project lists the post.

## Write a project page

A project page presents a body of work rather than a dated article. It has a fact sheet and a lead figure, and its figures are wider than the text on large screens. It works like a post, in its own folder:

```
src/content/projects/my-project/
├── ko.md        → /projects/my-project/
├── en.md        → /en/projects/my-project/
└── charts/      (images, shared by both)
```

Each file starts with:

```yaml
---
title: "Project title"
description: "One or two sentences shown under the title and in the project list."
status: active            # active, complete, or archived
updated: 2026-08-13       # when the project or its data last changed
repo: owner/name          # optional; adds the "View on GitHub" button
cover:                    # optional; the figure that leads the page
  src: ./charts/overview.png
  alt: "What the figure shows"
facts:                    # optional; extra rows in the fact sheet
  - { label: "License", value: "Apache-2.0" }
---
```

Below that, write the page in Markdown. Each `##` heading starts a new section, and every image stretches into the right-hand margin when the screen is wide enough.

Charts and numbers are copies. When a project's data changes, update the page and its `updated` date here too.

## Where things are

| Path | What it holds |
| --- | --- |
| `src/config.ts` | Site title, links, analytics ID, comment settings |
| `src/i18n.ts` | Languages and every piece of interface text |
| `src/content/about/` | The About page, one file per language |
| `src/pages/[...lang]/` | Page templates; each one is built once per language |
| `src/content/projects/` | Project pages, one folder per project |
| `src/components/` | Header tabs, language switch, theme toggle, lattice, comments |
| `src/styles/global.css` | Colours, fonts, and post typography |

Korean is the default language and lives at the root (`/`). English lives under `/en/`.

## Comments

Comments use [giscus](https://giscus.app), which stores them in this repository's GitHub Discussions under **Announcements**. Posts and project pages have comments; both languages of a page share one thread. Visitors sign in with GitHub to comment or react, and comments follow the site's light/dark theme. Moderate them in [GitHub Discussions](https://github.com/isingmodel/isingmodel.github.io/discussions).

The repository and category IDs are configured in `src/config.ts`. Set `giscus.categoryId` to `''` to hide comments. When moving the site to another repository:

1. Enable Discussions in the repository settings.
2. Install the [giscus app](https://github.com/apps/giscus) on this repository.
3. Pick the repository and the "Announcements" category on [giscus.app](https://giscus.app), then copy `data-repo`, `data-repo-id`, `data-category`, and `data-category-id` into the corresponding `giscus` settings in `src/config.ts`.

## Crawlers

`public/robots.txt` allows every crawler, including search engines and AI bots, to access every path and points to the sitemap. Pages also explicitly permit indexing, following links, and unrestricted text/video snippets and large image previews. GitHub Pages serves the static site without an application-level bot filter.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it. This needs **Settings → Pages → Source** set to **GitHub Actions**.
