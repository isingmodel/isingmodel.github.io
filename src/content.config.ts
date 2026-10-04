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

export const collections = { posts, about };
