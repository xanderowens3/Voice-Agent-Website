
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: 'home' | 'signup') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center">
      {/* Badge Reveal */}
      <div className="mb-6 px-4 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/20 animate-bounce-subtle">
        The Future of HVAC Dispatching
      </div>

      <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-8xl font-serif text-slate-100 leading-[1.1] mb-8 animate-fade-in-up">
        Never Miss Another <span className="text-orange-500">Service Call Again</span>
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed mb-10 animate-fade-in-up-delay">
        Olivia is your AI voice agent that answers every call, qualifies leads, and books jobs directly into ServiceTitan—24/7. Stop losing business to unanswered calls.
      </p>

      <div className="flex flex-col items-center mb-16 animate-fade-in-up-delay-2">
        <button
          onClick={() => onNavigate('signup')}
          className="relative group px-10 py-5 bg-orange-600 text-white rounded-full text-lg font-bold shadow-2xl shadow-orange-900/20 overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
        >
          <span className="relative z-10">Start Your Free Pilot</span>
          <ArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" size={24} />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 animate-border-beam rounded-full pointer-events-none" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-left animate-fade-in-up-delay-3">
        {[
          {
            title: "Zero Missed Calls",
            desc: "Captures every lead, even during heatwaves",
            icon: <CheckCircle2 className="text-orange-500" />
          },
          {
            title: "Instant Dispatch",
            desc: "Books straight to your calendar",
            icon: <CheckCircle2 className="text-orange-500" />
          },
          {
            title: "24/7 Season Coverage",
            desc: "Handles after-hours & overflow automatically",
            icon: <CheckCircle2 className="text-orange-500" />
          }
        ].map((metric, i) => (
          <div key={i} className="group flex gap-4 p-6 bg-zinc-900 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-orange-500/30 hover:bg-zinc-800 transition-all duration-300 cursor-default">
            <div className="mt-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
              {metric.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-200 mb-1 transition-colors duration-300 group-hover:text-orange-400">
                {metric.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed transition-colors duration-300 group-hover:text-slate-300">
                {metric.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-up-delay { animation: fade-in-up 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-fade-in-up-delay-2 { animation: fade-in-up 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-in-up-delay-3 { animation: fade-in-up 0.8s ease-out 0.6s forwards; opacity: 0; }
        .animate-bounce-subtle { animation: bounce 3s infinite; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
