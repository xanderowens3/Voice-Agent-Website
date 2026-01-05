
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SignUpPage from './components/SignUpPage';
import AnimatedBackground from './components/ui/AnimatedBackground';

export type ViewType = 'home' | 'signup';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (target: ViewType) => {
    setView(target);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-emerald-200 selection:text-emerald-900">
      <AnimatedBackground />
      <Navbar onNavigate={handleNavigate} currentView={view} />
      <main>
        {view === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <Comparison />
            <Solutions />
            <Benefits />
            <HowItWorks onNavigate={handleNavigate} />
            <SocialProof />
            <FAQ />
          </>
        ) : (
          <SignUpPage onNavigate={handleNavigate} />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
