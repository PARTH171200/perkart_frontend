import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, ShieldCheck, FileSignature, AlertTriangle, Gavel } from 'lucide-react';

const TermsAndConditions = () => {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-amber-500/30 selection:text-white pt-24">
      
      {/* --- Background Texture & Effects --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        {/* Amber Glow (Top Right) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/5 rounded-full blur-[120px]"></div>
        {/* Indigo Glow (Bottom Left - subtle contrast) */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/5 rounded-full blur-[120px]"></div>
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
            <FileSignature size={12} />
            <span>PART III</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-amber-500/50 pl-6">
            Please read these terms carefully before using Perkart Forge services.
          </p>
          <div className="mt-6 text-xs text-gray-500 font-mono">
            Effective Date: January 14, 2026
          </div>
        </div>

        {/* Terms Content */}
        <div className="space-y-12">

          {/* 1. Acceptance */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">01</span>
              Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing or using Perkart services, you agree to these Terms & Conditions ("Terms"). If you do not agree, do not use the services.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">02</span>
              Eligibility & Accounts
            </h2>
            <p className="leading-relaxed">
              You must be at least 18 years old and capable of forming a contract under Indian law. You are responsible for account credentials and for all activities under your account. Promptly notify us of suspected compromise.
            </p>
          </section>

          {/* 3. Plans & Billing */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">03</span>
              Plans, Billing & Taxes
            </h2>
            <p className="leading-relaxed">
              Plan tiers include Free, Premium, Corporate & Administration options. Fees are billed in INR unless specified. Taxes (GST and applicable levies) are additional. Except as mandated by law or our refund policy, fees are non‑refundable. We may change prices or features with prior notice.
            </p>
          </section>

          {/* 4. License */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">04</span>
              License & Permitted Use
            </h2>
            <p className="leading-relaxed">
              Perkart grants you a limited, non‑exclusive, non‑transferable, revocable license to access and use the services for lawful purposes. You will comply with all applicable laws and these Terms.
            </p>
          </section>

          {/* 5. User Content */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">05</span>
              User Content & License to Perkart
            </h2>
            <p className="leading-relaxed">
              You retain ownership of images and content you submit. You grant Perkart a worldwide, royalty‑free license to host, process, analyze, reproduce, and create derivative works from such content solely to provide and improve the services, ensure safety/security, comply with law, and develop features.
            </p>
          </section>

          {/* 6. Acceptable Use */}
          <section className="bg-zinc-900/30 border border-white/5 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">06</span>
              Acceptable Use & Prohibited Conduct
            </h2>
            <ul className="space-y-3">
              {[
                "No unlawful, harmful, defamatory, obscene, or infringing content.",
                "No reverse engineering, decompiling, scraping, automated bulk requests, or circumvention of technical controls.",
                "No security testing except under a written authorization.",
                "No attempts to violate privacy, intellectual property, or publicity rights of others."
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                  <span className="text-gray-300 text-sm">{rule}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 7. Moderation */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">07</span>
              Content Moderation, Notice & Takedown
            </h2>
            <p className="leading-relaxed">
              We may remove or disable access to content that violates law or policy upon actual knowledge, government/Board notice, or valid rights‑holder notice. Users must not re‑upload restricted content. We maintain a grievance mechanism and cooperate with lawful requests.
            </p>
          </section>

          {/* 8. IP */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">08</span>
              Intellectual Property
            </h2>
            <p className="leading-relaxed">
              Perkart and its licensors own all rights in the platform, including software, models, logos, and trademarks. You may not use Perkart marks without written permission.
            </p>
          </section>

          {/* 9. Confidentiality */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">09</span>
              Confidentiality & Data Protection
            </h2>
            <p className="leading-relaxed">
              Both parties will keep non‑public information confidential. Perkart will process personal data per the Privacy Policy and applicable law. You will not upload another’s personal data without lawful basis and will comply with consent obligations where required.
            </p>
          </section>

          {/* 10. Third Party */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">10</span>
              Third‑Party Services
            </h2>
            <p className="leading-relaxed">
              Certain features rely on third‑party services (e.g., hosting, payments, analytics). Their terms and privacy practices apply; Perkart is not responsible for their acts or omissions.
            </p>
          </section>

          {/* 11. Termination */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">11</span>
              Termination & Suspension
            </h2>
            <p className="leading-relaxed">
              We may suspend or terminate access for violations, non‑payment, fraud/abuse, legal risk, or per governmental/legal directive. You may cease use at any time. On termination, your license ends and we may retain limited records per law.
            </p>
          </section>

          {/* 12. Indemnity */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">12</span>
              Indemnity
            </h2>
            <p className="leading-relaxed">
              You agree to indemnify and hold harmless Perkart, its directors, officers, employees, and agents from claims arising out of your use of the services, violation of these Terms, or infringement of any rights by your content or conduct.
            </p>
          </section>

          {/* 13. Governing Law */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">13</span>
              Governing Law & Dispute Resolution
            </h2>
            <div className="bg-zinc-900/50 p-4 rounded-lg border border-white/5 flex gap-4 items-start">
               <Gavel className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
               <p className="text-sm leading-relaxed text-gray-300">
                 These Terms are governed by the laws of India. Courts and tribunals in Bengaluru, Karnataka shall have exclusive jurisdiction. Without limiting statutory rights, the parties will first attempt amicable resolution through the Grievance Officer.
               </p>
            </div>
          </section>

          {/* 14. Changes */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">14</span>
              Changes to Terms
            </h2>
            <p className="leading-relaxed">
              We may update these Terms; material changes will be notified in advance. Continued use constitutes acceptance.
            </p>
          </section>

          {/* 15. Miscellaneous */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">15</span>
              Miscellaneous
            </h2>
            <ul className="grid gap-3 mt-4">
              {[
                { title: "Assignment", text: "You may not assign these Terms without our consent; we may assign to an affiliate or acquirer." },
                { title: "Force Majeure", text: "We are not liable for delays/failures due to events beyond reasonable control." },
                { title: "Severability", text: "If any provision is held invalid, the remainder remains in effect." },
                { title: "Entire Agreement", text: "These Terms, together with the Privacy Policy and Disclaimer, form the entire agreement." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                  <span>
                    <strong className="text-white">{item.title}:</strong> <span className="text-gray-400">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* --- Footer Note --- */}
        <div className="mt-24 pt-8 border-t border-white/10 text-center text-sm text-gray-600 flex flex-col gap-2">
          <ShieldCheck className="w-6 h-6 text-zinc-700 mx-auto mb-2" />
          <p>© 2026 Perkart. All rights reserved.</p>
        </div>

      </main>
    </div>
  );
};

export default TermsAndConditions;