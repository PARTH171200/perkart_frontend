// import React from 'react';
import { Lightbulb, Briefcase, Building2, HardHat, ArrowUpRight } from 'lucide-react';

const UseCases = () => {
  const cases = [
    {
      role: "For Founders",
      icon: <Lightbulb className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", // Team working/Startup
      title: "Validate Before You Build",
      description: "Don't just guess what the market needs. Scan a problem in the real world, and let our AI generate a patent-ready technical solution and business model instantly.",
      benefit: "Accelerate MVP by 10x"
    },
    {
      role: "For Investors",
      icon: <Briefcase className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop", // Boardroom/Finance
      title: "Due Diligence, Decoded",
      description: "See a physical product or infrastructure pitch? Use Perkart Forge to analyze its engineering feasibility and competitive landscape in seconds.",
      benefit: "Risk Assessment Automated"
    },
    {
      role: "For Corporate R&D",
      icon: <Building2 className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", // Modern Office
      title: "Unlock Hidden Revenue",
      description: "Turn your existing physical assets into new digital opportunities. Scan your supply chain or facilities to find optimization gaps invisible to the human eye.",
      benefit: "Optimized Asset Utilization"
    },
    {
      role: "For Urban Planners",
      icon: <HardHat className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop", // City/Construction
      title: "Smarter Infrastructure",
      description: "Analyze traffic flow, structural decay, or public usage patterns in real-time. Generate AI-backed proposals for city improvements instantly.",
      benefit: "Data-Driven City Design"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#050505] text-white overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              One Platform. <br />
              <span className="text-indigo-400">Infinite Applications.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Whether you are building the next unicorn or redesigning a city block, 
              Perkart Forge adapts its visual intelligence to your specific goals.
            </p>
          </div>
          
          {/* Global CTA */}
          <div className="mt-8 md:mt-0">
             <button className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-all group">
                See all industries
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-indigo-500/50 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white shadow-lg">
                    {item.icon}
                    <span>{item.role}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col justify-between relative z-20 -mt-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm mb-6">
                        {item.description}
                    </p>
                  </div>
                  
                  {/* Bottom Highlight */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                        Key Benefit
                    </span>
                    <span className="text-sm font-semibold text-white">
                        {item.benefit}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;