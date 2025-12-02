import React from 'react';
import GlassCard from '../components/GlassCard';
import { Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-3xl mx-auto pb-20">
       <h1 className="text-4xl font-serif text-slate-800 mb-12 text-center">{t.about.title}</h1>

       {/* Timeline */}
       <div className="relative border-l border-slate-200 ml-4 md:ml-10 space-y-12 mb-20">
         {t.timeline.map((event, index) => (
           <div key={index} className="relative pl-8 md:pl-12">
             {/* Dot */}
             <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-50 border border-slate-400 shadow-[0_0_10px_rgba(0,0,0,0.1)]" />
             
             <div className="mb-1">
               <span className="text-sm font-mono text-cyan-700/80">{event.year}</span>
             </div>
             <h3 className="text-xl font-sans text-slate-800 mb-2">{event.title}</h3>
             <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
               {event.description}
             </p>
           </div>
         ))}
       </div>

       {/* Contact Card */}
       <GlassCard className="p-8 md:p-12 text-center bg-gradient-to-b from-white/60 to-white/10">
         {/* Note: Using grayscale image with light opacity overlay */}
         <div className="relative mb-8 rounded-lg overflow-hidden h-48">
            <img 
            src="https://picsum.photos/800/400?grayscale" 
            alt="Atmospheric" 
            className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-white/20 pointer-events-none" />
         </div>
         
         <p className="text-xl font-serif italic text-slate-800 mb-8">
           {t.about.invite}
         </p>

         <div className="flex flex-col md:flex-row justify-center gap-6">
           <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 hover:bg-white text-slate-700 hover:text-slate-900 shadow-sm transition-all">
             <Mail className="w-4 h-4" />
             <span>{t.about.email}</span>
           </a>
           <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 hover:bg-white text-slate-700 hover:text-slate-900 shadow-sm transition-all">
             <Linkedin className="w-4 h-4" />
             <span>{t.about.linkedin}</span>
           </a>
         </div>
       </GlassCard>
    </div>
  );
};

export default About;