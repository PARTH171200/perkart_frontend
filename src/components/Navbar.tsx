import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ChevronRight } from "lucide-react";
import logo from "../assets/image.png"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); 

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated Links
  const navLinks = [
    { name: "Home", href: "/", type: "link" },
    { name: "About", href: "/about", type: "link" }, 
    { name: "How It Works", href: "/#how-it-works", type: "hash" }, 
    { name: "Insights", href: "/#insight", type: "hash" }, 
    { name: "Pricing", href: "/#pricing", type: "hash" }, 
  ];

  // Smart Scroll Function
  const handleNavClick = (e: React.MouseEvent, href: string, type: string) => {
    setIsMobileMenuOpen(false); 

    if (type === 'hash') {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);

      if (location.pathname === '/' && element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    if (href === '/' && location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* --- LOGO SECTION --- */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            <img 
              src={logo} 
              alt="Perkart Forge Logo" 
              className="w-10 h-10 rounded-lg object-contain border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-300" 
            />
            
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-white tracking-wide">
                PERKART
              </span>
              <span className="text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase group-hover:text-cyan-300 transition-colors">
                Forge
              </span>
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.type)}
                className="relative text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}
          </div>

          {/* --- DESKTOP CTA (Login Removed) --- */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* UPDATED DOWNLOAD BUTTON */}
            <button className="group relative px-5 py-2.5 bg-zinc-900 border border-zinc-700 text-zinc-300 text-sm font-bold rounded-lg overflow-hidden cursor-not-allowed transition-all hover:border-zinc-600">
              
              {/* Original Text: Slides UP on hover */}
              <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-[150%]">
                Download App <Download size={16} />
              </span>
              
              {/* "Launching Soon" Text: Slides IN from bottom on hover */}
              <div className="absolute inset-0 z-10 flex items-center justify-center text-cyan-400 font-semibold transition-transform duration-300 translate-y-[150%] group-hover:translate-y-0">
                Launching Soon
              </div>

            </button>
          </div>

          {/* --- MOBILE MENU TOGGLE --- */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-zinc-950 border-b border-zinc-800 md:hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-zinc-400 hover:text-cyan-400 flex items-center justify-between group"
                  onClick={(e) => handleNavClick(e, link.href, link.type)}
                >
                  {link.name}
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <hr className="border-zinc-800 my-2" />
              
              {/* Login Button Removed */}

              {/* Updated Mobile Button: Static "Launching Soon" state */}
              <button 
                disabled
                className="w-full py-3 text-center bg-zinc-800 border border-zinc-700 text-zinc-500 font-bold rounded-lg cursor-not-allowed flex items-center justify-center gap-2"
              >
                Launching Soon <Download size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;