import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';
// 1. Import the logo
import logo from '../assets/image.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "About Perkart Forge", href: "/About" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
  ];

  const resourceLinks = [
    { name: "FAQs", href: "/FAQs" },
    { name: "Blog & Insights", href: "/BlogsAndInsights" },
    { name: "Disclaimer", href: "/Disclaimer" },
    { name: "Privacy Policy", href: "/PrivacyPolicy" },
    { name: "Terms & Conditions", href: "/TermsAndConditions" },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "X (Twitter)" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden font-sans border-t border-white/10">
      
      {/* --- Aesthetic Elements --- */}
      {/* Top Gradient Divider (Updated to Cyan) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- MAIN GRID CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* COLUMN 1: BRAND */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group cursor-default">
              {/* Logo Image */}
              <img 
                src={logo} 
                alt="Perkart Forge Logo" 
                className="w-10 h-10 rounded-lg object-contain border border-white/10" 
              />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold text-white tracking-wide">
                  PERKART
                </span>
                <span className="text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase">
                  FORGE
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Turning real-world visuals into innovation opportunities. 
              Bridging the gap between physical sight and digital insight.
            </p>
            
            {/* Abstract Tech Line (Updated to Cyan) */}
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full opacity-50"></div>
          </div>

          {/* COLUMN 2: PRODUCT */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase text-opacity-80">Product</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <a href={link.href} className="text-gray-500 text-sm hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                      <span className="w-0 group-hover:w-1.5 h-[1px] bg-cyan-400 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-gray-500 text-sm hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                      <span className="w-0 group-hover:w-1.5 h-[1px] bg-cyan-400 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: RESOURCES */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase text-opacity-80">Resources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                   {link.href.startsWith('#') ? (
                    <a href={link.href} className="text-gray-500 text-sm hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                      <span className="w-0 group-hover:w-1.5 h-[1px] bg-cyan-400 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-gray-500 text-sm hover:text-cyan-400 transition-colors flex items-center gap-1 group">
                      <span className="w-0 group-hover:w-1.5 h-[1px] bg-cyan-400 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT & SOCIAL */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase text-opacity-80">Connect</h4>
            <div className="space-y-4 mb-8">
              <a href="https://www.perkart.in" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <Globe size={16} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm">www.perkart.in</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-cyan-400" />
              </a>
              <a href="mailto:support@perkart.in" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <Mail size={16} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm">support@perkart.in</span>
              </a>
            </div>

            {/* Social Icons (Updated Hover Colors) */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <span>&copy; {currentYear} Perkart. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-4 font-mono">
             <span className="hidden md:block w-1 h-1 rounded-full bg-gray-700"></span>
             <span>Built for founders, innovators & investors</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;