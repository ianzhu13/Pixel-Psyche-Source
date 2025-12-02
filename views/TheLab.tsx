
import React from 'react';
import GlassCard from '../components/GlassCard';
import { TOOLKIT } from '../constants';
import { Cpu, Activity, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TheLab: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-6xl mx-auto pb-20">
      <header className="mb-16 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-sans font-thin text-slate-800 mb-4">{t.lab.title}</h1>
        <p className="text-cyan-700/70 font-mono text-sm md:text-base max-w-2xl whitespace-pre-line">
          {t.lab.subtitle}
        </p>
      </header>

      <div className="space-y-16">
        {/* Projects Section */}
        <section>
          <div className="flex items-center gap-2 mb-8 text-slate-400 uppercase tracking-widest text-xs font-bold">
            <Activity className="w-4 h-4" />
            <span>{t.lab.coreSystems}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.projects.map((project) => (
              <GlassCard key={project.id} variant="heavy" className="p-8 flex flex-col h-full border-t-4 border-t-cyan-500/50">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-semibold text-slate-800">{project.title}</h3>
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="flex flex-col gap-1 items-end">
                      {project.highlights.map((highlight, idx) => (
                        <span key={idx} className="flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wider border border-amber-200/50">
                          <Award className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-slate-600 font-light mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6 bg-slate-50/80 p-4 rounded-lg border border-slate-200/50">
                  <h4 className="text-xs font-bold text-cyan-700 uppercase tracking-wider mb-2">{t.lab.impactLabel}</h4>
                  <p className="text-sm text-slate-600 italic">"{project.impact}"</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{t.lab.architectureLabel}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-200/50">
                   <p className="text-sm text-slate-500 font-light">
                     <span className="text-slate-800/60 mr-2">{t.lab.authorNoteLabel}</span> 
                     {project.reflection}
                   </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Toolkit Section */}
        <section>
          <div className="flex items-center gap-2 mb-8 text-slate-400 uppercase tracking-widest text-xs font-bold">
            <Cpu className="w-4 h-4" />
            <span>{t.lab.arsenal}</span>
          </div>
          
          <GlassCard className="p-8 md:p-12">
            <div className="flex flex-wrap justify-center gap-4">
              {TOOLKIT.map((tool) => (
                <div key={tool} className="group relative px-6 py-3 rounded-lg bg-white/40 hover:bg-white/80 border border-slate-200 hover:border-cyan-300 transition-all cursor-default">
                  <span className="text-slate-600 group-hover:text-cyan-800 font-mono transition-colors">{tool}</span>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-500/0 group-hover:border-cyan-500/50 transition-all" />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center border-t border-slate-200/50 pt-8">
              <p className="text-sm text-slate-400 font-light max-w-xl mx-auto">
                {t.lab.toolkitQuote}
              </p>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
};

export default TheLab;
