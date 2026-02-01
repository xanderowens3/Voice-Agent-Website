
import React from 'react';
import { PhoneCall } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'signup') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  return (
    <footer className="bg-zinc-950/80 backdrop-blur-md border-t border-zinc-800 pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Left Side */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 group cursor-pointer w-fit" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <PhoneCall size={20} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white font-serif transition-colors duration-300 group-hover:text-orange-400">
              Olivia AI
            </span>
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Your 24/7 HVAC Dispatcher. Elevating customer experiences and service efficiency through intelligent voice technology.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap gap-x-16 gap-y-8 md:justify-end">
          <div className="space-y-4">
            <h4 className="font-bold text-slate-100 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {[
                { name: 'Home', id: 'home' },
                { name: 'The Difference', id: 'the-difference' },
                { name: 'How It Works', id: 'how-it-works' },
                { name: 'FAQ', id: 'faq' }
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-zinc-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
        <p>© 2025 Olivia AI. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
