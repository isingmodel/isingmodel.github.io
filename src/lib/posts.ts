import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

export interface Post {
  slug: string;
  lang: Lang;
  entry: CollectionEntry<'posts'>;
}

/** Published posts, newest first. Pass a language to get only that language. */
export async function getPosts(lang?: Lang): Promise<Post[]> {
  const entries = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries
    .map((entry) => {
      const [slug, entryLang] = entry.id.split('/');
      return { slug, lang: entryLang as Lang, entry };
    })
    .filter((post) => !lang || post.lang === lang)
    .sort((a, b) => b.entry.data.date.valueOf() - a.entry.data.date.valueOf());
}
