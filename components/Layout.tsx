import React, { useState, useEffect, useRef } from 'react';
import { ViewState, Language } from '../types';
import Background from './Background';
import { Home, User, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LayoutProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, onChangeView, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  
  const { language, setLanguage, t } = useLanguage();

  // Close mobile menu on view change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentView]);

  // Close language menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langMenuRef]);

  // Simple Nav Item Component
  const NavItem = ({ view, label, icon: Icon }: { view: ViewState; label: string; icon?: any }) => (
    <button
      onClick={() => onChangeView(view)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
        currentView === view 
          ? 'bg-white text-slate-900 shadow-md' 
          : 'text-slate-500 hover:text-slate-900 hover:bg-white/40'
      }`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span className="text-sm font-medium tracking-wide">{label}</span>
    </button>
  );

  const isPortal = currentView === 'portal';

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'ja', label: '日本語' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' },
  ];

  return (
    <div className="min-h-screen text-slate-800 relative selection:bg-cyan-200/50">
      <Background view={currentView} />

      {/* Navigation - Hidden on Portal unless strictly needed, but let's keep lang switcher accessible */}
      <nav className={`fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center transition-all duration-500 ${isPortal ? 'bg-transparent' : ''}`}>
        {/* Logo / Home Trigger */}
        {!isPortal ? (
          <button 
            onClick={() => onChangeView('portal')} 
            className="text-xl font-serif font-bold tracking-tighter text-slate-800 hover:opacity-70 transition-opacity z-50"
          >
            P&P
          </button>
        ) : <div />} {/* Spacer if portal */}

        {/* Desktop Nav */}
        {!isPortal && (
          <div className="hidden md:flex items-center gap-2 bg-white/40 backdrop-blur-xl p-1.5 rounded-full border border-white/40 shadow-sm absolute left-1/2 transform -translate-x-1/2">
            <NavItem view="lab" label={t.nav.lab} />
            <div className="w-px h-4 bg-slate-400/20 mx-1" />
            <NavItem view="intersection" label={t.nav.intersection} />
            <div className="w-px h-4 bg-slate-400/20 mx-1" />
            <NavItem view="sanctuary" label={t.nav.sanctuary} />
          </div>
        )}

        {/* Right Side / About & Lang */}
        <div className="flex items-center gap-3 z-50">
           {/* Language Switcher */}
           <div className="relative" ref={langMenuRef}>
             <button 
               onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
               className={`p-2 rounded-full transition-all border border-transparent ${isLangMenuOpen ? 'bg-white text-slate-900 shadow-sm' : 'bg-white/30 text-slate-600 hover:bg-white/50 hover:text-slate-900'}`}
             >
               <Globe className="w-5 h-5" />
             </button>
             
             {isLangMenuOpen && (
               <div className="absolute right-0 mt-2 w-40 bg-white/90 backdrop-blur-xl border border-white/60 rounded-xl shadow-lg overflow-hidden py-2 animate-in fade-in zoom-in-95 duration-200">
                 {languages.map((lang) => (
                   <button
                     key={lang.code}
                     onClick={() => {
                       setLanguage(lang.code);
                       setIsLangMenuOpen(false);
                     }}
                     className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                       language === lang.code 
                         ? 'bg-slate-100 text-slate-900 font-medium' 
                         : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                     }`}
                   >
                     {lang.label}
                   </button>
                 ))}
               </div>
             )}
           </div>

           {!isPortal && (
             <div className="hidden md:block">
                <button 
                  onClick={() => onChangeView('about')}
                  className={`p-2 rounded-full transition-all border border-transparent ${currentView === 'about' ? 'bg-white text-slate-900 shadow-sm' : 'bg-white/30 text-slate-600 hover:bg-white/50 hover:text-slate-900'}`}
                >
                  <User className="w-5 h-5" />
                </button>
             </div>
           )}

           {/* Mobile Menu Toggle */}
           {!isPortal && (
             <button 
               className="md:hidden p-2 bg-white/40 rounded-full backdrop-blur-md text-slate-800"
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
           )}
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && !isPortal && (
          <div className="fixed inset-0 z-40 bg-gray-50/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
            <NavItem view="portal" label={t.nav.portal} icon={Home} />
            <NavItem view="lab" label={t.nav.lab} />
            <NavItem view="intersection" label={t.nav.intersection} />
            <NavItem view="sanctuary" label={t.nav.sanctuary} />
            <NavItem view="about" label={t.nav.about} icon={User} />
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className={`relative z-10 min-h-screen transition-all duration-500 ${!isPortal ? 'pt-32 px-6' : ''}`}>
        <div className={`transition-opacity duration-500 ${currentView ? 'opacity-100' : 'opacity-0'}`}>
           {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;