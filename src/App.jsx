import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Ambient Light Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[140px] animate-blob-slow"></div>
        <div
          className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] animate-blob-slow"
          style={{ animationDelay: '3s' }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[150px] animate-blob-slow"
          style={{ animationDelay: '6s' }}
        ></div>
      </div>

      {/* Background Grid Overlay */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 pt-28">
        <Hero />
        <Metrics />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
