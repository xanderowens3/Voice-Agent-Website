
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Soft Ambient Pulses */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-100/40 rounded-full blur-[120px] animate-[pulse_15s_ease-in-out_infinite]"
      />
      <div 
        className="absolute bottom-[0%] right-[-5%] w-[40%] h-[60%] bg-emerald-50/50 rounded-full blur-[100px] animate-[pulse_20s_ease-in-out_infinite]"
      />
      <div 
        className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-slate-100/30 rounded-full blur-[80px]"
      />
      
      {/* Secondary Dot Grid Overlay for finer texture - increased visibility */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #065f46 1px, transparent 1px)', 
          backgroundSize: '25px 25px' 
        }} 
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
