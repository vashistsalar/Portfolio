import React, { useState } from 'react';
import { Menu, X, FileText, Mail, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
              <span className="font-mono font-bold text-sm bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                &lt;VS/&gt;
              </span>
            </div>
          </div>
          <div>
            <span className="font-bold text-white text-base tracking-tight group-hover:text-cyan-300 transition-colors">
              Vashist Salar
            </span>
            <span className="block text-[11px] font-mono text-slate-400">
              AI/ML • Competitive Coder
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="./Vashist_Salar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Vashist_Salar_Resume.pdf"
            className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 transition-all flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </a>
          <a
            href="mailto:vashistsalar2005@gmail.com"
            className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 transition-all flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Contact</span>
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/20 transition-all flex items-center gap-2"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-slate-400 hover:text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 border-t border-slate-800/80 bg-[#07090e]/95 backdrop-blur-xl">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex gap-3">
              <a
                href="./Vashist_Salar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Vashist_Salar_Resume.pdf"
                className="flex-1 py-2 text-center text-xs font-semibold rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-cyan-500 text-white"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
