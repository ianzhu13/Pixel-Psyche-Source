import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Portal from './views/Portal';
import TheLab from './views/TheLab';
import TheSanctuary from './views/TheSanctuary';
import TheIntersection from './views/TheIntersection';
import About from './views/About';
import { ViewState } from './types';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('portal');

  // Reset scroll when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'portal':
        return <Portal onChangeView={setCurrentView} />;
      case 'lab':
        return <TheLab />;
      case 'sanctuary':
        return <TheSanctuary />;
      case 'intersection':
        return <TheIntersection />;
      case 'about':
        return <About />;
      default:
        return <Portal onChangeView={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;