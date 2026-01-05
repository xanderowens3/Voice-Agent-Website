
import React from 'react';
import { XCircle, CheckCircle, TrendingDown, TrendingUp } from 'lucide-react';

const Comparison: React.FC = () => {
  const comparisonData = [
    {
      old: "Missed Calls During Lunch & After Hours",
      new: "24/7/365 Availability"
    },
    {
      old: "Overwhelmed Staff During Peak Times",
      new: "Instant Answers, Zero Wait Times"
    },
    {
      old: "Lost Patients to Slow Response Times",
      new: "Lightning-Fast Real-Time Booking"
    },
    {
      old: "Expensive Staffing Costs ($35k+/yr)",
      new: "Fraction of the Cost of One Employee"
    },
    {
      old: "Inconsistent Patient Booking Experience",
      new: "Perfectly Trained, Every Single Time"
    }
  ];

  return (
    <section id="the-difference" className="py-24 px-6 bg-slate-100/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-emerald-950 mb-4 tracking-tight">The Old Way vs. The Iris Way</h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic text-lg">Traditional phone systems leave money on the table every single day.</p>
        </div>

        {/* Desktop View: Two Separate Solid White Blocks */}
        <div className="hidden lg:grid grid-cols-2 gap-x-12 items-stretch">
          
          {/* Old Way Block */}
          <div className="bg-white rounded-[3rem] border border-red-100 shadow-2xl shadow-red-900/5 overflow-hidden flex flex-col border-t-8 border-t-red-500 transition-transform hover:-translate-y-1 duration-500">
            <div className="pt-12 px-12 pb-6 bg-white">
              <div className="flex items-center gap-5 mb-4">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 shrink-0 shadow-inner">
                  <TrendingDown size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-red-950">The Old Way</h3>
                  <p className="text-xs text-red-500 font-black uppercase tracking-[0.2em]">Missing Revenue</p>
                </div>
              </div>
              <div className="h-px bg-red-50 w-full mt-6" />
            </div>

            <div className="flex-1 px-12 pb-12 space-y-8 mt-4">
              {comparisonData.map((item, i) => (
                <div key={i} className="flex gap-4 items-center group cursor-default">
                  <XCircle className="shrink-0 text-red-300 transition-all duration-300 group-hover:text-red-500 group-hover:scale-125" size={24} />
                  <h4 className="text-xl font-bold text-slate-700 leading-tight group-hover:text-red-950 transition-colors duration-300">
                    {item.old}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* New Way Block */}
          <div className="bg-white rounded-[3rem] border border-emerald-100 shadow-2xl shadow-emerald-900/10 overflow-hidden flex flex-col border-t-8 border-t-emerald-500 transition-transform hover:-translate-y-1 duration-500">
            <div className="pt-12 px-12 pb-6 bg-white">
              <div className="flex items-center gap-5 mb-4">
                <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-200 shrink-0">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-emerald-950">The Iris Way</h3>
                  <p className="text-xs text-emerald-600 font-black uppercase tracking-[0.2em]">Always-On Revenue</p>
                </div>
              </div>
              <div className="h-px bg-emerald-50 w-full mt-6" />
            </div>

            <div className="flex-1 px-12 pb-12 space-y-8 mt-4">
              {comparisonData.map((item, i) => (
                <div key={i} className="flex gap-4 items-center group cursor-default">
                  <CheckCircle className="shrink-0 text-emerald-500 transition-all duration-300 group-hover:scale-125 group-hover:text-emerald-600" size={24} />
                  <h4 className="text-xl font-bold text-emerald-950 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
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
          <div className="bg-white rounded-[2.5rem] border border-red-100 shadow-xl p-8 border-t-8 border-t-red-500">
             <div className="flex items-center gap-4 mb-8">
                <TrendingDown className="text-red-500" size={24} />
                <div>
                  <h3 className="text-xl font-serif text-red-950">The Old Way</h3>
                  <p className="text-[10px] text-red-400 font-black uppercase tracking-widest mt-1">Missing Revenue</p>
                </div>
             </div>
             <div className="space-y-6">
                {comparisonData.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start group">
                    <XCircle className="shrink-0 text-red-300 mt-1 transition-transform group-active:scale-125 group-active:text-red-500" size={20} />
                    <h4 className="text-lg font-bold text-slate-800 leading-snug">{item.old}</h4>
                  </div>
                ))}
             </div>
          </div>

          {/* New Way Block Mobile */}
          <div className="bg-white rounded-[2.5rem] border border-emerald-100 shadow-xl p-8 border-t-8 border-t-emerald-500">
             <div className="flex items-center gap-4 mb-8">
                <TrendingUp className="text-emerald-600" size={24} />
                <div>
                  <h3 className="text-xl font-serif text-emerald-950">The Iris Way</h3>
                  <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest mt-1">Always-On Revenue</p>
                </div>
             </div>
             <div className="space-y-6">
                {comparisonData.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start group">
                    <CheckCircle className="shrink-0 text-emerald-500 mt-1 transition-transform group-active:scale-125" size={20} />
                    <h4 className="text-lg font-bold text-emerald-950 leading-snug">{item.new}</h4>
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
