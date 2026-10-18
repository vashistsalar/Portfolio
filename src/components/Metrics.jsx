import React from 'react';

export default function Metrics() {
  const metrics = [
    {
      value: '700+',
      label: 'DSA Solved',
      sublabel: 'LeetCode, Codeforces, CodeChef',
      gradient: 'from-cyan-400 to-teal-300',
    },
    {
      value: '3,272',
      label: 'Codeforces Rank',
      sublabel: 'Global Competitive Rating',
      gradient: 'from-indigo-400 to-cyan-400',
    },
    {
      value: '7.90',
      label: 'B.E. GPA',
      sublabel: 'CSE (AI & ML - IBM)',
      gradient: 'from-violet-400 to-indigo-300',
    },
    {
      value: '3+',
      label: 'Certifications',
      sublabel: 'Microsoft Azure & Google Cloud',
      gradient: 'from-emerald-400 to-teal-300',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 -mt-6 mb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-6 text-center group hover:bg-slate-900/80 transition-all"
          >
            <div
              className={`text-3xl sm:text-4xl font-extrabold font-mono bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-1`}
            >
              {metric.value}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              {metric.label}
            </div>
            <div className="text-[11px] text-slate-500">
              {metric.sublabel}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
