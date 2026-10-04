import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../../config';
import { langPaths, localePath, ui, type Lang } from '../../i18n';
import { getPosts } from '../../lib/posts';

export const getStaticPaths = langPaths;

export async function GET(context: APIContext) {
  const lang = context.props.lang as Lang;
  const posts = await getPosts(lang);
  return rss({
    title: site.title,
    description: ui[lang].description,
    site: context.site!,
    customData: `<language>${lang}</language>`,
    items: posts.map(({ slug, entry }) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: localePath(lang, `/posts/${slug}/`),
    })),
  });
}
