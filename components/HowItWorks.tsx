
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
          <h2 className="text-5xl md:text-6xl font-serif text-slate-100 mb-6 tracking-tight">Get Started in 3 Simple Steps</h2>
          <p className="text-slate-400">No IT team needed. No complicated installation. Just results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "We Customize Olivia",
              body: "We configure Olivia with your pricing, service area, and dispatching rules. She learns your business in a single 15-minute onboarding call."
            },
            {
              step: "02",
              title: "Route Your Calls",
              body: "Simple call forwarding setup. You can have Olivia answer all calls 24/7, or just handle overflow and after-hours emergencies."
            },
            {
              step: "03",
              title: "Jobs Appear on Calendar",
              body: "Olivia qualifies leads and books jobs directly into your CRM (ServiceTitan, etc). Your techs get notified, and you get paid."
            }
          ].map((item, i) => (
            <div key={i} className="group relative p-10 bg-zinc-950 rounded-[2.5rem] border border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-500 hover:border-orange-500/30 cursor-default overflow-hidden">
              {/* Background Number */}
              <span className="absolute -top-4 -right-2 text-9xl font-serif text-orange-500/5 select-none transition-all duration-700 group-hover:text-orange-500/[0.12] group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
                {item.step}
              </span>

              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center font-bold text-lg mb-8 transition-all duration-500 group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-900/40">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-serif text-slate-100 mb-4 transition-colors duration-300 group-hover:text-orange-400">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-200">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Shortened CTA Block */}
        <div id="signup" className="mt-20 p-8 md:py-12 md:px-16 rounded-[2.5rem] bg-zinc-900 text-center text-white shadow-2xl relative overflow-hidden group scroll-mt-24 border border-zinc-800">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent opacity-50" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight tracking-tight">
              Ready to Stop Missing <span className="text-orange-500">Service Calls?</span>
            </h3>

            <p className="mb-8 text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Join the HVAC companies using Olivia to capture leads,
              fill their dispatch boards, and eliminate after-hours stress.
            </p>

            <button
              onClick={() => onNavigate('signup')}
              className="group relative px-12 py-5 bg-orange-600 hover:bg-orange-500 text-white text-lg font-bold rounded-full transition-all shadow-xl hover:shadow-orange-600/20 active:scale-95 hover:scale-105 overflow-hidden flex items-center gap-3 mx-auto"
            >
              <span className="relative z-10">
                Sign Up
              </span>
              <ArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" size={24} />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
