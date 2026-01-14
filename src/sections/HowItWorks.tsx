import React from 'react';
import { UploadCloud, Cpu, Lightbulb, TrendingUp, ChevronRight } from 'lucide-react';

const ProductHowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <UploadCloud className="w-6 h-6" />,
      title: "Capture Reality",
      description: "Upload images, video feeds, or 3D scans of any environment or object.",
      accent: "blue"
    },
    {
      id: 2,
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Processing",
      description: "Our engine decodes geometry, materials, and context instantly.",
      accent: "indigo"
    },
    {
      id: 3,
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Forge Concepts (Patents)",
      description: "Generate novel, IP-ready innovation proposals based on the analysis.",
      accent: "purple"
    },
    {
      id: 4,
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Unlock Opportunity",
      description: "Receive market-validated insights and execution roadmaps.",
      accent: "pink"
    }
  ];

  return (
    <section id="how-it-works" className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden font-sans">
      
      {/* Ambient Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Visual Input</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Market Edge</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Our four-stage process turns raw visual data into patentable intelligence and strategic advantage.
          </p>
        </div>

        {/* Steps Flow Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line Layer (Desktop only) */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-[2px] bg-gray-800/50 z-0">
            {/* Animated Flow Gradient */}
            <div className="absolute inset-0 h-full w-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-flow-right"></div>
          </div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative group z-10">
              
              {/* Step Card */}
              <div className="h-full flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/10 hover:-translate-y-2">
                
                {/* Icon Container & Numbering */}
                <div className="relative mb-6">
                  {/* Step Number Badge */}
                  <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gray-900 border border-${step.accent}-500/30 flex items-center justify-center text-sm font-bold text-white z-20`}>
                    {step.id}
                  </div>
                  
                  {/* Main Icon */}
                  <div className={`relative w-20 h-20 rounded-xl bg-gradient-to-br from-${step.accent}-500/20 to-transparent border border-${step.accent}-500/30 flex items-center justify-center overflow-hidden group-hover:shadow-[0_0_30px_rgba(var(--${step.accent}-rgb),0.3)] transition-shadow`}>
                    <div className={`text-${step.accent}-400 group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    {/* Inner Glow */}
                    <div className={`absolute inset-0 bg-${step.accent}-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Mobile Connector (Down Arrow) */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4 relative z-0">
                  <ChevronRight className="w-6 h-6 text-gray-700 rotate-90" />
                </div>
              )}

              {/* Desktop Connector (Right Arrow overlay on line) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-4 transform translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-8 h-8 bg-[#0A0A0A] border border-gray-800 rounded-full flex items-center justify-center">
                    <ChevronRight className={`w-4 h-4 text-${step.accent}-400 opacity-50`} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- Custom CSS for Animations and RGB Variables --- */}
      <style>{`
        /* Define RGB values for the tailwind colors used in accents for shadow opacity */
        :root {
          --blue-rgb: 59, 130, 246;
          --indigo-rgb: 99, 102, 241;
          --purple-rgb: 168, 85, 247;
          --pink-rgb: 236, 72, 153;
        }

        @keyframes flow-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-flow-right {
          animation: flow-right 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProductHowItWorks;