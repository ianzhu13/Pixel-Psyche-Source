
import React from 'react';
import GlassCard from '../components/GlassCard';
import { Film, BookOpen, Feather, Tv, Headphones } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TheSanctuary: React.FC = () => {
  const { t } = useLanguage();

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
            {t.movies.map(movie => (
              <div key={movie.id} className="relative group">
                <GlassCard variant="interactive" className="p-8 h-full flex flex-col bg-gradient-to-b from-white/60 to-white/20">
                   <h3 className="text-xl font-serif text-slate-900 mb-1">{movie.title}</h3>
                   <div className="w-8 h-0.5 bg-rose-300/50 mb-6" />
                   
                   <blockquote className="mb-6 pl-4 border-l-2 border-slate-300 italic text-slate-600 font-serif text-lg">
                     "{movie.quote}"
                   </blockquote>
                   
                   <p className="text-sm text-slate-500 font-sans leading-relaxed mt-auto">
                     {movie.comment}
                   </p>
                </GlassCard>
              </div>
            ))}
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
            {t.books.map(book => (
              <div key={book.id} className="relative group">
                <GlassCard variant="interactive" className="p-8 h-full flex flex-col bg-gradient-to-b from-white/60 to-white/20">
                   <div className="flex justify-between items-baseline mb-2">
                     <h3 className="text-xl font-serif text-slate-900">{book.title}</h3>
                     <span className="text-xs text-slate-400 uppercase tracking-widest">{book.subtitle}</span>
                   </div>
                   <div className="w-8 h-0.5 bg-amber-300/50 mb-6" />
                   
                   <blockquote className="mb-6 pl-4 border-l-2 border-amber-300/50 italic text-slate-600 font-serif text-lg">
                     "{book.quote}"
                   </blockquote>
                   
                   <p className="text-sm text-slate-500 font-sans leading-relaxed mt-auto">
                     {book.comment}
                   </p>
                </GlassCard>
              </div>
            ))}
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
                {t.series.map(series => (
                  <GlassCard key={series.id} variant="interactive" className="p-6 bg-white/40">
                     <h3 className="text-lg font-serif text-slate-900 mb-2">{series.title}</h3>
                     <p className="text-sm text-slate-500 italic mb-2">"{series.quote}"</p>
                     <p className="text-xs text-slate-400 font-sans">{series.comment}</p>
                  </GlassCard>
                ))}
             </div>
          </section>

          {/* Podcasts */}
          <section>
             <div className="flex items-center gap-3 mb-8 text-slate-400 uppercase tracking-widest text-xs font-bold">
               <Headphones className="w-4 h-4" />
               <span>{t.sanctuary.podcastLabel}</span>
             </div>
             <div className="space-y-6">
                {t.podcasts.map(podcast => (
                  <GlassCard key={podcast.id} variant="interactive" className="p-6 bg-white/40">
                     <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-lg font-serif text-slate-900">{podcast.title}</h3>
                        {podcast.subtitle && <span className="text-xs text-slate-400">{podcast.subtitle}</span>}
                     </div>
                     <p className="text-sm text-slate-500 italic mb-2">"{podcast.quote}"</p>
                     <p className="text-xs text-slate-400 font-sans">{podcast.comment}</p>
                  </GlassCard>
                ))}
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
