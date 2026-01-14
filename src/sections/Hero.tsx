import React, { useState, useEffect, useRef } from 'react';
import { ScanFace, Sparkles, MoveRight, Smartphone, Globe, Cpu } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      /* UPDATED: Added pt-20 to push visual center down slightly */
      className="relative w-full min-h-screen bg-[#030305] overflow-hidden flex flex-col justify-center items-center font-sans text-white selection:bg-indigo-500/30 pt-20"
    >
      
      {/* --- LAYER 1: CINEMATIC GRAIN & GRID --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] transform perspective-1000 rotate-x-12 scale-150 origin-top"></div>
      </div>

      {/* --- LAYER 2: THE "FORGE" CORE (Living Gradient) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
        <div className="relative w-[800px] h-[800px]">
           <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow"></div>
           <div 
             className="absolute w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-[80px] transition-transform duration-1000 cubic-bezier(0.1, 0.7, 1.0, 0.1)"
             style={{ 
               top: '20%', 
               left: '20%',
               transform: `translate(${mousePosition.x / 20}px, ${mousePosition.y / 20}px)` 
             }}
           ></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[60px] animate-pulse"></div>
        </div>
      </div>

      {/* --- LAYER 3: HUD / TECH OVERLAYS --- */}
      {/* UPDATED: Changed py-6 to pt-32 pb-6 so the text clears the navbar */}
      <div className="absolute inset-0 z-10 pointer-events-none px-6 pt-32 pb-6 flex flex-col justify-between">
        {/* Top Bar */}
        <div className="flex justify-between items-start opacity-30 text-[10px] tracking-[0.2em] font-mono">
            <div className="flex gap-4">
                <span>SYS.READY</span>
                <span>// V.2.0.1</span>
            </div>
            <div className="flex gap-4">
                <span>CAM_01: ACTIVE</span>
                <span className="animate-pulse">REC ●</span>
            </div>
        </div>
        
        {/* Side Crosshairs */}
        <div className="absolute top-1/2 left-6 w-1 h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-1/2 right-6 w-1 h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end opacity-30 text-[10px] tracking-[0.2em] font-mono">
            <div>
               COORD: {Math.round(mousePosition.x)}, {Math.round(mousePosition.y)}
            </div>
            <div className="h-px w-32 bg-white/50"></div>
        </div>
      </div>

      {/* --- LAYER 4: MAIN CONTENT --- */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Spotlight */}
        <div 
            className="absolute z-[-1] w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-500"
            style={{ 
                left: mousePosition.x - 300, 
                top: mousePosition.y - 300,
                opacity: 0.6
            }}
        ></div>

        {/* Badge */}
        <div className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-sm text-indigo-200 font-medium mb-10 overflow-hidden cursor-default transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer"></div>
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className="tracking-wide">India’s First Visual-to-Innovation Platform</span>
        </div>

        {/* HERO TYPOGRAPHY */}
        <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 drop-shadow-2xl">
              Turn What <br /> You See
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white/90 mb-8 flex items-center gap-4">
          <span className="opacity-50 font-serif italic font-light">Into</span>
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 animate-text-shine bg-[length:200%_auto]">
             What’s Next
             <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-500" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" className="opacity-60" />
             </svg>
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed opacity-0 animate-slide-up animation-delay-300">
          <span className="text-white font-semibold">Perkart Forge</span> is the AI engine that decodes your reality. 
          Point your camera at a problem, and let our visual intelligence architect the solution.
        </p>

        {/* ACTION AREA */}
        <div className="flex flex-col sm:flex-row gap-5 items-center opacity-0 animate-slide-up animation-delay-500">
          <button className="relative group overflow-hidden bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-4 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.6)] hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Smartphone className="w-6 h-6" />
            <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase tracking-wider opacity-60">Download on</span>
                <span className="text-lg">App Store</span>
            </div>
            <MoveRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </button>

          <button className="relative group overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-4 transition-all duration-300 hover:bg-white/10 hover:border-white/30">
            <Globe className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase tracking-wider opacity-60">Get it on</span>
                <span className="text-lg">Google Play</span>
            </div>
          </button>
        </div>

        {/* Trust/Tech Footer */}
        <div className="mt-20 flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 animate-slide-up animation-delay-700">
            <div className="flex items-center gap-2 text-xs font-mono border-r border-white/20 pr-6">
                <Cpu className="w-4 h-4" />
                <span>POWERED BY PERKART VISION 1.0</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
                <ScanFace className="w-4 h-4" />
                <span>REAL-TIME ANALYSIS</span>
            </div>
        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        @keyframes text-shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-text-shine {
          animation: text-shine 3s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
        }
        
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        
        .perspective-1000 {
            perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Hero;