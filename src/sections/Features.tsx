import React from 'react';
import { Scan, BrainCircuit, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';

const InnovationProcess = () => {
  const features = [
    {
      icon: <Scan className="w-6 h-6 text-indigo-400" />,
      title: "Visual Capture",
      desc: "Point your camera at infrastructure, products, or urban environments. Our engine maps depth, material, and context in real-time."
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
      title: "Deep Analysis",
      desc: "Perkart Forge identifies inefficiencies and structural opportunities that the human eye might miss."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-400" />,
      title: "Instant Innovation",
      desc: "Receive actionable blueprints and improvement strategies generated instantly on your device."
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#050507] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="space-y-8">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold tracking-wide text-indigo-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              The Workflow
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              From Visual Chaos to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Structured Innovation
              </span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Perkart Forge isn't just an image recognizer; it's a solution architect. 
              We bridge the gap between seeing a problem and solving it by turning 
              visual inputs into engineering-grade insights.
            </p>

            {/* Feature Steps */}
            <div className="space-y-6 pt-4">
              {features.map((item, index) => (
                <div key={index} className="group flex gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-3 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-gray-700 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Link */}
            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors group">
                Explore the Platform
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN: VISUAL --- */}
          <div className="relative">
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              {/* Image Overlay Gradient (for text readability if needed, and mood) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-60 z-10"></div>
              
              {/* Actual Image */}
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Futuristic architecture analysis" 
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />

              {/* HUD / Scanning Overlay */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-indigo-500/50 rounded-tr-xl"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-indigo-500/50 rounded-bl-xl"></div>
              </div>

              {/* Floating "Analysis" Card */}
              <div className="absolute bottom-10 right-6 left-6 md:left-auto md:w-80 bg-black/60 backdrop-blur-md border border-white/10 p-5 rounded-xl z-30 shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-indigo-300">ANALYSIS COMPLETE</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Structural Integrity</span>
                    <span className="text-white font-mono">98.4%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[98%]"></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Optimization Opps</span>
                    <span className="text-white font-mono">12 Found</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full w-[65%]"></div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                   <CheckCircle2 className="w-4 h-4 text-green-400" />
                   <span className="text-xs text-gray-300">Blueprint Generated Successfully</span>
                </div>
              </div>

            </div>

            {/* Decorative Elements behind image */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-white/5 rounded-2xl hidden lg:block"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-dots-pattern opacity-20"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InnovationProcess;