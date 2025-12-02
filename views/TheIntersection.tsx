import React from 'react';
import GlassCard from '../components/GlassCard';
import { Grip, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TheIntersection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-4xl mx-auto pb-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/40 mb-6 border border-white/60 shadow-sm">
          <Grip className="w-6 h-6 text-purple-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">{t.intersection.title}</h1>
        <p className="text-purple-800/60 text-lg font-light max-w-2xl mx-auto whitespace-pre-line">
          {t.intersection.subtitle}
        </p>
      </div>

      <div className="space-y-8">
        {t.blogPosts.map((post) => (
          <GlassCard 
            key={post.id} 
            variant="interactive" 
            className="p-8 md:p-10 group relative overflow-hidden"
          >
             {/* Decorative background gradient that appears on hover */}
             <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="relative z-10">
               <div className="flex flex-wrap gap-2 mb-4">
                 {post.tags.map(tag => (
                   <span key={tag} className="text-xs font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-2 py-1 rounded">
                     {tag}
                   </span>
                 ))}
               </div>
               
               <h2 className="text-2xl md:text-3xl font-serif text-slate-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-rose-600 transition-all">
                 {post.title}
               </h2>
               
               <p className="text-slate-600 font-light leading-relaxed mb-6">
                 {post.summary}
               </p>

               <div className="flex items-center text-sm text-slate-400 group-hover:text-slate-800 transition-colors">
                 <span className="mr-2">{t.intersection.readThought}</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </div>
             </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default TheIntersection;