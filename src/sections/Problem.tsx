import React from 'react';
import { AlertTriangle, ZapOff, Layers, Lock, AlertCircle } from 'lucide-react';

const ProblemStatement = () => {
  const problems = [
    {
      id: "ERR_01",
      title: "Infrastructure Blindness",
      subtitle: "Physical Reality vs. Digital Understanding",
      description: "Our world is built on complex, aging infrastructure. Yet, modern digital tools are blind to it. We lack the ability to instantly capture, analyze, and diagnose physical systems without expensive, slow manual intervention.",
      icon: <ZapOff className="w-5 h-5 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop", // Power lines/Dark aesthetics
      stat: "40% Data Loss"
    },
    {
      id: "ERR_02",
      title: "Fragmented Intelligence",
      subtitle: "The Disconnected Data Silo",
      description: "Innovation is currently piecemeal. Visual data, engineering blueprints, and AI insights exist in separate silos. This fragmentation prevents rapid prototyping and slows down the global pace of hardware problem-solving.",
      icon: <Layers className="w-5 h-5 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop", // Urban Chaos/Traffic
      stat: "High Latency"
    },
    {
      id: "ERR_03",
      title: "The Access Gap",
      subtitle: "Innovation Reserved for the Few",
      description: "Advanced computer vision and generative engineering tools are currently locked behind enterprise paywalls. The garage inventor and the small startup are left working with yesterday's tools to solve tomorrow's problems.",
      icon: <Lock className="w-5 h-5 text-orange-500" />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", // Construction/Barriers
      stat: "Restricted"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#080808] overflow-hidden">
      
      {/* Background Grid (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-orange-500/20 bg-orange-950/10 text-xs font-mono text-orange-500 uppercase tracking-widest mb-6">
            <AlertTriangle className="w-3 h-3" />
            System Critical
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Innovation <span className="text-gray-600 line-through decoration-orange-500 decoration-2">Pipeline</span> Break
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We are trying to build a futuristic society on top of an unmapped, analog foundation. 
            The disconnect is costing us speed, efficiency, and breakthrough potential.
          </p>
        </div>

        {/* Timeline / Problem Flow */}
        <div className="relative">
          
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {problems.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Visual Side (Image Card) */}
                <div className="w-full md:w-1/2 group">
                  <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    
                    {/* Floating Error Stat */}
                    <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur border border-red-500/30 px-3 py-1 rounded text-xs font-mono text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-3 h-3" />
                      {item.stat}
                    </div>

                    {/* Overlay Grid */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10"></div>
                  </div>
                </div>

                {/* Center Node (Desktop Only) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#080808] border border-gray-700 rounded-full flex items-center justify-center z-20 hidden md:flex shadow-[0_0_15px_rgba(0,0,0,1)]">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 text-left md:px-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-gray-500 tracking-wider">{item.id}</span>
                    <div className="h-px flex-1 bg-gray-800"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    {item.title}
                  </h3>
                  
                  <h4 className="text-orange-500/80 text-sm font-mono mb-4 uppercase tracking-wide">
                    {item.subtitle}
                  </h4>
                  
                  <p className="text-gray-400 leading-relaxed border-l-2 border-gray-800 pl-4">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;