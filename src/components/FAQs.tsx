import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Plus, Minus, Search, Sparkles } from 'lucide-react';

const FAQs = () => {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0); 
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "What is Perkart Forge?",
      answer: "Perkart Forge is an AI-powered innovation discovery platform. We transform your visual inputs—photos, blueprints, or sketches—into actionable engineering insights, patent-grade concepts, and market opportunities."
    },
    {
      question: "How does Perkart Forge work?",
      answer: "Simply upload an image or scan an environment. Our AI analyzes the visual data using computer vision, cross-references it with global engineering databases, and generates a detailed report on improvements, utility, and innovation potential."
    },
    {
      question: "What kind of images can I upload?",
      answer: "You can upload standard photos (JPEG/PNG), technical schematics, CAD screenshots, or even rough hand-drawn sketches. Our engine is designed to interpret both raw real-world environments and structured technical drawings."
    },
    {
      question: "Where does the innovation data come from?",
      answer: "Our intelligence is derived from a vast, real-time dataset including global patent registries, engineering physics simulations, manufacturing standards, and current market trend analyses."
    },
    {
      question: "Is Perkart Forge useful for founders and investors?",
      answer: "Absolutely. Founders use it to validate product feasibility and find unique selling points. Investors use it for rapid technical due diligence, verifying if a physical product claim aligns with engineering reality."
    },
    {
      question: "Does Perkart Forge provide investment advice?",
      answer: "No. We provide technical analysis, market viability scores, and innovation potential. We do not offer financial or investment advice. All investment decisions should be made with qualified financial advisors."
    },
    {
      question: "Are my images and data secure?",
      answer: "Yes. We prioritize data sovereignty. Your uploads are encrypted, processed securely, and we do not use your proprietary data to train our public models without your explicit permission. We are compliant with the DPDP Act 2023."
    },
    {
      question: "Is Perkart Forge free to use?",
      answer: "We offer a free tier for individual explorers to test basic scanning features. For detailed engineering reports, patent searches, and unlimited scans, we offer Premium and Corporate subscriptions."
    },
    {
      question: "How is Perkart Forge different from a normal AI chatbot?",
      answer: "Unlike text-based LLMs that 'hallucinate' facts, Perkart Forge is 'Physics-Aware'. It understands spatial depth, material properties, and mechanical feasibility, ensuring our outputs are engineering-valid, not just linguistically correct."
    },
    {
      question: "Which industries can benefit from Perkart Forge?",
      answer: "We support a wide range of hardware-centric sectors including Automotive, Urban Planning, Consumer Electronics, Manufacturing, and Civil Infrastructure."
    }
  ];

  // Filter FAQs based on search
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-amber-500/30 selection:text-white pt-24">
      
      {/* --- Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-900/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/5 rounded-full blur-[100px]"></div>
      </div>

      {/* --- Header / Navigation --- */}
      <div className="relative border-b border-white/10 bg-black/50 backdrop-blur-md mb-12">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2 text-amber-500">
            <HelpCircle size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">Support Center</span>
          </div>
        </div>
      </div>

      {/* --- Main Content --- */}
      <main className="relative max-w-3xl mx-auto px-6 pb-24">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono mb-6">
            <Sparkles size={12} />
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Everything you need to know about Perkart Forge.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12 group">
           <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-indigo-500/20 rounded-xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
           <div className="relative flex items-center bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden focus-within:border-amber-500/50 transition-colors">
              <Search className="ml-4 text-gray-500" size={20} />
              <input 
                type="text" 
                placeholder="Search questions (e.g., 'Pricing', 'Security', 'Investors')..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white px-4 py-4 outline-none placeholder:text-gray-600"
              />
           </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? "bg-[#0F0F10] border-amber-500/30 shadow-[0_4px_20px_rgba(245,158,11,0.05)]" 
                    : "bg-[#0A0A0A] border-white/5 hover:border-white/10"
                }`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <span className={`font-medium text-lg transition-colors pr-8 ${openIndex === index ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                     {openIndex === index ? (
                        <Minus className="text-amber-500" size={20} />
                     ) : (
                        <Plus className="text-gray-500 group-hover:text-amber-500 transition-colors" size={20} />
                     )}
                  </div>
                </button>
                
                {/* Answer Content */}
                <div 
                  className={`px-6 text-gray-400 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                   <div className="pt-2 border-t border-white/5 text-sm md:text-base">
                      {faq.answer}
                   </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
               <p>No results found for "{searchQuery}".</p>
               <button 
                 onClick={() => setSearchQuery("")}
                 className="mt-4 text-amber-500 hover:text-amber-400 text-sm font-medium"
               >
                 Clear search
               </button>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
           <h3 className="text-white font-bold text-xl mb-2">Still need help?</h3>
           <p className="text-gray-400 mb-6 text-sm">We are here to answer any specific queries you might have.</p>
           <a href="mailto:support@perkart.in" className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
              Contact Support
           </a>
        </div>

      </main>
    </div>
  );
};

export default FAQs;