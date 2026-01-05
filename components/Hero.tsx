
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: 'home' | 'signup') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center">
      {/* Badge Reveal */}
      <div className="mb-6 px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider animate-bounce-subtle">
        The Future of Dental Reception
      </div>

      <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-8xl font-serif text-emerald-950 leading-[1.1] mb-8 animate-fade-in-up">
        Never Miss Another <span className="text-emerald-600">Patient Call</span> Again
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed mb-10 animate-fade-in-up-delay">
        Iris is your AI receptionist that answers every call, books appointments instantly, and works 24/7—so you can focus on dentistry, not phone management.
      </p>

      <div className="flex flex-col items-center mb-16 animate-fade-in-up-delay-2">
        <button
          onClick={() => onNavigate('signup')}
          className="relative group px-10 py-5 bg-emerald-600 text-white rounded-full text-lg font-bold shadow-2xl shadow-emerald-200 overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
        >
          <span className="relative z-10">Sign-Up Now</span>
          <ArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" size={24} />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 animate-border-beam rounded-full pointer-events-none" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-left animate-fade-in-up-delay-3">
        {[
          {
            title: "98% booking accuracy",
            desc: "As reliable as your best front desk staff",
            icon: <CheckCircle2 className="text-emerald-600" />
          },
          {
            title: "Handles simultaneous calls",
            desc: "No more busy signals or hold times",
            icon: <CheckCircle2 className="text-emerald-600" />
          },
          {
            title: "Answers in under 3 seconds",
            desc: "No more hold music or voicemail",
            icon: <CheckCircle2 className="text-emerald-600" />
          }
        ].map((metric, i) => (
          <div key={i} className="group flex gap-4 p-6 bg-white rounded-2xl border border-emerald-100/50 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 cursor-default">
            <div className="mt-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
              {metric.icon}
            </div>
            <div>
              <h3 className="font-bold text-emerald-900 mb-1 transition-colors duration-300 group-hover:text-emerald-950">
                {metric.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed transition-colors duration-300 group-hover:text-slate-900">
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
