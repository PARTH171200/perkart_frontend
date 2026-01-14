import React from 'react';
import { Routes, Route } from 'react-router-dom';

// --- Shared Components ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

// --- Landing Page Sections ---
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import HowItWorks from './sections/HowItWorks';
import Insight from './sections/Insight';
import UseCase from './sections/UseCase';
import Features from './sections/Features';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';
import TermsAndConditions from './components/TermsAndConditions';
import BlogsAndInsights from './components/BlogsAndInsights';
import FAQs from './components/FAQs';
import Disclaimer from './components/Disclaimer';
import About from './components/About';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Navbar stays on top of all pages */}
      <Navbar />

      <Routes>
        {/* 1. The Home Page (All your landing sections) */}
        <Route path="/" element={
          <main>
            <Hero />
            <Problem />
            <HowItWorks />
            <Insight />
            <UseCase />
            <Features />
            <Pricing />
            <Contact />
          </main>
        } />

        {/* 2. The Privacy Policy Page */}
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/BlogsAndInsights" element={<BlogsAndInsights />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/About" element={<About />} />
      </Routes>

      {/* Footer stays at the bottom of all pages */}
      <Footer />
    </div>
  );
}

export default App;