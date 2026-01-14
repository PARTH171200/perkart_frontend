import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar, Clock, ChevronRight, Tag, Filter, Mail } from 'lucide-react';

const BlogsAndInsights = () => {
  
  // 1. Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  // 2. Specific Categories from Brief
  const categories = [
    "All",
    "AI & Multimodal Systems",
    "Global Patents & Research",
    "Infrastructure Innovation",
    "Startup Opportunities",
    "Investor Insights"
  ];

  // 3. Featured Insight Data
  const featuredPost = {
    id: 1,
    category: "AI & Multimodal Systems",
    title: "Beyond Text: How Multimodal AI is Decoding the Physical World",
    excerpt: "While LLMs conquered language, the next frontier is 'Spatial Intelligence'. Discover how Perkart Forge combines computer vision with engineering physics to understand not just what an image is, but how it works.",
    date: "Jan 12, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop" // Abstract AI Brain/Network
  };

  // 4. Grid Data
  const allPosts = [
    {
      id: 2,
      category: "Investor Insights",
      title: "De-risking Hardtech: A Due Diligence Framework for 2026",
      excerpt: "Hardware is hard, but the returns are massive. Learn how top VCs use visual validation tools to assess prototype feasibility before signing the check.",
      date: "Jan 10, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" // Finance/Charts
    },
    {
      id: 3,
      category: "Infrastructure Innovation",
      title: "The Silent Decay: Spotting Bridge Failures Before They Happen",
      excerpt: "A case study on how municipal corporations are using Perkart Forge to analyze decades-old structural blueprints against current visual inspection data.",
      date: "Jan 08, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" // Bridge/Construction
    },
    {
      id: 4,
      category: "Global Patents & Research",
      title: "Patent Mining 101: Finding White Space in Crowded Markets",
      excerpt: "Don't reinvent the wheel. How to use AI to scan millions of global patents in seconds and find the 'Innovation Gap' for your next product.",
      date: "Dec 28, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop" // Library/Research
    },
    {
      id: 5,
      category: "Startup Opportunities",
      title: "Bootstrapping a DeepTech Startup: The MVP Guide",
      excerpt: "You don't need a million dollars to build a prototype. How visual AI tools are lowering the barrier to entry for solo hardware founders.",
      date: "Dec 22, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" // Startup Team
    },
    {
      id: 6,
      category: "AI & Multimodal Systems",
      title: "Synthetic Data: Training AI When Real Images Don't Exist",
      excerpt: "Exploring the role of generative visuals in training the next generation of industrial robots and inspection drones.",
      date: "Dec 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1617791160505-6f00504e3caf?q=80&w=2070&auto=format&fit=crop" // 3D Render/Data
    }
  ];

  // Filter Logic
  const displayPosts = activeCategory === "All" 
    ? allPosts 
    : allPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-amber-500/30 selection:text-white pt-24">
      
      {/* --- Global Background Effects --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        {/* Subtle Gold/Amber Glow Top Right */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-amber-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* --- Internal Header / Navigation --- */}
      <div className="relative border-b border-white/10 bg-black/50 backdrop-blur-md mb-12">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2 text-amber-500">
            <BookOpen size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">Perkart Intelligence</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Container --- */}
      <main className="relative max-w-7xl mx-auto px-6 pb-24">
        
        {/* 1. Page Title */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
            Blogs & Insights
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed border-l-2 border-amber-500/50 pl-6">
            Where real-world problems meet global innovation intelligence.
          </p>
        </div>

        {/* 2. Featured Insight (Hero Section) */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] mb-24 group hover:border-amber-500/30 transition-all duration-500 shadow-2xl shadow-black/50">
           <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/50 z-10"></div>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute top-6 left-6 z-20">
                    <span className="px-3 py-1.5 rounded-md bg-amber-500 text-black text-xs font-bold uppercase tracking-wider shadow-lg">
                        Featured Insight
                    </span>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center relative z-20">
                 <div className="flex items-center gap-3 mb-6 text-xs font-mono uppercase tracking-widest text-amber-500">
                    <Tag size={12} />
                    <span>{featuredPost.category}</span>
                 </div>
                 
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-amber-100 transition-colors">
                    {featuredPost.title}
                 </h2>
                 
                 <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                    {featuredPost.excerpt}
                 </p>
                 
                 <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                    <div className="flex gap-4 text-xs text-gray-500 font-mono">
                        <span className="flex items-center gap-1"><Calendar size={12}/> {featuredPost.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12}/> {featuredPost.readTime}</span>
                    </div>
                    <button className="flex items-center gap-2 text-white font-semibold hover:text-amber-500 transition-colors group/btn">
                        Read Now <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* 3. Categories / Filters */}
        <div className="sticky top-20 z-30 bg-[#050505]/95 backdrop-blur-md py-4 mb-12 -mx-6 px-6 border-y border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Filter size={16} className="text-gray-500 shrink-0 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all whitespace-nowrap border ${
                activeCategory === cat 
                  ? "bg-white text-black border-white" 
                  : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4. Blog Grid */}
        {displayPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post) => (
              <article 
                key={post.id} 
                className="group flex flex-col h-full bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/10"
              >
                
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors"></div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-2 py-1 rounded bg-black/70 backdrop-blur text-[10px] font-bold text-white border border-white/10">
                        {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between text-xs text-gray-600 font-mono pt-4 border-t border-white/5">
                    <div className="flex gap-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

              </article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl">
            <p className="text-gray-500">No insights found in this category yet.</p>
            <button onClick={() => setActiveCategory("All")} className="mt-4 text-amber-500 hover:underline">View All Posts</button>
          </div>
        )}

        {/* 5. Newsletter / Insight Subscription */}
        <div className="mt-24 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
           {/* Background Mesh Gradient */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/20 rounded-full blur-[100px] pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-lg">
                 <div className="flex items-center gap-3 mb-4 text-amber-500">
                    <Mail size={24} />
                    <span className="font-bold tracking-widest text-sm uppercase">Perkart Brief</span>
                 </div>
                 <h2 className="text-3xl font-bold text-white mb-4">
                    Get curated innovation insights directly in your inbox.
                 </h2>
                 <p className="text-gray-400">
                    Join 15,000+ founders and investors receiving our weekly deep dive into patent trends and hardtech opportunities.
                 </p>
              </div>

              <div className="w-full md:w-auto flex flex-col gap-3">
                 <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full sm:w-80 px-6 py-4 rounded-xl bg-black border border-white/20 text-white placeholder:text-gray-600 focus:border-amber-500 outline-none transition-all"
                    />
                    <button className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-amber-500 transition-colors shadow-lg">
                       Subscribe
                    </button>
                 </div>
                 <p className="text-xs text-gray-600 text-center sm:text-left">
                    No spam. Unsubscribe anytime.
                 </p>
              </div>
           </div>
        </div>

      </main>
    </div>
  );
};

export default BlogsAndInsights;