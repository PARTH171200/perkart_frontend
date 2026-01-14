import React, { useEffect } from 'react'; // <--- 1. Import useEffect
import { ArrowLeft, Shield, Lock, FileText, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom'; // <--- 2. Import Link for "Back to Home"

const PrivacyPolicy = () => {
  
  // <--- 3. ADD THIS BLOCK: Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-amber-500/30 selection:text-white pt-24"> 
      {/* Added pt-24 above to push content down below the fixed Main Navbar */}
      
      {/* --- Background Texture & Effects --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/5 rounded-full blur-[120px]"></div>
      </div>

      {/* --- Internal Header (Optional: You can remove this if using the Main Navbar) --- */}
      <div className="relative border-b border-white/10 bg-black/50 backdrop-blur-md mb-12">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2 text-amber-500">
            <Shield size={18} />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">Legal Center</span>
          </div>
        </div>
      </div>

      {/* --- Main Content --- */}
      <main className="relative max-w-4xl mx-auto px-6 pb-24">
        
        {/* Title Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono mb-6">
            <Lock size={12} />
            <span>PART I</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-amber-500/50 pl-6">
            This document outlines how Perkart Forge handles your data. We act as a Data Fiduciary under the DPDP Act, 2023.
          </p>
          <div className="mt-6 text-xs text-gray-500 font-mono">
            Last Updated: January 14, 2026
          </div>
        </div>

        {/* Legal Text Content */}
        <div className="space-y-12">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">01</span>
              Introduction
            </h2>
            <p className="leading-relaxed">
              This Privacy Policy explains how Perkart ("we", "us", "our") collects, uses, discloses, and protects personal data when you use Perkart Forge and other Perkart digital services. We act as a Data Fiduciary under the DPDP Act, 2023 for personal data we process.
            </p>
          </section>

          {/* 2. Scope & Applicability */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">02</span>
              Scope & Applicability
            </h2>
            <p className="leading-relaxed">
              This Policy applies to digital personal data collected online or digitised from offline sources in connection with Perkart services offered to individuals in India. It also applies to processing by our service providers acting on our behalf (Data Processors).
            </p>
          </section>

          {/* 3. Categories of Data We Collect */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">03</span>
              Categories of Data We Collect
            </h2>
            <ul className="grid gap-3 mt-4">
              {[
                { label: "Account Data", desc: "name, email, mobile number, organisation, role." },
                { label: "Content & Inputs", desc: "images uploaded/captured, prompts, annotations, feedback." },
                { label: "Technical Data", desc: "device identifiers, IP address, OS/browser, app telemetry, logs, cookies, pixels, SDK diagnostics." },
                { label: "Transactional Data", desc: "plan selection, invoices, limited payment instrument identifiers (processed via PCI-DSS compliant payment gateways)." },
                { label: "Communications", desc: "support tickets, grievance submissions, consent records." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <div>
                    <span className="text-white font-medium">{item.label}:</span> <span className="text-gray-400">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Lawful Grounds & Purposes of Processing */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">04</span>
              Lawful Grounds & Purposes of Processing
            </h2>
            <p className="leading-relaxed">
              We process personal data based on: (a) consent; and/or (b) certain legitimate uses permitted by law (e.g., data voluntarily provided for a specific purpose, compliance, prevention of fraud/IT incidents). We use data to: deliver and improve services; perform AI analysis on uploaded images; personalise experience; provide customer support; ensure security; comply with law; and enforce our Terms.
            </p>
          </section>

          {/* 5. Children’s Data */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">05</span>
              Children’s Data
            </h2>
            <p className="leading-relaxed">
              Perkart is intended for users aged 18+. We do not knowingly collect personal data of children. Where processing is unavoidable, we will obtain verifiable parental/lawful guardian consent and apply heightened safeguards.
            </p>
          </section>

          {/* 6. Notice & Consent Management */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">06</span>
              Notice & Consent Management
            </h2>
            <ul className="space-y-2 list-disc pl-5 marker:text-amber-500">
              <li>Transparent notices identify Perkart, purposes, data items, rights, grievance contact, and Data Protection Board route.</li>
              <li>Consent is free, specific, informed, unconditional, and unambiguous, recorded via clear affirmative action.</li>
              <li>Withdrawal of consent is as easy as giving consent; upon withdrawal we cease processing except where retention is required by law.</li>
            </ul>
          </section>

          {/* 7. Data Sharing & International Transfers */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">07</span>
              Data Sharing & International Transfers
            </h2>
            <p className="leading-relaxed">
              We do not sell personal data. We share limited data with vetted service providers (cloud hosting, security, analytics, payments, CRM) under data processing agreements. Cross-border transfers may occur subject to applicable law and contractual safeguards. We will not transfer personal data to jurisdictions restricted by government notification.
            </p>
          </section>

          {/* 8. Security Measures */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">08</span>
              Security Measures
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
               {[
                 "Encryption in transit, access controls, least-privilege, MFA, network segmentation.",
                 "Secure development lifecycle, vulnerability management, periodic penetration tests.",
                 "Vendor due diligence and contractual data protection obligations.",
                 "Incident response playbooks and breach notification processes as required by law."
               ].map((text, i) => (
                 <div key={i} className="bg-zinc-900/50 p-4 rounded border border-white/5 text-sm">
                   {text}
                 </div>
               ))}
            </div>
          </section>

          {/* 9. Retention & Minimisation */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">09</span>
              Retention & Minimisation
            </h2>
            <p className="leading-relaxed">
              We retain personal data only for as long as necessary for stated purposes or as required by law (e.g., tax/accounting). We periodically review retention schedules and irreversibly delete or de-identify data once the purpose is exhausted.
            </p>
          </section>

          {/* 10. Your Rights */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">10</span>
              Your Rights
            </h2>
            <ul className="space-y-3">
              {[
                "Right to access information about your personal data processed by us.",
                "Right to correction and erasure of personal data, subject to legal retention.",
                "Right to grievance redressal through our Grievance Officer and escalation to the Data Protection Board of India.",
                "Right to nominate another person to exercise rights in case of death or incapacity."
              ].map((right, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                   <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                   {right}
                </li>
              ))}
            </ul>
          </section>

          {/* 11. Cookies & Tracking Technologies */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">11</span>
              Cookies & Tracking Technologies
            </h2>
            <p className="leading-relaxed">
              We use cookies and similar technologies for functionality, security, and analytics. You can control cookies via browser/app settings; disabling may impact functionality.
            </p>
          </section>

          {/* 12. Grievance & Contact */}
          <section className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">12</span>
              Grievance & Contact
            </h2>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <MapPin className="text-amber-500 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-medium mb-1">Registered Address</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      No. 74, MASS Complex, 3rd Floor, Sarakki Industrial Layout,<br />
                      JP Nagar 3rd Phase, 15th Cross Road,<br />
                      Bangalore – 560078, Karnataka, India.
                    </p>
                  </div>
               </div>
               
               <div className="flex gap-4">
                  <Mail className="text-amber-500 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-medium mb-1">Email Support</h3>
                    <a href="mailto:support@perkart.in" className="text-amber-400 hover:text-amber-300 transition-colors">
                      support@perkart.in
                    </a>
                  </div>
               </div>
            </div>
          </section>

          {/* 13. Updates to this Policy */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-800 text-xs font-mono text-amber-500">13</span>
              Updates to this Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Policy to reflect legal or operational changes. Material changes will be notified via the service or email. The "Effective" date at the top will be updated.
            </p>
          </section>

        </div>

      </main>
    </div>
  );
};

export default PrivacyPolicy;