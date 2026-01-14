import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle, Scale, Info, ShieldAlert } from 'lucide-react';

const Disclaimer = () => {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-amber-500/30 selection:text-white pt-24">
      
      {/* --- Background Texture & Effects --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        {/* Subtle Red/Amber Glow for Cautionary Feel */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/5 rounded-full blur-[120px]"></div>
      </div>

      {/* --- Header / Navigation --- */}
      <div className="relative border-b border-white/10 bg-black/50 backdrop-blur-md mb-12">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2 text-amber-500">
            <Scale size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">Legal Center</span>
          </div>
        </div>
      </div>

      {/* --- Main Content --- */}
      <main className="relative max-w-4xl mx-auto px-6 pb-24">
        
        {/* Title Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono mb-6">
            <AlertCircle size={12} />
            <span>PART II</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Disclaimer
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-amber-500/50 pl-6">
            Please review the limitations of liability and warranties associated with using Perkart Forge.
          </p>
          <div className="mt-6 text-xs text-gray-500 font-mono">
            Effective Date: January 14, 2026
          </div>
        </div>

        {/* Disclaimer Content */}
        <div className="space-y-12">

          {/* 1. Purpose */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">01</span>
              Purpose of Platform
            </h2>
            <p className="leading-relaxed">
              Perkart Forge provides AI-driven analyses and insights derived from user-provided images and public/third-party sources. Outputs are for informational purposes, to aid discovery and decision support; they are not a substitute for independent professional advice.
            </p>
          </section>

          {/* 2. No Warranties */}
          <section className="bg-zinc-900/30 border border-white/5 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">02</span>
              No Warranties
            </h2>
            <p className="leading-relaxed mb-4">
              We provide the platform "as is" and "as available". To the fullest extent permitted by law, Perkart disclaims all warranties—express, implied, or statutory—including accuracy, completeness, merchantability, fitness for a particular purpose, non-infringement, and uninterrupted availability.
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-400 bg-black/20 p-3 rounded border border-white/5">
                <Info size={16} className="shrink-0 mt-0.5 text-amber-500" />
                <span>We do not guarantee that results will be error-free or that the service will meet your specific requirements.</span>
            </div>
          </section>

          {/* 3. Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">03</span>
              Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, Perkart shall not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages; or any loss of profits, revenues, data, or business; arising out of or related to use of the platform. Perkart’s aggregate liability for direct damages shall not exceed the amounts paid by you to Perkart in the twelve (12) months preceding the event giving rise to liability, or INR 10,000, whichever is higher.
            </p>
          </section>

          {/* 4. Third-Party Content */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">04</span>
              Third‑Party Content & Links
            </h2>
            <p className="leading-relaxed">
              The platform may reference or link to third‑party content, patents, research, deployments, or sites. Perkart does not endorse or control such content and is not responsible for its availability, accuracy, legality, or policies.
            </p>
          </section>

          {/* 5. Changes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">05</span>
              Changes to Disclaimer
            </h2>
            <p className="leading-relaxed">
              We may revise this Disclaimer periodically; continued use indicates acceptance of the revised terms.
            </p>
          </section>

        </div>

        {/* --- Footer Note --- */}
        <div className="mt-24 pt-8 border-t border-white/10 text-center text-sm text-gray-600 flex flex-col gap-2">
          <ShieldAlert className="w-6 h-6 text-zinc-700 mx-auto mb-2" />
          <p>© 2026 Perkart. All rights reserved.</p>
        </div>

      </main>
    </div>
  );
};

export default Disclaimer;