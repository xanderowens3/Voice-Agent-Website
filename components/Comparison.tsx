
import React from 'react';
import { XCircle, CheckCircle, TrendingDown, TrendingUp } from 'lucide-react';

const Comparison: React.FC = () => {
  const comparisonData = [
    {
      old: "Missed Calls = Lost Revenue (~$900/job)",
      new: "Zero Missed Calls, 24/7/365 availability"
    },
    {
      old: "Scheduling Errors & Double Bookings",
      new: "Direct Integration with ServiceTitan"
    },
    {
      old: "Losing Leads to Competitors",
      new: "Instant Pickup & Job Booking"
    },
    {
      old: "Overhead of $40k/yr per Receptionist",
      new: "Fraction of the Cost of One Employee"
    },
    {
      old: "Overwhelmed During Heatwaves",
      new: "Unlimited Capacity for Seasonal Spikes"
    }
  ];

  return (
    <section id="the-difference" className="py-24 px-6 bg-zinc-900/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-100 mb-4 tracking-tight">The Old Way vs. The Olivia Way</h2>
          <p className="text-slate-400 max-w-2xl mx-auto italic text-lg">Manual dispatching is costing you jobs every single day.</p>
        </div>

        {/* Desktop View: Two Separate Solid White Blocks */}
        <div className="hidden lg:grid grid-cols-2 gap-x-12 items-stretch">

          {/* Old Way Block */}
          <div className="bg-zinc-950 rounded-[3rem] border border-red-900/30 shadow-2xl shadow-red-900/5 overflow-hidden flex flex-col border-t-8 border-t-red-700 transition-transform hover:-translate-y-1 duration-500">
            <div className="pt-12 px-12 pb-6 bg-zinc-950">
              <div className="flex items-center gap-5 mb-4">
                <div className="w-14 h-14 bg-red-900/20 rounded-2xl flex items-center justify-center text-red-500 shrink-0 shadow-inner">
                  <TrendingDown size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-red-400">The Old Way</h3>
                  <p className="text-xs text-red-600/70 font-black uppercase tracking-[0.2em]">Bleeding Revenue</p>
                </div>
              </div>
              <div className="h-px bg-red-900/20 w-full mt-6" />
            </div>

            <div className="flex-1 px-12 pb-12 space-y-8 mt-4">
              {comparisonData.map((item, i) => (
                <div key={i} className="flex gap-4 items-center group cursor-default">
                  <XCircle className="shrink-0 text-red-900/50 transition-all duration-300 group-hover:text-red-500 group-hover:scale-125" size={24} />
                  <h4 className="text-xl font-bold text-slate-500 leading-tight group-hover:text-red-400 transition-colors duration-300">
                    {item.old}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* New Way Block */}
          <div className="bg-zinc-950 rounded-[3rem] border border-orange-900/30 shadow-2xl shadow-orange-900/5 overflow-hidden flex flex-col border-t-8 border-t-orange-500 transition-transform hover:-translate-y-1 duration-500">
            <div className="pt-12 px-12 pb-6 bg-zinc-950">
              <div className="flex items-center gap-5 mb-4">
                <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-900/20 shrink-0">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-orange-400">The Olivia Way</h3>
                  <p className="text-xs text-orange-600 font-black uppercase tracking-[0.2em]">Growth on Autopilot</p>
                </div>
              </div>
              <div className="h-px bg-orange-900/20 w-full mt-6" />
            </div>

            <div className="flex-1 px-12 pb-12 space-y-8 mt-4">
              {comparisonData.map((item, i) => (
                <div key={i} className="flex gap-4 items-center group cursor-default">
                  <CheckCircle className="shrink-0 text-orange-500 transition-all duration-300 group-hover:scale-125 group-hover:text-orange-400" size={24} />
                  <h4 className="text-xl font-bold text-slate-200 leading-tight group-hover:text-orange-400 transition-colors duration-300">
                    {item.new}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-8">
          {/* Old Way Block Mobile */}
          <div className="bg-zinc-950 rounded-[2.5rem] border border-red-900/30 shadow-xl p-8 border-t-8 border-t-red-700">
            <div className="flex items-center gap-4 mb-8">
              <TrendingDown className="text-red-500" size={24} />
              <div>
                <h3 className="text-xl font-serif text-red-400">The Old Way</h3>
                <p className="text-[10px] text-red-600/70 font-black uppercase tracking-widest mt-1">Missing Revenue</p>
              </div>
            </div>
            <div className="space-y-6">
              {comparisonData.map((item, i) => (
                <div key={i} className="flex gap-3 items-start group">
                  <XCircle className="shrink-0 text-red-900/50 mt-1 transition-transform group-active:scale-125 group-active:text-red-500" size={20} />
                  <h4 className="text-lg font-bold text-slate-500 leading-snug">{item.old}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* New Way Block Mobile */}
          <div className="bg-zinc-950 rounded-[2.5rem] border border-orange-900/30 shadow-xl p-8 border-t-8 border-t-orange-500">
            <div className="flex items-center gap-4 mb-8">
              <TrendingUp className="text-orange-500" size={24} />
              <div>
                <h3 className="text-xl font-serif text-orange-400">The Olivia Way</h3>
                <p className="text-[10px] text-orange-600 font-black uppercase tracking-widest mt-1">Growth on Autopilot</p>
              </div>
            </div>
            <div className="space-y-6">
              {comparisonData.map((item, i) => (
                <div key={i} className="flex gap-3 items-start group">
                  <CheckCircle className="shrink-0 text-orange-500 mt-1 transition-transform group-active:scale-125" size={20} />
                  <h4 className="text-lg font-bold text-slate-200 leading-snug">{item.new}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
