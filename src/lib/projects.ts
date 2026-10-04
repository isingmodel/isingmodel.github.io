import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

export interface Project {
  slug: string;
  lang: Lang;
  entry: CollectionEntry<'projects'>;
}

/** Published projects, most recently updated first. Pass a language to get only that language. */
export async function getProjects(lang?: Lang): Promise<Project[]> {
  const entries = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries
    .map((entry) => {
      const [slug, entryLang] = entry.id.split('/');
      return { slug, lang: entryLang as Lang, entry };
    })
    .filter((project) => !lang || project.lang === lang)
    .sort((a, b) => b.entry.data.updated.valueOf() - a.entry.data.updated.valueOf());
}
