import React from 'react';

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
          <span className="w-8 h-px bg-cyan-500/60"></span>
          Competitive Milestones
          <span className="w-8 h-px bg-cyan-500/60"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Problem Solving & Algorithmic Excellence
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Proven competitive track record solving challenging algorithmic problems under tight constraints.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Codeforces Card */}
        <div className="glass-card rounded-3xl p-8 border-slate-800 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                CF
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Codeforces Competitions</h3>
                <span className="text-xs font-mono text-cyan-400">Global Contestant</span>
              </div>
            </div>
            <span className="text-xs font-mono bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
              Rank #3,272
            </span>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Achieved a competitive <strong>global rank of 3,272</strong> on Codeforces by participating in timed division contests, designing $O(N \log N)$ and dynamic programming algorithms with strict memory and time bounds.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Platform Global Ranking:</span>
            <span className="text-cyan-400 font-semibold text-sm">3,272</span>
          </div>
        </div>

        {/* LeetCode & CodeChef Card */}
        <div className="glass-card rounded-3xl p-8 border-slate-800 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                700+
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">700+ DSA Problems Solved</h3>
                <span className="text-xs font-mono text-indigo-400">LeetCode, Codeforces, CodeChef</span>
              </div>
            </div>
            <span className="text-xs font-mono bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30">
              Milestone
            </span>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Extensive problem-solving experience across essential coding patterns including Dynamic Programming, Trees & Graphs, Topological Sorting, Binary Exponentiation, Two Pointers, and Backtracking.
          </p>

          <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="text-emerald-400 font-bold">Easy</div>
              <div className="text-[10px] text-slate-500">Mastered</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="text-amber-400 font-bold">Medium</div>
              <div className="text-[10px] text-slate-500">Deep Practice</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="text-rose-400 font-bold">Hard</div>
              <div className="text-[10px] text-slate-500">Contest Ready</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
