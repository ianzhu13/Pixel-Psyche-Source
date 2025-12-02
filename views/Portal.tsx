import React, { useEffect, useState } from 'react';
import { ViewState } from '../types';
import { Brain, Heart, Grip } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PortalProps {
  onChangeView: (view: ViewState) => void;
}

const Portal: React.FC<PortalProps> = ({ onChangeView }) => {
  const loaded = true; // Simplified as it's just render logic
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative p-6">
      {/* Intro Text */}
      <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Main Title with Special Effects */}
        <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4 font-serif flex items-center justify-center gap-3 md:gap-4 flex-wrap">
          <span className="effect-pixel font-mono font-bold tracking-tighter">Pixel</span>
          <span className="text-slate-300 font-light">&</span>
          <span className="effect-psyche">Psyche</span>
        </h1>
        
        <div className="h-px w-24 bg-slate-800/20 mx-auto mb-6" />
        <p className="text-lg md:text-xl text-slate-600 font-light font-sans max-w-2xl mx-auto leading-relaxed">
          {t.tagline}
        </p>
        <p className="text-sm text-slate-400 mt-4 font-mono opacity-80">
          {t.subTagline}
        </p>
      </div>

      {/* The Two Doors */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl transition-all duration-1000 delay-300 transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        
        {/* The Lab (Logic) - Monochrome/Gray Theme */}
        <button 
          onClick={() => onChangeView('lab')}
          className="group relative h-64 md:h-80 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] focus:outline-none bg-white/40 shadow-sm hover:shadow-md"
        >
          {/* Light Gray gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-slate-100/50 backdrop-blur-md border border-white/60 group-hover:border-slate-400 transition-colors" />
          
          <div className="absolute inset-0 bg-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
             <span className="text-slate-600 text-sm tracking-widest uppercase mb-2 font-mono">{t.portal.labCta}</span>
          </div>
          
          <div className="relative h-full flex flex-col items-center justify-center p-8 text-center z-10">
            <Brain className="w-12 h-12 text-slate-800 mb-4 opacity-70 group-hover:scale-110 transition-transform duration-500" />
            <h2 className="text-2xl font-sans font-light text-slate-800 mb-2">{t.portal.labTitle}</h2>
            <p className="text-sm text-slate-500 font-light">{t.portal.labDesc}</p>
          </div>
        </button>

        {/* The Sanctuary (Emotion) - Rose/Amber Theme */}
        <button 
          onClick={() => onChangeView('sanctuary')}
          className="group relative h-64 md:h-80 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] focus:outline-none bg-white/40 shadow-sm hover:shadow-md"
        >
           {/* Light gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-amber-50/50 backdrop-blur-md border border-white/60 group-hover:border-rose-200 transition-colors" />
          
          <div className="absolute inset-0 bg-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
             <span className="text-rose-600 text-sm tracking-widest uppercase mb-2 font-mono">{t.portal.sanctuaryCta}</span>
          </div>

          <div className="relative h-full flex flex-col items-center justify-center p-8 text-center z-10">
            <Heart className="w-12 h-12 text-rose-500 mb-4 opacity-70 group-hover:scale-110 transition-transform duration-500" />
            <h2 className="text-3xl font-serif italic text-slate-800 mb-2">{t.portal.sanctuaryTitle}</h2>
            <p className="text-sm text-slate-500 font-light">{t.portal.sanctuaryDesc}</p>
          </div>
        </button>

      </div>

      {/* Intersection Entry */}
      <div className={`mt-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={() => onChangeView('intersection')}
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/40 hover:bg-white/70 border border-white/60 hover:border-slate-300 backdrop-blur-sm transition-all text-slate-600 hover:text-slate-900 shadow-sm"
        >
          <Grip className="w-4 h-4" />
          <span className="text-sm font-light tracking-wide">{t.portal.intersectionBtn}</span>
        </button>
      </div>

      {/* SVG Filters Definition for Psyche Effect */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter id="inkFilter">
            {/* Create turbulence (ink texture) */}
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="4" result="turbulence" />
            {/* Displace the source text based on the turbulence */}
            <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="4" xChannelSelector="R" yChannelSelector="G" />
            {/* Blur slightly to blend */}
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Portal;