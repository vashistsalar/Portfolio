import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const history = [
    {
      degree: 'B.E. in Computer Science Engineering (AI & Machine Learning)',
      institution: 'Chandigarh University, Gharuan, Punjab',
      highlight: 'In collaboration with IBM',
      period: 'Jan 2024 – Present (Batch 2023–2027)',
      score: 'GPA: 7.90',
      desc: 'Curriculum focused on Artificial Intelligence, Deep Learning, Core Data Structures, Operating Systems, Database Management Systems, Computer Networks, and System Design.',
      dotColor: 'bg-cyan-500',
      periodBadge: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/40',
    },
    {
      degree: 'Intermediate (Class XII - CBSE)',
      institution: 'A.S.A Saraswati Vidya Mandir, Roorkee, Uttarakhand',
      highlight: null,
      period: '2022 – 2023',
      score: 'Percentage: 81%',
      desc: null,
      dotColor: 'bg-indigo-500',
      periodBadge: 'text-indigo-400 bg-indigo-950/60 border-indigo-800/40',
    },
    {
      degree: 'Matriculation (Class X - CBSE)',
      institution: 'A.S.A Saraswati Vidya Mandir, Roorkee, Uttarakhand',
      highlight: null,
      period: '2020 – 2021',
      score: 'Percentage: 91.3%',
      desc: null,
      dotColor: 'bg-slate-600',
      periodBadge: 'text-slate-400 bg-slate-800/60 border-slate-700',
    },
  ];

  return (
    <section id="education" className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
          <span className="w-8 h-px bg-cyan-500/60"></span>
          Academic Foundation
          <span className="w-8 h-px bg-cyan-500/60"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Education History
        </h2>
      </motion.div>

      <div className="relative border-l border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
        {history.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
            className="relative group"
          >
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full ${item.dotColor} border-4 border-[#07090e] group-hover:scale-125 transition-transform`}
            ></div>
            <div className="glass-card rounded-2xl p-6 sm:p-7 border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className={`text-xs font-mono px-2.5 py-0.5 rounded border ${item.periodBadge}`}>
                  {item.period}
                </span>
                <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-800/40">
                  {item.score}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
              <p className="text-sm font-medium text-slate-300 mb-3">
                {item.institution}{' '}
                {item.highlight && <span className="text-slate-500">• {item.highlight}</span>}
              </p>
              {item.desc && (
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
