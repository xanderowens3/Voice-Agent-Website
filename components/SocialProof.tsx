
import React from 'react';
import { Quote, TrendingUp } from 'lucide-react';

const SocialProof: React.FC = () => {
  const sources = [
    {
      source: "HVAC Business Data",
      quote: "One missed service call is worth ~$900 in revenue. 85% of callers who hit voicemail never call back—they just call the next competitor.",
      impact: "Stop handing leads to competitors. Olivia captures every single opportunity, 24/7."
    },
    {
      source: "Industry Analysis",
      quote: "HVAC demand surges 266% in summer and 594% in winter. Most offices are overwhelmed, leaving 62% of inbound calls unanswered during peaks.",
      impact: "Scale instantly for heatwaves and blizzards without hiring temp staff."
    },
    {
      source: "Service Efficiency Stats",
      quote: "Manual scheduling errors cost $100–$500 per booking and leave technicians idle for 20-30% of their day due to inefficient routing.",
      impact: "Fill your dispatch board with qualified jobs, not tire-kickers or spam."
    }
  ];

  return (
    <section className="pt-24 pb-12 px-6 bg-zinc-900/40 border-y border-zinc-800 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.05] overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-600 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.3em] text-orange-500 mb-4">
            Research & Insights
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-slate-100 tracking-tight">
            Trusted by Industry Leaders
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sources.map((item, i) => (
            <div
              key={i}
              className="group relative bg-zinc-950 p-8 rounded-[2.5rem] border border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Quote Icon Decoration */}
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-600 shadow-sm border border-orange-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white">
                <Quote size={18} fill="currentColor" className="opacity-50" />
              </div>

              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-4 group-hover:bg-orange-500/20 transition-colors">
                  {item.source}
                </span>
                <p className="text-slate-200 font-medium leading-relaxed italic text-sm md:text-base">
                  {item.quote}
                </p>
              </div>

              {/* Highlighted Practice Impact Section */}
              <div className="mt-auto">
                <div className="p-5 bg-zinc-900 rounded-2xl border border-zinc-800 transition-all duration-500 group-hover:bg-orange-600 group-hover:border-orange-500">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center shadow-sm text-orange-600 transition-transform group-hover:scale-110 group-hover:rotate-12 group-hover:bg-white">
                      <TrendingUp size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] mb-1 group-hover:text-orange-50 transition-colors">
                        Business Impact
                      </p>
                      <p className="text-slate-200 text-[13px] font-semibold leading-relaxed group-hover:text-white transition-colors">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
