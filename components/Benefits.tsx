
import React from 'react';
import { Clock, Zap, Layers, BarChart, MessageSquare, ShieldCheck } from 'lucide-react';

const Benefits: React.FC = () => {
  // Store the component reference itself rather than an instantiated JSX element
  // to avoid issues with cloning and improve type safety.
  const benefits = [
    {
      title: "Dominates Seasonal Peaks",
      desc: "AC repair search volume jumps 266% in summer. Olivia handles unlimited simultaneous calls so you miss nothing during the busiest weeks of the year.",
      icon: Clock
    },
    {
      title: "Pre-Trained for HVAC",
      desc: "Olivia knows the difference between a capacitor and a compressor. Setup takes 15 minutes and she sounds like a 10-year veteran dispatcher.",
      icon: Zap
    },
    {
      title: "Syncs with ServiceTitan",
      desc: "Integrates directly with ServiceTitan, Housecall Pro, and FieldEdge. Jobs appear on your dispatch board instantly.",
      icon: Layers
    },
    {
      title: "Fraction of Staffing Costs",
      desc: "A full-time receptionist costs $41k/year. Olivia costs a fraction of that, never takes sick days, and works weekends and holidays.",
      icon: BarChart
    },
    {
      title: "Handles Angry Customers",
      desc: "Olivia is trained to de-escalate frustrated homeowners with broken ACs, booking the emergency appointment while keeping cool.",
      icon: MessageSquare
    },
    {
      title: "Emergency Triaging",
      desc: "Distinguishes between a 'no cool' emergency and a routine tune-up, escalating urgent calls to your on-call tech immediately.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-100 mb-6 tracking-tight">
            Why Top HVAC Owners Choose Olivia
          </h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            // Assigning to a capitalized variable for direct JSX usage
            const Icon = benefit.icon;
            return (
              <div key={i} className="group p-8 bg-zinc-950 rounded-3xl border border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-orange-500/30">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  {/* Render the icon component directly with the size prop */}
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
