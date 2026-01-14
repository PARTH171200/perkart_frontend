import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Globe, Zap, Search, ArrowRight, Quote } from 'lucide-react';
import founderImage from '../assets/founder.jpeg'// Replace with actual path to founder's image
const About = () => {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-amber-500/30 selection:text-white pt-24">
      
      {/* --- Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        {/* Amber Glow (Top Right) */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-amber-900/10 rounded-full blur-[120px]"></div>
        {/* Blue/Indigo Glow (Bottom Left) */}
        <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* --- Navigation --- */}
      <div className="relative border-b border-white/10 bg-black/50 backdrop-blur-md mb-16">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2 text-amber-500">
            <Target size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">Mission Control</span>
          </div>
        </div>
      </div>

      <main className="relative max-w-7xl mx-auto px-6 pb-24">

        {/* =========================================
            SECTION 1: ABOUT PERKART FORGE
           ========================================= */}
        <section className="mb-32">
          
          {/* Hero Text */}
          <div className="max-w-4xl mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono mb-6">
              <Zap size={12} />
              <span>THE VISION</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
              We decode reality to find <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">better alternatives.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Innovation isn't always about inventing something new. Often, the solution already exists—it's just hidden in a patent database, a research lab, or a different industry.
            </p>
          </div>

          {/* Core Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-amber-500" />,
                title: "Visual-to-Insight",
                desc: "We don't just read text. We analyze physical objects, schematics, and environments to understand the core engineering problem instantly."
              },
              {
                icon: <Globe className="w-8 h-8 text-amber-500" />,
                title: "Global Intelligence",
                desc: "Our engine scans millions of global patents, scientific papers, and lab reports to find proven substitutes for inefficient systems."
              },
              {
                icon: <Target className="w-8 h-8 text-amber-500" />,
                title: "Actionable Pathways",
                desc: "We move beyond theory. Perkart Forge delivers concrete technological pathways that you can implement, license, or build today."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all duration-300 group">
                <div className="mb-6 p-3 rounded-lg bg-black/50 w-fit border border-white/10 group-hover:border-amber-500/50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32"></div>

        {/* =========================================
            SECTION 2: ABOUT THE FOUNDER
           ========================================= */}
        <section className="relative">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Image Column (Span 4) */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-amber-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 aspect-[3/4]">
                {/* Placeholder for Founder Image - Replace src with actual photo */}
                <img 
                  src={founderImage} 
                  alt="Aakash Rao" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Name Card Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-1">Aakash Rao</h3>
                  <p className="text-amber-500 font-mono text-sm uppercase tracking-wider">Founder & CEO</p>
                </div>
              </div>

              {/* Quote Decoration */}
              <div className="absolute -top-6 -right-6 p-4 bg-black border border-amber-500/30 rounded-xl shadow-xl">
                 <Quote className="text-amber-500 w-6 h-6 fill-amber-500/20" />
              </div>
            </div>

            {/* Text Column (Span 8) */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                About the Founder
              </h2>

              <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
                <p>
                  Aakash Rao is the Founder and CEO of Perkart Forge, an AI-powered invention intelligence platform designed to identify technological alternatives to existing products, processes, and systems. Perkart Forge enables users to capture or upload an image of a physical object or problem, after which the platform analyzes global patents, research publications, laboratory research, and scientific literature to determine what inventions or technologies can be used instead.
                </p>
                
                <p>
                  Built to answer the question “what already exists that can replace this?”, Perkart Forge converts validated global research into actionable insights. By surfacing proven substitutes, improvements, and non-obvious technological pathways, the platform helps reduce reliance on outdated or inefficient methods and accelerates informed technology adoption.
                </p>
                
                <p>
                  Aakash completed his schooling at Mallya Aditi International School, Bangalore, and earned a Bachelor of Arts from the University of York, UK. He leads Perkart Forge with a strong emphasis on applied intelligence, accuracy, and real-world utility, focused on transforming global research into practical solutions with measurable impact.
                </p>
              </div>

              {/* Signature / Connection */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center">
                 <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">Location</span>
                    <span className="text-white">Bangalore, India</span>
                 </div>
                 <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
                 <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">Focus</span>
                    <span className="text-white">Applied Intelligence & Utility</span>
                 </div>
                 
                 <div className="ml-auto">
                    <a 
                      href="https://www.linkedin.com/in/aakash-rao-a57b31381/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-amber-500 transition-colors"
                    >
                      Connect on LinkedIn <ArrowRight size={16} />
                    </a>
                 </div>
              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
};

export default About;