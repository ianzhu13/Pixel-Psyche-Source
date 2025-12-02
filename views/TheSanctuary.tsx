
import React from 'react';
import GlassCard from '../components/GlassCard';
import { Film, BookOpen, Feather, Tv, Headphones, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../hooks/useContent';
import { MediaItem } from '../types';
import SpecialTitle from '../components/SpecialTitle';

const TheSanctuary: React.FC = () => {
  const { t } = useLanguage();
  
  // Use hooks for dynamic content, falling back to translation file if needed
  const { data: movies } = useContent<MediaItem>('movies');
  const { data: books } = useContent<MediaItem>('books');
  const { data: series } = useContent<MediaItem>('series');
  const { data: podcasts } = useContent<MediaItem>('podcasts');

  const renderMediaCard = (item: MediaItem, accentColor: 'rose' | 'amber' | 'slate', Icon?: any) => {
    // Determine gradient based on accent
    const gradients = {
      rose: "from-white/60 to-rose-50/30",
      amber: "from-white/60 to-amber-50/30",
      slate: "from-white/60 to-slate-50/30",
    };

    const borderColors = {
      rose: "border-rose-300/50",
      amber: "border-amber-300/50",
      slate: "border-slate-300/50",
    };

    const CardContent = (
      <GlassCard variant="interactive" className={`p-8 h-full flex flex-col bg-gradient-to-b ${gradients[accentColor]} relative group`}>
          {item.link && (
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </div>
          )}

          <div className="flex justify-between items-baseline mb-2">
            {/* Use SpecialTitle for Movies and Series */}
            {item.type === 'movie' || item.type === 'series' ? (
               <SpecialTitle title={item.title} className="text-xl mb-1" />
            ) : (
               <h3 className="text-xl font-serif text-slate-900 mb-1">{item.title}</h3>
            )}
            
            {item.subtitle && <span className="text-xs text-slate-400 uppercase tracking-widest ml-2">{item.subtitle}</span>}
          </div>
          
          <div className={`w-8 h-0.5 bg-${accentColor}-300/50 mb-6`} />
          
          <blockquote className={`mb-6 pl-4 border-l-2 ${borderColors[accentColor]} italic text-slate-600 font-serif text-lg leading-relaxed`}>
            "{item.quote}"
          </blockquote>
          
          <p className="text-sm text-slate-500 font-sans leading-relaxed mt-auto">
            {item.comment}
          </p>
      </GlassCard>
    );

    if (item.link) {
      return (
        <a 
          key={item.id} 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block h-full"
        >
          {CardContent}
        </a>
      );
    }

    return <div key={item.id} className="h-full">{CardContent}</div>;
  };

  return (
    <div className="w-full max-w-5xl mx-auto pb-20">
      <header className="mb-16 text-center md:text-right">
        <h1 className="text-4xl md:text-6xl font-serif italic text-slate-800 mb-4">{t.sanctuary.title}</h1>
        <p className="text-rose-800/60 font-sans font-light text-sm md:text-base max-w-2xl ml-auto whitespace-pre-line">
          {t.sanctuary.subtitle}
        </p>
      </header>

      <div className="space-y-20">
        
        {/* Cinema Log */}
        <section>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
            <Film className="w-5 h-5 text-rose-400" />
            <h2 className="text-2xl font-serif text-slate-800">{t.sanctuary.cinemaLog}</h2>
            <div className="h-px bg-slate-200 flex-grow ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {movies.map(movie => renderMediaCard(movie, 'rose'))}
          </div>
        </section>

        {/* Reading Cosmos */}
        <section>
          <div className="flex items-center justify-center md:justify-end gap-3 mb-10">
            <div className="h-px bg-slate-200 flex-grow mr-4" />
            <h2 className="text-2xl font-serif text-slate-800">{t.sanctuary.readingCosmos}</h2>
            <BookOpen className="w-5 h-5 text-amber-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {books.map(book => renderMediaCard(book, 'amber'))}
          </div>
        </section>

        {/* Series & Podcasts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Series */}
          <section>
             <div className="flex items-center gap-3 mb-8 text-slate-400 uppercase tracking-widest text-xs font-bold">
               <Tv className="w-4 h-4" />
               <span>{t.sanctuary.seriesLabel}</span>
             </div>
             <div className="space-y-6">
                {series.map(item => renderMediaCard(item, 'slate'))}
             </div>
          </section>

          {/* Podcasts */}
          <section>
             <div className="flex items-center gap-3 mb-8 text-slate-400 uppercase tracking-widest text-xs font-bold">
               <Headphones className="w-4 h-4" />
               <span>{t.sanctuary.podcastLabel}</span>
             </div>
             <div className="space-y-6">
                {podcasts.map(item => renderMediaCard(item, 'slate'))}
             </div>
          </section>
        </div>

        {/* Language/Misc */}
        <section className="text-center pt-8">
          <div className="inline-block">
            <GlassCard className="px-8 py-6 flex items-center gap-4 bg-white/40">
              <Feather className="w-5 h-5 text-slate-400" />
              <p className="text-slate-600 font-serif italic">
                {t.sanctuary.languageQuote}
              </p>
            </GlassCard>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TheSanctuary;
