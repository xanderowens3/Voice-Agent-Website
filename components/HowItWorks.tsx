
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onNavigate: (view: 'home' | 'signup') => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  return (
    <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-emerald-950 mb-6 tracking-tight">Get Started in 3 Simple Steps</h2>
          <p className="text-slate-600">No IT team needed. No complicated installation. Just results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "15-Minute Setup Call",
              body: "Tell us about your practice, services, and how you want calls handled. We configure Iris to sound like your perfect front desk staff."
            },
            {
              step: "02",
              title: "We Connect Iris to Your Phone",
              body: "We handle all the technical setup—usually done in under 24 hours. Iris integrates with your current phone system and practice software."
            },
            {
              step: "03",
              title: "Start Booking Patients",
              body: "That's it. Iris immediately starts answering calls and booking appointments. You can adjust settings anytime from a simple dashboard."
            }
          ].map((item, i) => (
            <div key={i} className="group relative p-10 bg-white rounded-[2.5rem] border border-emerald-100/50 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 hover:border-emerald-200 cursor-default overflow-hidden">
              {/* Background Number */}
              <span className="absolute -top-4 -right-2 text-9xl font-serif text-emerald-600/5 select-none transition-all duration-700 group-hover:text-emerald-600/[0.12] group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
                {item.step}
              </span>
              
              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-lg mb-8 transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-200">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-serif text-emerald-950 mb-4 transition-colors duration-300 group-hover:text-emerald-800">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-slate-900">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Shortened CTA Block */}
        <div id="signup" className="mt-20 p-8 md:py-12 md:px-16 rounded-[2.5rem] bg-emerald-900 text-center text-white shadow-2xl relative overflow-hidden group scroll-mt-24">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-800/40 via-transparent to-transparent opacity-50" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight tracking-tight">
              Ready to Stop Missing <span className="text-emerald-400">Patients?</span>
            </h3>
            
            <p className="mb-8 text-base md:text-lg text-emerald-100/80 max-w-xl mx-auto leading-relaxed">
              Become one of the dental practices using Iris to capture leads, 
              book more appointments, and save staff hours every single week.
            </p>

            <button 
              onClick={() => onNavigate('signup')}
              className="group relative px-12 py-5 bg-emerald-500 hover:bg-emerald-400 text-white text-lg font-bold rounded-full transition-all shadow-xl hover:shadow-emerald-500/50 active:scale-95 hover:scale-105 overflow-hidden flex items-center gap-3 mx-auto"
            >
              <span className="relative z-10">
                Sign Up
              </span>
              <ArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" size={24} />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
