
import React, { useState } from 'react';
import { ArrowLeft, Globe, MessageSquare, Zap, Send, ArrowRight, Check, CheckCircle2, Sparkles, Home } from 'lucide-react';

interface SignUpPageProps {
  onNavigate: (view: 'home' | 'signup') => void;
}

const BenefitItem = ({ icon: Icon, title, desc, isLast }: { icon: any, title: string, desc: string, isLast?: boolean }) => (
  <div className={`flex gap-5 group items-start p-6 -ml-6 rounded-[2rem] transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 cursor-default ${isLast ? 'mb-0' : ''}`}>
    <div className="shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-100 text-emerald-600 group-hover:text-emerald-900">
      <Icon size={20} className="transition-colors duration-300" />
    </div>
    <div>
      <h3 className="font-bold text-emerald-950 text-lg mb-1 transition-colors duration-300 group-hover:text-emerald-800">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed max-w-sm transition-colors duration-300 group-hover:text-slate-700">
        {desc}
      </p>
    </div>
  </div>
);

const InputGroup = ({ label, value, onChange, placeholder, type = "text" }: { label: string, value: string, onChange: (v: string) => void, placeholder: string, type?: string }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-200/60 ml-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-emerald-950/40 border border-white/10 rounded-xl py-3 px-5 text-white placeholder:text-emerald-800 focus:outline-none focus:border-emerald-400/50 transition-colors text-sm"
    />
  </div>
);

