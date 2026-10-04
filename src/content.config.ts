import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every entry is stored once per language: `<name>/ko.md` and `<name>/en.md`.
const withoutExtension = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '');

const posts = defineCollection({
  loader: glob({
    pattern: '*/{ko,en}.md',
    base: './src/content/posts',
    generateId: withoutExtension, // `<slug>/<lang>`
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    /** Folder name of the project this post belongs to, if any. */
    project: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: '*/{ko,en}.md',
    base: './src/content/projects',
    generateId: withoutExtension, // `<slug>/<lang>`
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      status: z.enum(['active', 'complete', 'archived']),
      /** When the project (or its data) last changed. */
      updated: z.coerce.date(),
      /** GitHub repository as `owner/name`. */
      repo: z.string().optional(),
      /** The figure that leads the page and represents the project in the list. */
      cover: z.object({ src: image(), alt: z.string() }).optional(),
      /** Extra rows for the fact sheet. */
      facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      draft: z.boolean().default(false),
    }),
});

const about = defineCollection({
  loader: glob({
    pattern: '{ko,en}.md',
    base: './src/content/about',
    generateId: withoutExtension, // `<lang>`
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { posts, projects, about };
