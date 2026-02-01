
import React from 'react';
import { PhoneCall } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'signup') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800 transition-all duration-300">
      <div
        className="flex items-center gap-2 group cursor-pointer"
        onClick={() => onNavigate('home')}
      >
        <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <PhoneCall size={20} />
        </div>
        <span className="text-2xl font-bold tracking-tight text-white font-serif transition-colors duration-300 group-hover:text-orange-400">
          Olivia AI
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
        {[
          { name: 'Home', id: 'home' },
          { name: 'The Difference', id: 'the-difference' },
          { name: 'How It Works', id: 'how-it-works' },
          { name: 'FAQ', id: 'faq' }
        ].map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => scrollToSection(e, link.id)}
            className="relative py-2 hover:text-orange-500 transition-colors group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <button
        onClick={() => onNavigate('signup')}
        className="px-6 py-2.5 bg-orange-600 text-white rounded-full text-sm font-bold hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-900/20 transition-all active:scale-95 hover:scale-105"
      >
        Sign-Up
      </button>
    </nav>
  );
};

export default Navbar;
