import React from 'react';
import { Award, Cloud, Cpu, Check } from 'lucide-react';

export default function Certifications() {
  const certs = [
    {
      title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      date: 'Nov 2025',
      desc: 'Foundational knowledge of machine learning workloads, computer vision, natural language processing, and conversational AI on Microsoft Azure.',
      icon: Award,
      iconColor: 'text-blue-400',
      bgIcon: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      date: 'Jan 2025',
      desc: 'Explores large language models (LLMs), generative principles, attention mechanisms, and enterprise Google Cloud Vertex AI integrations.',
      icon: Cloud,
      iconColor: 'text-indigo-400',
      bgIcon: 'bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'Artificial Intelligence with Machine Learning',
      issuer: 'Pregrad',
      date: 'Oct–Dec 2023',
      desc: 'Practical immersion in supervised and unsupervised ML pipelines, feature engineering, regression, classification, and model validation.',
      icon: Cpu,
      iconColor: 'text-teal-400',
      bgIcon: 'bg-teal-500/10 border-teal-500/20',
    },
  ];

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
          <span className="w-8 h-px bg-cyan-500/60"></span>
          Credentials
          <span className="w-8 h-px bg-cyan-500/60"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Industry Certifications
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Accredited certifications from Microsoft, Google Cloud, and specialized AI institutes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certs.map((cert, idx) => {
          const Icon = cert.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg ${cert.bgIcon} border flex items-center justify-center ${cert.iconColor}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-xs text-cyan-400 font-mono mb-3">{cert.issuer}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{cert.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Issuer: {cert.issuer}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
