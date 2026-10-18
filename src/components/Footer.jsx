import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-[#05070a] py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div>
          Designed & Built by{' '}
          <span className="text-slate-300 font-semibold">Vashist Salar</span> © {currentYear}
        </div>
        <div className="flex items-center gap-6 text-slate-400">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">
            Back to top ↑
          </a>
          <a
            href="mailto:vashistsalar2005@gmail.com"
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/vashist-salar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