const OptionCard = ({ label, selected, onClick }: { label: string, selected: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`group w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-4 ${selected
        ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg'
        : 'bg-emerald-950/40 border-white/10 text-emerald-100/70 hover:border-emerald-400/50'
      }`}
  >
    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${selected ? 'bg-white border-white text-emerald-600' : 'border-white/20 bg-emerald-950/60'
      }`}>
      {selected && <Check size={12} strokeWidth={4} />}
    </div>
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const SignUpPage: React.FC<SignUpPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    practiceName: '',
    website: '',
    ltv: '',
    newPatients: '',
    currentSolution: '',
    biggestChallenge: '',
    challengeOther: '',
    practiceType: '',
    typeOther: '',
    timeline: '',
    finalGoal: ''
  });

  const ltvOptions = ["Less than £1,000", "£1,000 – £5,000", "£5,000 – £15,000", "£15,000 – £50,000", "£50,000+"];
  const patientOptions = ["0-10 new patients", "10-25 new patients", "25-50 new patients", "50-100 new patients", "100+ new patients"];
  const solutionOptions = ["No, we handle all calls in-house", "Yes, answering service ($200-$500/month)", "Yes, answering service ($500-$1,000/month)", "Yes, answering service ($1,000+/month)", "Yes, voicemail/basic after-hours system"];
  const challengeOptions = ["Missed calls during lunch/after-hours", "Staff too busy to answer during peak times", "Inconsistent booking experience", "High staffing costs or turnover", "Other"];
  const typeOptions = ["General/Family Dentistry", "Cosmetic Dentistry", "Orthodontics", "Pediatric Dentistry", "Multi-specialty Practice", "Other"];
  const timelineOptions = ["Immediately (within 2 weeks)", "Within 1-2 months", "Within 3-6 months", "Just exploring options for now"];

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return !!(formData.firstName && formData.lastName && formData.email && formData.practiceName && formData.website);
      case 2: return !!formData.ltv;
      case 3: return !!formData.newPatients;
      case 4: return !!formData.currentSolution;
      case 5: return formData.biggestChallenge === 'Other' ? !!formData.challengeOther : !!formData.biggestChallenge;
      case 6: return formData.practiceType === 'Other' ? !!formData.typeOther : !!formData.practiceType;
      case 7: return !!formData.timeline;
      case 8: return !!formData.finalGoal;
      default: return false;
    }
  };

  const handleNext = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (step < 8) {
      setStep(step + 1);
    } else {
      // Submit form data to webhook
      try {
        const webhookUrl = 'https://hook.eu2.make.com/2rwqaiv27lxnu71na199jcmsjwhcupwb';

        // Prepare the data to send
        const submissionData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          practiceName: formData.practiceName,
          website: formData.website,
          lifetimeValue: formData.ltv,
          newPatientsPerMonth: formData.newPatients,
          currentSolution: formData.currentSolution,
          biggestChallenge: formData.biggestChallenge === 'Other' ? formData.challengeOther : formData.biggestChallenge,
          practiceType: formData.practiceType === 'Other' ? formData.typeOther : formData.practiceType,
          implementationTimeline: formData.timeline,
          idealOutcome: formData.finalGoal,
          submittedAt: new Date().toISOString()
        };

        // Send to webhook
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });

        // Show success message regardless of webhook response
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error submitting to webhook:', error);
        // Still show success to user even if webhook fails
        setIsSubmitted(true);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onNavigate('home');
    }
  };

  const renderSuccessBlock = () => {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center animate-step-in py-2">
        <div className="relative mb-4">
          <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 relative z-10 animate-[bounce_2s_infinite]">
            <CheckCircle2 size={28} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="absolute top-0 right-0 animate-ping">
            <Sparkles className="text-emerald-300" size={14} />
          </div>
          <div className="absolute -inset-4 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />
        </div>

        <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-1">Success!</h2>

        <div className="max-w-md space-y-1 mb-6">
          <p className="text-emerald-100 text-base leading-relaxed font-serif italic">
            Your request for early access has been received.
          </p>
          <p className="text-emerald-100/60 text-sm leading-relaxed">
            We will be in touch with you very soon!
          </p>
        </div>

        <button
          onClick={() => onNavigate('home')}
          className="group relative px-6 py-3 bg-white text-emerald-950 rounded-xl text-sm font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Home size={16} /> Return to Homepage
          </span>
          <div className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    );
  };

  const renderFormContent = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleNext} className="flex-1 flex flex-col h-full">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white italic mb-4 leading-tight">Secure Your<br />Spot Now!</h2>
              <div className="w-16 h-1.5 bg-emerald-400 rounded-full mb-6" />
              <p className="text-emerald-100/70 text-sm mb-8 leading-relaxed max-w-md italic font-serif">If you’re interested in joining our exclusive beta program, please fill out the form below!</p>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <InputGroup label="First Name" value={formData.firstName} onChange={v => updateField('firstName', v)} placeholder="John" />
                  <InputGroup label="Last Name" value={formData.lastName} onChange={v => updateField('lastName', v)} placeholder="Doe" />
                </div>
                <InputGroup label="Email Address" type="email" value={formData.email} onChange={v => updateField('email', v)} placeholder="john@dentalpractice.com" />
                <InputGroup label="Practice Name" value={formData.practiceName} onChange={v => updateField('practiceName', v)} placeholder="Sunshine Dental Co." />
                <InputGroup label="Practice Website" value={formData.website} onChange={v => updateField('website', v)} placeholder="https://sunshinedental.com" />
              </div>
            </div>

            <button
              type="submit"
              disabled={!isStepValid()}
              className={`w-full mt-8 py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isStepValid() ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/20 text-lg' : 'bg-emerald-800 text-emerald-400/50 cursor-not-allowed text-lg'
                }`}
            >
              Sign Up <Send size={20} />
            </button>
          </form>
        );
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        return (
          <div className="flex-1 flex flex-col h-full">
            <div className="mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">Almost Finished</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif text-white italic leading-[1.1] mb-6">
                Before you go...
              </h2>
              <p className="text-emerald-100/60 text-base leading-relaxed max-w-md font-serif italic">
                Help us tailor the perfect Iris experience for your practice.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              {step === 2 && (
                <>
                  <h3 className="text-white text-xl font-serif font-normal leading-snug mb-6">1. What is the lifetime value (LTV) of a single patient for your practice?</h3>
                  <div className="space-y-3">
                    {ltvOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.ltv === opt} onClick={() => updateField('ltv', opt)} />)}
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <h3 className="text-white text-xl font-serif font-normal leading-snug mb-6">2. How many new patients do you currently bring in per month?</h3>
                  <div className="space-y-3">
                    {patientOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.newPatients === opt} onClick={() => updateField('newPatients', opt)} />)}
                  </div>
                </>
              )}
              {step === 4 && (
                <>
                  <h3 className="text-white text-xl font-serif font-normal leading-snug mb-6">3. Do you currently use any phone answering service or solution?</h3>
                  <div className="space-y-3">
                    {solutionOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.currentSolution === opt} onClick={() => updateField('currentSolution', opt)} />)}
                  </div>
                </>
              )}
              {step === 5 && (
                <>
                  <h3 className="text-white text-xl font-serif font-normal leading-snug mb-6">4. What's your biggest challenge with incoming phone calls?</h3>
                  <div className="space-y-3">
                    {challengeOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.biggestChallenge === opt} onClick={() => updateField('biggestChallenge', opt)} />)}
                  </div>
                  {formData.biggestChallenge === 'Other' && (
                    <div className="mt-4 animate-fade-in">
                      <textarea
                        className="w-full bg-emerald-950/40 border border-white/20 rounded-xl p-4 text-white placeholder:text-emerald-800 focus:outline-none focus:border-emerald-400 transition-all h-24 text-sm"
                        placeholder="Tell us more about your challenge..."
                        value={formData.challengeOther}
                        onChange={(e) => updateField('challengeOther', e.target.value)}
                      />
                    </div>
                  )}
                </>
              )}
              {step === 6 && (
                <>
                  <h3 className="text-white text-xl font-serif font-normal leading-snug mb-6">5. What type of dental practice do you operate?</h3>
                  <div className="space-y-3">
                    {typeOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.practiceType === opt} onClick={() => updateField('practiceType', opt)} />)}
                  </div>
                  {formData.practiceType === 'Other' && (
                    <div className="mt-4 animate-fade-in">
                      <input
                        type="text"
                        className="w-full bg-emerald-950/40 border border-white/20 rounded-xl p-4 text-white placeholder:text-emerald-800 focus:outline-none focus:border-emerald-400 transition-all text-sm"
                        placeholder="Specify practice type..."
                        value={formData.typeOther}
                        onChange={(e) => updateField('typeOther', e.target.value)}
                      />
                    </div>
                  )}
                </>
              )}
              {step === 7 && (
                <>
                  <h3 className="text-white text-xl font-serif font-normal leading-snug mb-6">6. How quickly are you looking to implement a solution?</h3>
                  <div className="space-y-3">
                    {timelineOptions.map(opt => <OptionCard key={opt} label={opt} selected={formData.timeline === opt} onClick={() => updateField('timeline', opt)} />)}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => handleNext()}
              disabled={!isStepValid()}
              className={`w-full mt-10 py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isStepValid() ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg text-lg' : 'bg-emerald-800 text-emerald-400/50 cursor-not-allowed text-lg'
                }`}
            >
              Next <ArrowRight size={20} />
            </button>
          </div>
        );
      case 8:
        return (
          <div className="flex-1 flex flex-col h-full">
            <div className="mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">The Last Piece</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif text-white italic leading-[1.1] mb-6">
                Final Step...
              </h2>
              <p className="text-emerald-100/60 text-base leading-relaxed max-w-md font-serif italic">
                Tell us about your vision for a perfectly automated practice.
              </p>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-white text-xl font-serif font-normal leading-snug mb-6">7. If this worked out perfectly, what would be the result for your business?</h3>
              <textarea
                value={formData.finalGoal}
                onChange={(e) => updateField('finalGoal', e.target.value)}
                placeholder="Tell us about your ideal outcome..."
                className="flex-1 min-h-[150px] bg-emerald-950/40 border border-white/10 rounded-xl px-6 py-5 text-white placeholder:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none mb-10 text-base"
              />
            </div>

            <button
              onClick={() => handleNext()}
              disabled={!isStepValid()}
              className={`w-full py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isStepValid() ? 'bg-emerald-400 hover:bg-emerald-300 text-emerald-950 shadow-xl scale-105 text-lg' : 'bg-emerald-800 text-emerald-400/50 cursor-not-allowed text-lg'
                }`}
            >
              Finish Application <Check size={24} strokeWidth={3} />
            </button>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className={`min-h-screen animate-fade-in relative flex items-center justify-center px-6`}>
      {/* Container that dynamically changes its layout based on submission state */}
      <div className={`w-full flex flex-col items-center ${isSubmitted ? 'justify-center py-6' : 'max-w-7xl mx-auto pt-32 pb-24'}`}>
        {!isSubmitted && (
          <div className="w-full">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-slate-400 hover:text-emerald-600 font-bold text-xs uppercase tracking-widest transition-colors mb-12 group"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              {step === 1 ? 'Back to Home' : 'Previous Step'}
            </button>

            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              {/* Left Column: Benefits & Copy */}
              <div className="flex flex-col">
                <div className="mb-8">
                  <h1 className="text-6xl md:text-7xl font-serif text-emerald-950 leading-[1.1] mb-6">
                    Sign-Up For<br />
                    <span className="text-emerald-600 italic">Early Access</span>
                  </h1>
                  <p className="text-slate-500 leading-relaxed text-lg max-w-xl">
                    Iris is currently in final development and testing with select dental practices we’re working closely with to create the best product we can. We have a limited number of spots available for practices to join our beta program and help us perfect the experience. From the sign-ups, <span className="font-bold text-emerald-950">three dental practices</span> will receive the following benefits:
                  </p>
                </div>

                <div className="space-y-2">
                  <BenefitItem
                    icon={Globe}
                    title="Free Access"
                    desc="Use Iris completely free for 90 days during the beta period—no credit card required, no hidden fees"
                  />
                  <BenefitItem
                    icon={MessageSquare}
                    title="Lifetime Discount Lock-In"
                    desc="Beta participants receive 40% off standard pricing forever—even as rates increase for new customers"
                  />
                  <BenefitItem
                    icon={Zap}
                    title="Exclusive Feature Requests"
                    desc="Need a specific capability? Beta participants get first priority for custom features that matter to your practice"
                    isLast={true}
                  />
                </div>
              </div>

              {/* Right Column: Wizard Card */}
              <div className="relative flex flex-col h-full">
                {/* The form container box */}
                <div className="relative bg-emerald-900 rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden flex flex-col h-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-800/40 via-transparent to-transparent opacity-50 pointer-events-none" />

                  <div key={step} className="flex-1 p-8 md:p-14 pt-12 relative z-10 animate-step-in flex flex-col h-full overflow-hidden">
                    {renderFormContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isSubmitted && (
          <div className="max-w-2xl mx-auto w-full animate-fade-in flex flex-col items-center justify-center">
            <div className="relative bg-emerald-900 rounded-[3rem] shadow-2xl border border-white/10 overflow-hidden min-h-[250px] w-full flex flex-col items-center justify-center p-6 md:p-8">
              {/* Subtle grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
                  backgroundSize: '25px 25px'
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-800/40 via-transparent to-transparent opacity-50 pointer-events-none" />
              <div className="relative z-10 w-full flex flex-col items-center justify-center">
                {renderSuccessBlock()}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes step-in { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-step-in { animation: step-in 0.4s ease-out forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(16, 185, 129, 0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default SignUpPage;
