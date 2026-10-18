import React, { useState } from 'react';
import { Layers, Download, Linkedin, Copy, Check, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vashistsalar2005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="min-h-[88vh] flex items-center justify-center px-5 sm:px-8 py-14">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border-cyan-500/30 text-xs font-medium text-slate-300 mb-8 animate-pulse-subtle">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4"></span>
          <span>Actively Seeking AI/ML & Software Engineering Internships</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Engineering Intelligent Systems & <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
            Algorithmic Solutions
          </span>
        </h1>

        {/* Subtitle & Role */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light mb-8 leading-relaxed">
          Hi, I'm <strong className="text-white font-semibold">Vashist Salar</strong> — an Aspiring AI/ML Engineer and final-year Computer Science (AI & ML with IBM) undergraduate. Passionate about machine learning pipelines, deep learning research, and high-performance algorithms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Layers className="w-4 h-4" />
            <span>View Featured Projects</span>
          </a>

          <a
            href="./Vashist_Salar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Vashist_Salar_Resume.pdf"
            className="px-6 py-3.5 rounded-xl glass-card text-white hover:text-cyan-300 font-semibold text-sm transition-all transform hover:-translate-y-0.5 flex items-center gap-2 border-cyan-500/30"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>

          <a
            href="https://linkedin.com/in/vashist-salar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl glass-card text-white hover:text-cyan-300 font-semibold text-sm transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn Profile</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-6 py-3.5 rounded-xl border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800 text-slate-300 font-medium text-sm transition-all flex items-center gap-2 group"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Links / Profiles */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-mono">
          <a
            href="mailto:vashistsalar2005@gmail.com"
            className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            vashistsalar2005@gmail.com
          </a>
          <span className="text-slate-700">•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-4 h-4 text-indigo-400" />
            Gharuan, Mohali, Punjab / Roorkee
          </span>
          <span className="text-slate-700">•</span>
          <a
            href="tel:+916398159052"
            className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-4 h-4 text-teal-400" />
            +91 6398159052
          </a>
        </div>

      </div>
    </section>
  );
}
