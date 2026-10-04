export const languages = { ko: '한국어', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];

/** Korean pages live at the root; every other language gets a `/<lang>/` prefix. */
export const defaultLang: Lang = 'ko';

export const ui = {
  ko: {
    description: 'Fred Kim의 블로그. ML, 데이터, 그리고 그 밖의 것들.',
    tagline: 'ML, 데이터, 그리고 그 밖의 것들에 대한 기록.',
    posts: '글',
    projects: '프로젝트',
    about: '소개',
    comments: '댓글',
    commentsSignIn: 'GitHub 계정으로 로그인해 댓글과 반응을 남길 수 있습니다.',
    viewDiscussions: 'GitHub에서 토론 보기',
    allPosts: '모든 글',
    noPosts: '아직 글이 없습니다.',
    projectsIntro: '데이터셋, 분석, 그리고 만들고 있는 것들.',
    noProjects: '아직 프로젝트가 없습니다.',
    allProjects: '모든 프로젝트',
    project: '프로젝트',
    relatedPosts: '관련 글',
    viewOnGithub: 'GitHub에서 보기',
    status: '상태',
    updated: '최근 업데이트',
    active: '진행 중',
    complete: '완료',
    archived: '보관됨',
    language: '언어 선택',
    theme: '밝은/어두운 테마 전환',
    notFound: '페이지를 찾을 수 없습니다.',
    home: '홈으로',
  },
  en: {
    description: "Fred Kim's blog on ML, data, and everything else.",
    tagline: 'Notes on ML, data, and everything else.',
    posts: 'Posts',
    projects: 'Projects',
    about: 'About',
    comments: 'Comments',
    commentsSignIn: 'Sign in with GitHub to leave a comment or reaction.',
    viewDiscussions: 'View discussions on GitHub',
    allPosts: 'All posts',
    noPosts: 'No posts yet.',
    projectsIntro: "Datasets, analyses, and things I'm building.",
    noProjects: 'No projects yet.',
    allProjects: 'All projects',
    project: 'Project',
    relatedPosts: 'Related posts',
    viewOnGithub: 'View on GitHub',
    status: 'Status',
    updated: 'Last updated',
    active: 'Active',
    complete: 'Complete',
    archived: 'Archived',
    language: 'Select language',
    theme: 'Toggle light/dark theme',
    notFound: 'Page not found.',
    home: 'Back home',
  },
} satisfies Record<Lang, Record<string, string>>;

/** `/about/` stays `/about/` in Korean and becomes `/en/about/` in English. */
export function localePath(lang: Lang, path = '/') {
  return lang === defaultLang ? path : `/${lang}${path}`;
}

/** `getStaticPaths` for a `[...lang]` page that exists in every language. */
export function langPaths() {
  return langs.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
    props: { lang },
  }));
}

export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
