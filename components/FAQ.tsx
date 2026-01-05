
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Will patients know they're talking to AI?", a: "Most don't. Iris sounds natural, handles interruptions, and has real conversations. If a patient asks, Iris politely explains it's an AI assistant and can transfer to your staff if they prefer." },
    { q: "What if Iris can't answer a question?", a: "Iris seamlessly transfers complex or unusual calls to your team. You stay in control of which calls get transferred and when. It learns from these transfers to handle similar calls in the future." },
    { q: "How long does setup take?", a: "You'll be live in 3-5 days. We need one 15-minute call to learn about your practice, then we handle all the technical setup. Zero work required from your team." },
    { q: "Does it work with my practice management software?", a: "Yes. Iris integrates with all major systems including Dentrix, Eaglesoft, Open Dental, Curve, and more. If you have a calendar, Iris can sync with it." },
    { q: "What happens during emergencies?", a: "Iris identifies urgent situations using your guidelines and follows your emergency protocols—whether that's transferring immediately, taking detailed messages, or providing your after-hours emergency number." },
    { q: "Can I customize what Iris says?", a: "Absolutely. You control Iris's script, tone, and responses through an easy dashboard. Update it anytime—changes go live instantly." },
    { q: "What if my call volume is really high?", a: "Perfect. Unlike human staff, Iris handles multiple simultaneous calls. Whether you get 50 or 500 calls per month, the price stays the same." },
    { q: "Is there a contract?", a: "No long-term commitment required. Month-to-month service. Cancel anytime, though most practices see ROI within the first 30 days." },
    { q: "Is my patient data secure?", a: "Yes. Iris is fully HIPAA compliant with bank-level encryption. We undergo regular third-party security audits." }
  ];

  return (
    <section id="faq" className="pt-12 pb-24 px-6 bg-white/80 backdrop-blur-sm relative scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-emerald-950 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full" />
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/50 border border-emerald-100 rounded-2xl overflow-hidden transition-all duration-200 hover:border-emerald-200">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-emerald-50/50 transition-colors"
              >
                <span className="font-bold text-emerald-950">{faq.q}</span>
                <div className={`shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
