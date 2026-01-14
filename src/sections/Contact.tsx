import React from 'react';
import { Smartphone, Globe, Sparkles, Zap } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative w-full py-40 overflow-hidden bg-[#020203] flex items-center justify-center border-t border-white/5">
      
      {/* --- LAYER 1: WARP SPEED BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050508] to-[#0a0a12]"></div>
        
        {/* The Central Singularity (Glow) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-violet-500/10 rounded-full blur-[80px] mix-blend-screen"></div>

        {/* Perspective Grid (Floor) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] transform perspective-500 rotate-x-60 scale-150 origin-bottom"></div>
      </div>

      <div className="container relative z-20 mx-auto px-6 flex flex-col items-center">
        
        {/* --- FLOATING MOCKUPS (Side Decor) --- */}
        {/* Left Phone */}
        <div className="hidden xl:block absolute left-10 top-1/2 -translate-y-1/2 w-[260px] rotate-[-15deg] animate-float-slow pointer-events-none opacity-40 hover:opacity-100 transition-opacity duration-700">
            <div className="relative rounded-[2.5rem] border-[4px] border-white/10 bg-black overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.2)]">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" alt="App UI" className="w-full h-auto opacity-60 mix-blend-luminosity grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
        </div>

        {/* Right Phone */}
        <div className="hidden xl:block absolute right-10 top-1/2 -translate-y-1/2 w-[260px] rotate-[15deg] animate-float-slower pointer-events-none opacity-40 hover:opacity-100 transition-opacity duration-700">
            <div className="relative rounded-[2.5rem] border-[4px] border-white/10 bg-black overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.2)]">
                <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" alt="App Analytics" className="w-full h-auto opacity-60 mix-blend-luminosity grayscale" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
        </div>

        {/* --- MAIN CONTENT CENTER --- */}
        <div className="text-center max-w-4xl mx-auto relative z-30">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-300 mb-8 uppercase tracking-widest shadow-[0_0_20px_rgba(99,102,241,0.3)]">
            <Zap className="w-3 h-3 fill-indigo-300" />
            <span>The Future is Rendering</span>
          </div>

          {/* Headline */}
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
            <span className="block text-gray-500 text-4xl md:text-5xl font-bold tracking-normal mb-4">Don't just watch.</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-indigo-400 drop-shadow-2xl">
              Forge Reality.
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            The architecture of the next web is being built right now.
            Secure your place in the <span className="text-white font-medium">Perkart ecosystem</span> before we go public.
          </p>

          {/* --- REPLACED BUTTONS: APP STORE & PLAY STORE (Launching Soon) --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* App Store */}
            <button 
              disabled
              className="relative group overflow-hidden w-64 h-16 bg-white text-black rounded-xl font-bold flex items-center justify-center shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] cursor-not-allowed transition-all"
            >
              {/* Visible State */}
              <div className="absolute flex items-center gap-3 transition-transform duration-300 group-hover:-translate-y-[200%]">
                 <Smartphone className="w-6 h-6 fill-black" />
                 <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase tracking-wider opacity-60">Download on</span>
                    <span className="text-base">App Store</span>
                 </div>
              </div>
              
              {/* Hover State */}
              <div className="absolute inset-0 flex items-center justify-center text-indigo-600 font-bold text-lg transition-transform duration-300 translate-y-[200%] group-hover:translate-y-0">
                  Launching Soon
              </div>
            </button>

            {/* Google Play */}
            <button 
              disabled
              className="relative group overflow-hidden w-64 h-16 bg-zinc-900 border border-zinc-800 text-white rounded-xl font-bold flex items-center justify-center cursor-not-allowed transition-all hover:border-zinc-700"
            >
              {/* Visible State */}
              <div className="absolute flex items-center gap-3 transition-transform duration-300 group-hover:-translate-y-[200%]">
                 <Globe className="w-6 h-6 text-gray-400" />
                 <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase tracking-wider opacity-60">Get it on</span>
                    <span className="text-base">Google Play</span>
                 </div>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-lg transition-transform duration-300 translate-y-[200%] group-hover:translate-y-0">
                  Launching Soon
              </div>
            </button>

          </div>

          <div className="mt-12 text-sm text-gray-600 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500/50" />
            <span>Limited beta access opening Q4 2026</span>
          </div>

        </div>
      </div>

      {/* --- ANIMATIONS --- */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.2); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
            50% { transform: translateY(-20px) rotate(var(--tw-rotate)); }
        }
        .animate-float-slow {
            animation: float 7s ease-in-out infinite;
        }
        .animate-float-slower {
            animation: float 9s ease-in-out infinite reverse;
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;