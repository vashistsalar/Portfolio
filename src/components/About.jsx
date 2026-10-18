import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Algorithmic Problem Solving',
      desc: '700+ problems in C++, Python, and Java.',
      color: 'text-cyan-400',
    },
    {
      title: 'Machine Learning & Data',
      desc: 'Model training, evaluation & feature pipelines.',
      color: 'text-indigo-400',
    },
    {
      title: 'Interactive Web Applications',
      desc: 'Optimized state rendering with React & modern JS.',
      color: 'text-teal-400',
    },
    {
      title: 'Research & Benchmarking',
      desc: 'Empirical trade-off analyses (accuracy vs compute).',
      color: 'text-violet-400',
    },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: Bio & Highlights */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span className="w-8 h-px bg-cyan-500/60"></span>
            Profile Summary
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Bridging Theoretical Algorithms with Modern{' '}
            <span className="text-cyan-400">AI Architectures</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            I am a final-year Computer Science Engineering undergraduate specializing in{' '}
            <strong className="text-cyan-300">Artificial Intelligence & Machine Learning (IBM collaborative)</strong>{' '}
            at Chandigarh University. My focus lies at the intersection of algorithmic efficiency and intelligent automated systems.
          </p>
          <p className="text-slate-300 text-base leading-relaxed">
            Through competitive programming across platforms like LeetCode, Codeforces, and CodeChef, I have developed deep intuition for edge-case resilience, complexity optimization, and clean data structures. Concurrently, my hands-on project work ranges from developing requirement-processing AI copilots to authoring comparative research on Machine Learning and Deep Learning vision models.
          </p>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800"
              >
                <CheckCircle2 className={`w-5 h-5 ${item.color} mt-0.5 shrink-0`} />
                <div>
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Code Block Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-5"
        >
          <div className="rounded-2xl glass-card p-6 border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="text-xs font-mono text-slate-400 ml-2">engineer_profile.json</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                ACTIVE
              </span>
            </div>

            <pre className="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
              <code>{`{
  "candidate": "Vashist Salar",
  "degree": "B.E. CSE (AI & ML)",
  "institution": "Chandigarh University",
  "batch": "2023 - 2027",
  "specialization": "IBM AI & ML",
  "current_gpa": 7.90,
  "competitive_programming": {
    "codeforces_global_rank": 3272,
    "dsa_problems_solved": 700,
    "primary_languages": ["C++", "Python", "Java"]
  },
  "status": "Ready for Internships"
}`}</code>
            </pre>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
