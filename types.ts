
export type ViewState = 'portal' | 'lab' | 'sanctuary' | 'intersection' | 'about';

export type Language = 'en' | 'zh-CN' | 'zh-TW' | 'ja' | 'de' | 'fr';

export interface GithubConfig {
  username: string;
  repo: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  highlights?: string[]; // For patents, awards, or special tags
  reflection: string;
}

export interface MediaItem {
  id: string;
  title: string;
  subtitle?: string;
  quote?: string;
  comment: string;
  type: 'movie' | 'book' | 'series' | 'podcast';
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  tags: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  link?: string;
}

export interface TranslationContent {
  tagline: string;
  subTagline: string;
  nav: {
    portal: string;
    lab: string;
    intersection: string;
    sanctuary: string;
    about: string;
  };
  portal: {
    labTitle: string;
    labDesc: string;
    labCta: string;
    sanctuaryTitle: string;
    sanctuaryDesc: string;
    sanctuaryCta: string;
    intersectionBtn: string;
  };
  lab: {
    title: string;
    subtitle: string;
    coreSystems: string;
    arsenal: string;
    searchLabTitle: string;
    searchLabDesc: string;
    searchPlaceholder: string;
    searchBtn: string;
    searching: string;
    sources: string;
    domainPrompt: string;
    impactLabel: string;
    architectureLabel: string;
    authorNoteLabel: string;
    toolkitQuote: string;
  };
  sanctuary: {
    title: string;
    subtitle: string;
    cinemaLog: string;
    readingCosmos: string;
    seriesLabel: string;
    podcastLabel: string;
    languageQuote: string;
  };
  intersection: {
    title: string;
    subtitle: string;
    readThought: string;
  };
  about: {
    title: string;
    email: string;
    linkedin: string;
    invite: string;
  };
  projects: Project[];
  movies: MediaItem[];
  books: MediaItem[];
  series: MediaItem[];
  podcasts: MediaItem[];
  blogPosts: BlogPost[];
  timeline: TimelineEvent[];
}
