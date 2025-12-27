import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Carousel } from './components/Carousel';
import { GridMenu } from './components/GridMenu';
import { BottomNav } from './components/BottomNav';
import { KYCModal } from './components/KYCModal';
import { MetaverseView } from './components/MetaverseView';
import { MirageView } from './components/MirageView';

const App: React.FC = () => {
  const [showKYC, setShowKYC] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'metaverse' | 'mirage'>('home');
  const [metaverseMode, setMetaverseMode] = useState<'default' | 'dashboard'>('default');

  useEffect(() => {
    // Check if user has completed KYC (using localStorage for persistence simulation)
    const hasCompletedKYC = localStorage.getItem('lb_kyc_completed');
    if (!hasCompletedKYC) {
      // Small delay to let the app load visually first
      const timer = setTimeout(() => setShowKYC(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleKYCComplete = () => {
    localStorage.setItem('lb_kyc_completed', 'true');
    setShowKYC(false);
  };

  const handleNavigate = (path: string) => {
    if (path === '/metaverse') {
      setMetaverseMode('default');
      setCurrentView('metaverse');
    } else if (path === '/dashboard') {
      setMetaverseMode('dashboard');
      setCurrentView('metaverse');
    } else if (path === '/cases') {
      setCurrentView('mirage');
    } else if (path === '/kyc') {
      setShowKYC(true);
    } else {
      console.log(`Navigating to ${path}`);
      // In a real app, this would use a router
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-200 p-4 lg:p-8 font-sans">
      
      {/* Phone Container Simulator (9:16 Aspect Ratio on Desktop) */}
      <div className="relative w-full max-w-[390px] h-[844px] bg-[#efefef] rounded-[40px] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] overflow-hidden flex flex-col border-[8px] border-white transition-colors duration-500">
        
        {/* Subtle Micro-grid background texture for Home */}
        {currentView === 'home' && (
          <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-60 z-0"></div>
        )}

        {/* Conditional Rendering of Views */}
        {currentView === 'metaverse' ? (
          <MetaverseView 
            onBack={() => setCurrentView('home')} 
            initialMode={metaverseMode}
          />
        ) : currentView === 'mirage' ? (
          <MirageView onBack={() => setCurrentView('home')} />
        ) : (
          /* Home View Content */
          <>
            <div className="relative z-10 h-full flex flex-col overflow-y-auto no-scrollbar pb-24">
              <Header />
              
              <main className="flex-1 flex flex-col">
                <Carousel />
                <GridMenu onNavigate={handleNavigate} />
              </main>
            </div>

            {/* Bottom Navigation (Fixed relative to phone container) */}
            <BottomNav />

            {/* iOS Home Indicator */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400/50 rounded-full z-[60]"></div>
          </>
        )}
        
        {/* KYC Modal Overlay (Can appear on top of either view if triggered) */}
        {showKYC && <KYCModal onComplete={handleKYCComplete} />}

      </div>

    </div>
  );
};

export default App;