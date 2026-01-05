
import React from 'react';
import { Clock, Zap, Layers, BarChart, MessageSquare, ShieldCheck } from 'lucide-react';

const Benefits: React.FC = () => {
  // Store the component reference itself rather than an instantiated JSX element
  // to avoid issues with cloning and improve type safety.
  const benefits = [
    {
      title: "Works Around the Clock",
      desc: "Your practice never closes. Iris books appointments at midnight, on weekends, and holidays—capturing patients when they're actually thinking about dental care.",
      icon: Clock
    },
    {
      title: "No Training Required",
      desc: "Iris works out-of-the-box. We customize it to your practice in one setup call, and it's ready to start taking calls the same day.",
      icon: Zap
    },
    {
      title: "Integrates Seamlessly",
      desc: "Iris plugs directly into your existing calendar and practice management system. Nothing to replace, nothing to learn.",
      icon: Layers
    },
    {
      title: "Grows With Your Practice",
      desc: "Handle 10 calls or 1,000 calls per day at the same cost. Scale without hiring as your practice expands.",
      icon: BarChart
    },
    {
      title: "Natural Conversations",
      desc: "Patients won’t feel like they're talking to AI. Iris understands accents, interruptions, and natural speech patterns.",
      icon: MessageSquare
    },
    {
      title: "HIPAA Compliant",
      desc: "Your patient data is protected with bank-level encryption. Iris is fully HIPAA compliant and passes regular security audits.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 px-6 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-emerald-950 mb-6 tracking-tight">
            Why Iris is Suited For Dental Practices
          </h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            // Assigning to a capitalized variable for direct JSX usage
            const Icon = benefit.icon;
            return (
              <div key={i} className="group p-8 bg-white rounded-3xl border border-emerald-100/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-emerald-200">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {/* Render the icon component directly with the size prop */}
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
