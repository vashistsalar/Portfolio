import React from 'react';
import { Check } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
            <span className="w-8 h-px bg-cyan-500/60"></span>
            Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects & Research
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          A collection of machine learning copilots, algorithm visualizers, and academic benchmarking research.
        </p>
      </div>

      <div className="space-y-8">

        {/* Project 1: Cynbit AI Project Copilot */}
        <div className="glass-card rounded-3xl p-8 lg:p-10 border-slate-800 transition-all hover:border-cyan-500/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  AI / Machine Learning
                </span>
                <span className="text-slate-500 text-xs font-mono">Python • Machine Learning Algorithms</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Cynbit AI Project Copilot
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Developed a full web-based AI copilot that accepts client problem statements and complex software requirements as raw inputs and dynamically generates project-oriented execution deliverables.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-400 pt-2">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <span>Applied Python-based machine learning algorithms to evaluate, tokenize, and process unstructured client requirements into structured deliverables.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <span>Architected a dynamic workflow keeping client and project fields empty until valid problem statements are supplied, successfully avoiding hallucinated prefilled assumptions.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300">Python</span>
                <span className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300">ML Algorithms</span>
                <span className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300">Requirements Pipeline</span>
                <span className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300">Web Architecture</span>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400">Focus Area</div>
                <div className="text-sm font-semibold text-white mt-0.5">Automated Project Synthesis & AI Reasoning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Sorting Algorithm Visualizer */}
        <div className="glass-card rounded-3xl p-8 lg:p-10 border-slate-800 transition-all hover:border-cyan-500/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  Interactive Web & Algorithmic Tool
                </span>
                <span className="text-slate-500 text-xs font-mono">React • HTML5 • CSS3 • JavaScript</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Sorting Algorithm Visualizer
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Engineered an interactive web application that visualizes 5 foundational sorting algorithms (Bubble, Quick, Insertion, Selection, Merge Sort) in real-time with step-by-step state animations.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-400 pt-2">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                  <span>Designed an interactive step-through mode allowing users to pause, inspect, and step forward during comparisons and swaps to maximize educational comprehension.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                  <span>Optimized React state updates and re-rendering logic, reducing animation frame lag by an estimated <strong>30%</strong> on larger array inputs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                  <span>Conducted peer testing where <strong>90% of respondents</strong> reported significantly improved algorithmic retention after utilizing the step-through mode.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Impact & Performance</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold font-mono text-teal-400">30%</div>
                  <div className="text-xs text-slate-400">Frame lag reduction via React state optimization</div>
                </div>
                <div>
                  <div class="text-2xl font-bold font-mono text-cyan-400">90%</div>
                  <div className="text-xs text-slate-400">Positive peer learning rate</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">5 Algorithms</div>
                  <div className="text-xs text-slate-400">Bubble, Quick, Insertion, Selection, Merge</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Research Paper on ML vs. DL */}
        <div className="glass-card rounded-3xl p-8 lg:p-10 border-slate-800 transition-all hover:border-indigo-500/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Research Paper • 6th Semester
                </span>
                <span className="text-slate-500 text-xs font-mono">Deep Learning • Computer Vision • Benchmarking</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Image Identification Using ML & Deep Learning Algorithms
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Authored an empirical research study comparing traditional machine learning approaches against modern deep neural architectures for computer vision image identification.
              </p>

              <ul className="space-y-2.5 text-sm text-slate-400 pt-2">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                  <span>Benchmarked classical machine learning models against deep convolutional architectures, demonstrating an estimated <strong>15–20 percentage point</strong> gain in classification accuracy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                  <span>Evaluated concrete engineering trade-offs in GPU training time and compute overhead, finding deep learning required <strong>3–4x more training time</strong> for the corresponding accuracy gains.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Research Takeaways</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold font-mono text-indigo-400">+15–20%</div>
                  <div className="text-xs text-slate-400">Accuracy enhancement with Deep Learning</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-violet-400">3–4x</div>
                  <div className="text-xs text-slate-400">Computational training time trade-off</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
