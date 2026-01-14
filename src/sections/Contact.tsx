import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#030014] flex items-center justify-center">
      
      {/* --- BACKGROUND VISUALS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The glowing energy core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[1000px] md:h-[1000px] bg-gradient-radial from-violet-600/40 via-indigo-900/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Secondary plasma-like elements */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[120px] mix-blend-screen"></div>
        
        {/* Subtle grid overlay for tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>


      <div className="container relative z-20 mx-auto px-6 flex flex-col items-center">
        
        {/* --- MOCKUP VISUALS (Floating around text) --- */}
        {/* Left Mockup (Phone) */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 xl:-translate-x-32 w-[280px] rotate-[-12deg] animate-float-slow pointer-events-none">
            <div className="relative rounded-[2.5rem] border-[8px] border-gray-900/80 bg-gray-950 overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" alt="App Dashboard Light" className="w-full h-auto opacity-90 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent"></div>
            </div>
        </div>

        {/* Right Mockup (Phone) */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 xl:translate-x-32 w-[280px] rotate-[12deg] animate-float-slower pointer-events-none">
            <div className="relative rounded-[2.5rem] border-[8px] border-gray-900/80 bg-gray-950 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" alt="App Analytics Dark" className="w-full h-auto opacity-90 mix-blend-luminosity" />
                 <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
        </div>


        {/* --- MAIN CONTENT --- */}
        <div className="text-center max-w-3xl mx-auto relative z-30">
          
          {/* Inspiring Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-indigo-300 mb-8 animate-fade-in">
            <Rocket className="w-4 h-4" />
            <span>The Next Frontier is Yours</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            Stop Dreaming. <br />
            Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">Building the Future.</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-gray-300/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            The tools to redefine your industry are ready. Don't let the moment pass. 
            Join the visionaries turning abstract ideas into velocity and impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="group relative px-8 py-4 bg-white text-black text-lg font-bold rounded-xl flex items-center gap-3 hover:bg-gray-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(167,139,250,0.6)] hover:scale-105 active:scale-95">
              <span>Launch Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 bg-transparent text-white text-lg font-semibold rounded-xl border-2 border-white/10 hover:bg-white/5 hover:border-white/30 transition-all flex items-center gap-2 hover:scale-105 active:scale-95">
              Explore the Sandbox
            </button>
          </div>
        </div>

        {/* Mobile Mockup (Only visible on small screens, stacked below text) */}
         <div className="lg:hidden mt-16 relative w-64 rotate-[-6deg] animate-float-slow pointer-events-none z-10 opacity-60">
            <div className="relative rounded-[2rem] border-[6px] border-gray-900/80 bg-gray-950 overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.2)]">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" alt="App Mobile View" className="w-full h-auto opacity-90 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 to-transparent"></div>
            </div>
        </div>
      </div>

      {/* --- CUSTOM ANIMATIONS (Tailwind extension) --- */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
            50% { transform: translateY(-20px) rotate(var(--tw-rotate)); }
        }
        .animate-float-slow {
            animation: float 6s ease-in-out infinite;
        }
        .animate-float-slower {
            animation: float 8s ease-in-out infinite reverse;
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;