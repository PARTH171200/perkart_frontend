import React from 'react';
import { Eye, Zap, ArrowRight, Infinity } from 'lucide-react';

const InsightSection = () => {
  return (
    <section id='insight' className="relative w-full py-32 bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center font-sans">
      
      {/* --- AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]"></div>
        {/* Subtle Vertical Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)] bg-[size:10rem_1px] mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- PHILOSOPHICAL HEADER --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-indigo-400/60 tracking-[0.3em] text-xs font-mono uppercase">
            <Infinity className="w-4 h-4" />
            The Convergence
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
            Bridging the Gap Between <br />
            <span className="font-serif italic text-gray-500">Sight</span> and <span className="font-bold">Solution</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            The physical world is full of questions. The digital world holds the answers. 
            We provide the missing link that translates optical input into engineering output.
          </p>
        </div>

        {/* --- THE BRIDGE METAPHOR (Fixed Alignment) --- */}
        <div className="relative w-full max-w-5xl mx-auto h-[300px] flex items-center justify-between px-4 md:px-12">
          
          {/* --- THE CONNECTING BEAM (Background Layer) --- */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] w-full z-0">
             {/* Base Line */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-900 to-transparent opacity-50"></div>
             {/* Glowing Core */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-[1px] opacity-40"></div>
             {/* Moving Light Packet */}
             <div className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent animate-bridge-flow z-10"></div>
          </div>

          {/* --- SIDE A: PHYSICAL REALITY (Left Node) --- */}
          <div className="relative z-10 flex flex-col items-center gap-6 group">
            {/* Circle Container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-white/30 group-hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
               
               {/* Image Background: Concrete/Architecture */}
               <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500 grayscale">
                 <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop" 
                    alt="Physical World Infrastructure"
                    className="w-full h-full object-cover" 
                 />
               </div>
               
               {/* Icon Overlay */}
               <div className="relative z-20 p-4 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                 <Eye className="w-6 h-6 text-white" />
               </div>
            </div>

            {/* Label Text */}
            <div className="text-center">
              <h3 className="text-white font-medium text-lg">The Physical Context</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Unstructured Data</p>
            </div>
          </div>

          {/* --- CENTER: THE CATALYST (Arrow Node) --- */}
          <div className="relative z-20">
             <div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-xl animate-pulse-slow"></div>
             <button className="relative w-16 h-16 bg-[#0a0a0a] border border-indigo-500 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                <ArrowRight className="w-6 h-6 text-indigo-400" />
             </button>
          </div>

          {/* --- SIDE B: DIGITAL KNOWLEDGE (Right Node) --- */}
          <div className="relative z-10 flex flex-col items-center gap-6 group">
            {/* Circle Container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-indigo-500/30 bg-[#0a0a0a] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-indigo-400 group-hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
               
               {/* Image Background: Abstract Tech/Data */}
               <div className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-lighten">
                 <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
                    alt="Digital Data Intelligence"
                    className="w-full h-full object-cover" 
                 />
               </div>
               
               {/* Icon Overlay */}
               <div className="relative z-20 p-4 rounded-full bg-indigo-950/50 backdrop-blur-sm border border-indigo-500/30">
                 <Zap className="w-6 h-6 text-indigo-300" />
               </div>
            </div>

            {/* Label Text */}
            <div className="text-center">
              <h3 className="text-indigo-200 font-medium text-lg">Global Intelligence</h3>
              <p className="text-xs text-indigo-500/60 uppercase tracking-widest mt-1">Actionable Insight</p>
            </div>
          </div>

        </div>

        {/* --- FOOTER QUOTE --- */}
        <div className="mt-12 flex justify-center opacity-0 animate-fade-in animation-delay-500">
            <p className="text-sm font-mono text-gray-600 border-l border-gray-800 pl-4 max-w-md italic">
                "We don't just show you the world. We show you how to rebuild it."
            </p>
        </div>

      </div>

      {/* --- ANIMATIONS --- */}
      <style>{`
        @keyframes bridge-flow {
          0% { transform: translateX(-150%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(150%); opacity: 0; }
        }
        .animate-bridge-flow {
          animation: bridge-flow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
        .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
        }
        .animation-delay-500 { animation-delay: 0.5s; }
        @keyframes fade-in {
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default InsightSection;