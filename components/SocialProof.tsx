
import React from 'react';
import { Quote, TrendingUp } from 'lucide-react';

const SocialProof: React.FC = () => {
  const sources = [
    {
      source: "McKinsey & Company",
      quote: "AI receptionists slash support costs by up to 30% and reduce response times by 90%, according to McKinsey's analysis.",
      impact: "Save thousands monthly on staffing while answering patient calls 90% faster."
    },
    {
      source: "Gartner Research",
      quote: "Gartner forecasts that agentic AI will autonomously resolve 80% of common service issues by 2029, freeing humans for complex tasks.",
      impact: "Free your staff for high-value patient care while Iris handles routine scheduling."
    },
    {
      source: "Forbes",
      quote: "Forbes highlights how AI voice agents provide constant responsiveness, ensuring no inquiries go unanswered—preventing customer loss.",
      impact: "Every potential patient gets immediate attention, 24/7, preventing revenue leakage."
    }
  ];

  return (
    <section className="pt-24 pb-12 px-6 bg-slate-50/50 border-y border-emerald-100/50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-600 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.3em] text-emerald-600 mb-4">
            Research & Insights
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-emerald-950 tracking-tight">
            Trusted by Industry Leaders
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sources.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white p-8 rounded-[2.5rem] border border-emerald-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Quote Icon Decoration */}
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100 transition-transform duration-500 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                <Quote size={18} fill="currentColor" className="opacity-20" />
              </div>

              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full mb-4 group-hover:bg-emerald-100 transition-colors">
                  {item.source}
                </span>
                <p className="text-emerald-950 font-medium leading-relaxed italic text-sm md:text-base">
                  {item.quote}
                </p>
              </div>

              {/* Highlighted Practice Impact Section */}
              <div className="mt-auto">
                <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100 transition-all duration-500 group-hover:bg-emerald-600 group-hover:border-emerald-500">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-emerald-600 transition-transform group-hover:scale-110 group-hover:rotate-12">
                      <TrendingUp size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em] mb-1 group-hover:text-emerald-50 transition-colors">
                        Practice Impact
                      </p>
                      <p className="text-emerald-900 text-[13px] font-semibold leading-relaxed group-hover:text-white transition-colors">
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
