import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { TOOLKIT } from '../constants';
import { Cpu, Activity, Award, Search, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../hooks/useContent';
import { Project } from '../types';
import { GoogleGenAI } from "@google/genai";

const TheLab: React.FC = () => {
  const { t } = useLanguage();
  const { data: projects, loading } = useContent<Project>('projects');
  
  // AI Experiment State
  const [prompt, setPrompt] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [sources, setSources] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!prompt.trim()) return;
    
    setIsSearching(true);
    setAiResponse(null);
    setSources([]);

    try {
      // In Vite config we polyfilled process.env.API_KEY
      const apiKey = process.env.API_KEY;
      
      if (!apiKey) {
        setAiResponse("Error: API_KEY is not set. Please add API_KEY to your environment variables.");
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      // Handle potential undefined text response safely
      setAiResponse(response.text || "No text response generated.");
      
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (groundingChunks) {
        setSources(groundingChunks);
      }

    } catch (error) {
      console.error("AI Search Error:", error);
      setAiResponse("An error occurred while connecting to the neural network. Please check console.");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto pb-20">
      <header className="mb-16 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-sans font-thin text-slate-900 mb-4">{t.lab.title}</h1>
        <p className="text-slate-500 font-mono text-sm md:text-base max-w-2xl whitespace-pre-line">
          {t.lab.subtitle}
        </p>
      </header>

      <div className="space-y-16">
        
        {/* AI Concept Lab Section */}
        <section>
          <div className="flex items-center gap-2 mb-8 text-slate-400 uppercase tracking-widest text-xs font-bold">
            <Search className="w-4 h-4" />
            <span>{t.lab.searchLabTitle}</span>
          </div>
          
          <GlassCard className="p-8 border-t-4 border-t-slate-800">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">{t.lab.searchLabTitle}</h3>
            <p className="text-slate-500 font-light mb-6 text-sm">{t.lab.searchLabDesc}</p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input 
                type="text" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={t.lab.searchPlaceholder}
                className="flex-grow px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-slate-400 focus:outline-none text-slate-700 placeholder-slate-400 transition-colors"
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button 
                onClick={handleSearch}
                disabled={isSearching}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                {isSearching ? t.lab.searching : t.lab.searchBtn}
              </button>
            </div>

            {/* Quick Prompts */}
            <div className="mb-6">
               <button 
                 onClick={() => setPrompt(t.lab.domainPrompt)}
                 className="text-xs text-slate-400 hover:text-slate-600 underline decoration-dotted underline-offset-4"
               >
                 Try: "{t.lab.domainPrompt}"
               </button>
            </div>

            {/* AI Response Area */}
            {aiResponse && (
              <div className="mt-8 pt-8 border-t border-slate-200/50 animate-in fade-in slide-in-from-bottom-2">
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                   {/* Simple rendering of markdown-like text */}
                   {aiResponse.split('\n').map((line, i) => (
                     <p key={i} className="mb-2 min-h-[1em]">{line}</p>
                   ))}
                </div>
                
                {sources.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t.lab.sources}</h4>
                    <div className="flex flex-wrap gap-2">
                      {sources.map((source, idx) => {
                         if (source.web) {
                           return (
                             <a key={idx} href={source.web.uri} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded transition-colors truncate max-w-[200px]">
                               {source.web.title}
                             </a>
                           );
                         }
                         return null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </GlassCard>
        </section>

        {/* Projects Section */}
        <section>
          <div className="flex items-center gap-2 mb-8 text-slate-400 uppercase tracking-widest text-xs font-bold">
            <Activity className="w-4 h-4" />
            <span>{t.lab.coreSystems}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {loading ? (
              <div className="col-span-2 text-center py-20 text-slate-400">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
                <p>Loading Projects...</p>
              </div>
            ) : (
              projects.map((project) => (
                <GlassCard key={project.id} variant="heavy" className="p-8 flex flex-col h-full border-t-4 border-t-slate-800">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold text-slate-800">{project.title}</h3>
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="flex flex-col gap-1 items-end">
                        {project.highlights.map((highlight, idx) => (
                          <span key={idx} className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider border border-slate-300">
                            <Award className="w-3 h-3" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="text-slate-600 font-light mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">{t.lab.impactLabel}</h4>
                    <p className="text-sm text-slate-600 italic">"{project.impact}"</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{t.lab.architectureLabel}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-200">
                     <p className="text-sm text-slate-500 font-light">
                       <span className="text-slate-800/60 mr-2">{t.lab.authorNoteLabel}</span> 
                       {project.reflection}
                     </p>
                  </div>
                </GlassCard>
              ))
            )}
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
                <div key={tool} className="group relative px-6 py-3 rounded-lg bg-white/40 hover:bg-white/80 border border-slate-200 hover:border-slate-400 transition-all cursor-default">
                  <span className="text-slate-600 group-hover:text-slate-900 font-mono transition-colors">{tool}</span>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-transparent group-hover:border-slate-600 transition-all" />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center border-t border-slate-200 pt-8">
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