import React from 'react';
import { Code, BrainCircuit, Layout, Cpu, Terminal, Trophy } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      desc: 'Languages utilized for algorithmic contests, scripting, and system programming.',
      icon: Code,
      iconColor: 'text-cyan-400',
      bgGlow: 'bg-cyan-500/10 border-cyan-500/20',
      tagColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
      skills: ['C++ (STL, Advanced DSA)', 'Python 3', 'Java', 'C'],
    },
    {
      title: 'AI, ML & Data Science',
      desc: 'Machine learning models, neural network fundamentals, and exploratory data pipelines.',
      icon: BrainCircuit,
      iconColor: 'text-indigo-400',
      bgGlow: 'bg-indigo-500/10 border-indigo-500/20',
      tagColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
      skills: [
        'Machine Learning',
        'Deep Learning Fundamentals',
        'Pandas',
        'Matplotlib',
        'Data Visualization',
      ],
    },
    {
      title: 'Web Technologies',
      desc: 'Frontend engineering for interactive dashboards, state visualizers, and clients.',
      icon: Layout,
      iconColor: 'text-teal-400',
      bgGlow: 'bg-teal-500/10 border-teal-500/20',
      tagColor: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
      skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / Tailwind'],
    },
    {
      title: 'Core CS Foundations',
      desc: 'Underlying academic and systemic fundamentals driving scalable code.',
      icon: Cpu,
      iconColor: 'text-violet-400',
      bgGlow: 'bg-violet-500/10 border-violet-500/20',
      tagColor: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
      skills: [
        'Data Structures & Algorithms',
        'System Design',
        'DBMS & SQL',
        'Operating Systems',
        'Computer Networks',
      ],
    },
    {
      title: 'Tools & Environments',
      desc: 'Productivity platforms, version control, and development environments.',
      icon: Terminal,
      iconColor: 'text-amber-400',
      bgGlow: 'bg-amber-500/10 border-amber-500/20',
      tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
    },
    {
      title: 'Competitive Mindset',
      desc: 'Applied rigor across time-space trade-offs and competitive benchmarking.',
      icon: Trophy,
      iconColor: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10 border-emerald-500/20',
      tagColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      skills: [
        'Dynamic Programming',
        'Graph Theory & Trees',
        'Binary Search',
        'Greedy Paradigms',
      ],
    },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
          <span className="w-8 h-px bg-cyan-500/60"></span>
          Technical Arsenal
          <span className="w-8 h-px bg-cyan-500/60"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Skills, Tools & Engineering Domains
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          A comprehensive breakdown of my engineering capabilities across artificial intelligence, core computer science, systems, and modern frontend interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl ${cat.bgGlow} border flex items-center justify-center mb-5 ${cat.iconColor}`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-xs text-slate-400 mb-4">{cat.desc}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-3 py-1 rounded-lg text-xs font-mono border ${cat.tagColor}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
