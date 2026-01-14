import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // 1. Import Router hooks
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ChevronRight } from "lucide-react";
import logo from "../assets/image.png"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // 2. Get current route

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Updated Links: Use "/#id" for sections on Home
  const navLinks = [
    { name: "Home", href: "/", type: "link" },
    { name: "About", href: "/about", type: "link" }, // External Page
    { name: "How It Works", href: "/#how-it-works", type: "hash" }, // Section on Home
    { name: "Insights", href: "/#insight", type: "hash" }, // Section on Home
    { name: "Pricing", href: "/#pricing", type: "hash" }, // Section on Home
  ];

  // 4. Smart Scroll Function
  const handleNavClick = (e: React.MouseEvent, href: string, type: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu

    if (type === 'hash') {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);

      // If we are ALREADY on home page, prevent navigation and just scroll
      if (location.pathname === '/' && element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // If we are on "About" page, do nothing here -> The <Link> will navigate to "/" and browser handles the hash
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

          {/* --- DESKTOP CTAs --- */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors px-4 py-2">
              Login
            </button>
            <button className="group relative px-5 py-2.5 bg-white text-black text-sm font-bold rounded-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <span className="relative z-10 flex items-center gap-2">
                Download App <Download size={16} />
              </span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-cyan-200 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
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
              <button className="w-full py-3 text-center text-zinc-300 font-semibold border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors">
                Login
              </button>
              <button className="w-full py-3 text-center bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2">
                Download App <Download size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .group-hover\\:animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;