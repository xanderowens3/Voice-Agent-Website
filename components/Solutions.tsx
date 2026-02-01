
import React from 'react';
import { Calendar, ShieldAlert, UserSearch } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "Zero Emergency Leaks",
      body: "Olivia identifies urgent 'no heat' or 'no cool' calls instantly and routes them according to your on-call schedule, while booking routine maintenance automatically.",
      icon: <ShieldAlert className="w-8 h-8" />
    },
    {
      title: "ServiceTitan Integration",
      body: "Syncs directly with ServiceTitan, Housecall Pro, and other major field service software. Jobs appear on your dispatch board without double entry.",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      title: "Intelligent Job Qualification",
      body: "Olivia asks the right questions: residential vs commercial, brand of unit, age of system—ensuring your techs arrive with the right parts and context.",
      icon: <UserSearch className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-100 mb-6 tracking-tight">How Olivia Solves Your Dispatch Nightmares</h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <div
              key={i}
              className="group p-10 rounded-[2.5rem] bg-zinc-900 border border-zinc-700 shadow-xl shadow-black/20 transition-all duration-500 hover:bg-orange-600 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-900/40 cursor-default"
            >
              <div className="mb-6 text-orange-500 transition-colors duration-500 group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 text-slate-100 transition-colors duration-500 group-hover:text-white">
                {item.title}
              </h3>
              <p className="leading-relaxed text-slate-400 transition-colors duration-500 group-hover:text-orange-50">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
