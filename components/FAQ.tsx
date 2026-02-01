
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Will customers know they're talking to AI?", a: "Most won't. Olivia sounds natural, understands HVAC terminology (like 'furnace', 'capacitor', 'freon'), and handles interruptions. If asked, she politely confirms she's an automated assistant." },
    { q: "What happens during a heatwave?", a: "Olivia scales instantly. Whether you get 5 calls or 500 calls a day during a heatwave, she answers every single one immediately. No busy signals, no hold times." },
    { q: "Does it integrate with ServiceTitan?", a: "Yes. Olivia integrates with ServiceTitan, Housecall Pro, FieldEdge, and others. She books jobs directly into your dispatch board based on your live availability." },
    { q: "How does she handle emergencies?", a: "You define the rules. Olivia can patch urgent 'no heat/no cool' calls directly to your on-call technician's cell phone, while booking routine maintenance calls on the calendar." },
    { q: "Can I customize the script?", a: "Absolutely. You can change how Olivia greets customers, what pricing she quotes for diagnostic fees, and how she qualifies leads—updates happen instantly." },
    { q: "What if the caller has a complex issue?", a: "If Olivia can't handle a request (like a complex warranty dispute), she takes a detailed message and flags it as 'Needs Attention' on your dashboard, or transfers it to your office." },
    { q: "Is there a contract?", a: "No. Month-to-month. We know HVAC is seasonal, so we don't lock you into long-term contracts. Pause or cancel anytime." },
    { q: "How fast is setup?", a: "We can have you live in 24 hours. We just need your pricing, service area, and scheduling preferences." }
  ];

  return (
    <section id="faq" className="pt-12 pb-24 px-6 bg-zinc-950/80 backdrop-blur-sm relative scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-100 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-200 hover:border-orange-500/30">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="font-bold text-slate-200">{faq.q}</span>
                <div className={`shrink-0 transition-transform duration-300 text-orange-500 ${openIndex === i ? 'rotate-180' : ''}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-400 leading-relaxed text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
