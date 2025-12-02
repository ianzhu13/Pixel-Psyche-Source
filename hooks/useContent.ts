
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchContentFromGithub } from '../services/githubService';
import { GITHUB_CONFIG } from '../constants';

type ContentType = 'projects' | 'movies' | 'books' | 'series' | 'podcasts' | 'blogPosts';

export function useContent<T>(type: ContentType) {
  const { t } = useLanguage();
  const [data, setData] = useState<T[]>(t[type] as unknown as T[]);
  const [loading, setLoading] = useState(false);
  const [isDynamic, setIsDynamic] = useState(false);

  useEffect(() => {
    // If config is missing, just use local translation data (which updates when language changes)
    if (!GITHUB_CONFIG.username || !GITHUB_CONFIG.repo) {
      setData(t[type] as unknown as T[]);
      return;
    }

    // Map content type to GitHub Issue Label
    const labelMap: Record<ContentType, string> = {
      projects: 'project',
      movies: 'movie',
      books: 'book',
      series: 'series',
      podcasts: 'podcast',
      blogPosts: 'blog'
    };

    const loadData = async () => {
      setLoading(true);
      const githubData = await fetchContentFromGithub(labelMap[type]);
      
      if (githubData.length > 0) {
        setData(githubData);
        setIsDynamic(true);
      } else {
        // Fallback to local if no issues found or error
        setData(t[type] as unknown as T[]);
      }
      setLoading(false);
    };

    loadData();
  }, [type, t, GITHUB_CONFIG.username, GITHUB_CONFIG.repo]);

  return { data, loading, isDynamic };
}
