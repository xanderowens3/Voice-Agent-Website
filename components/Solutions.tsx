
import React from 'react';
import { Calendar, ShieldAlert, UserSearch } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "Never Miss Emergency Calls",
      body: "Iris identifies urgent cases and handles them according to your protocols—routing emergencies appropriately while booking routine appointments instantly.",
      icon: <ShieldAlert className="w-8 h-8" />
    },
    {
      title: "Seamless Calendar Management",
      body: "Iris syncs with your existing practice management software (Dentrix, Eaglesoft, Open Dental, and more). No double-bookings, no calendar conflicts.",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      title: "Smart Patient Screening",
      body: "Iris collects new patient information, verifies insurance, and asks pre-qualifying questions—so you only see patients who are the right fit for your practice.",
      icon: <UserSearch className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-emerald-950 mb-6 tracking-tight">How Iris Solves Your Biggest Challenges</h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <div 
              key={i} 
              className="group p-10 rounded-[2.5rem] bg-white border border-emerald-100 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:bg-emerald-600 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-200 cursor-default"
            >
              <div className="mb-6 text-emerald-600 transition-colors duration-500 group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 text-emerald-950 transition-colors duration-500 group-hover:text-white">
                {item.title}
              </h3>
              <p className="leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-emerald-50">
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
