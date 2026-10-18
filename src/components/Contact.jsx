import React from 'react';
import { Mail, Phone, Linkedin, Send, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-5 sm:px-8 py-20">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border-cyan-500/30 text-center relative overflow-hidden">
        
        <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
          <span className="w-8 h-px bg-cyan-500/60"></span>
          Let's Connect
          <span className="w-8 h-px bg-cyan-500/60"></span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Have an Internship or Project?
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-10">
          I am actively looking for AI/ML engineering and software developer internships where I can contribute to high-impact systems. Feel free to reach out directly!
        </p>

        {/* Quick Contacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
          
          {/* Email Box */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
              <Mail className="w-4 h-4" />
              Email
            </div>
            <a
              href="mailto:vashistsalar2005@gmail.com"
              className="text-xs font-semibold text-white hover:text-cyan-300 transition-colors break-all"
            >
              vashistsalar2005@gmail.com
            </a>
          </div>

          {/* Phone Box */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-mono mb-2">
              <Phone className="w-4 h-4" />
              Phone
            </div>
            <a
              href="tel:+916398159052"
              className="text-xs font-semibold text-white hover:text-cyan-300 transition-colors"
            >
              +91 6398159052
            </a>
          </div>

          {/* LinkedIn Box */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </div>
            <a
              href="https://linkedin.com/in/vashist-salar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-white hover:text-cyan-300 transition-colors"
            >
              linkedin.com/in/vashist-salar
            </a>
          </div>

        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:vashistsalar2005@gmail.com?subject=Internship%20Opportunity%20-%20Vashist%20Salar"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Send Direct Email</span>
          </a>

          <a
            href="https://linkedin.com/in/vashist-salar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl glass-card text-white hover:text-cyan-300 font-semibold text-sm transition-all flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4 text-cyan-400" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
}
