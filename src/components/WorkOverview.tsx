import React from 'react';
import { Film, Compass, Layers, Sparkles } from 'lucide-react';

interface WorkOverviewProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const WorkOverview: React.FC<WorkOverviewProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const categories = [
    { id: 'all', label: 'ALL SELECTED WORK', count: '12 PROJECTS' },
    { id: 'travel', label: '01 — TRAVEL & TOURISM', count: '6 ARCHIVES' },
    { id: 'destination', label: '02 — DESTINATION & REVIEW', count: '3 ARCHIVES' },
    { id: 'commercial', label: '03 — COMMERCIAL CONTENT', count: '3 ARCHIVES' },
  ];

  return (
    <section id="overview" className="relative w-full py-20 px-4 sm:px-6 lg:px-12 bg-forest-950 overflow-hidden">
      {/* Ambient Forest Bokeh Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-800/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-pill text-[11px] font-mono text-gold-500 uppercase tracking-widest mb-4">
          <Layers className="w-3.5 h-3.5 text-gold-400" />
          <span>03 / PORTFOLIO DIRECTORY</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wider uppercase font-bold mb-4">
          WORK OVERVIEW
        </h2>

        <p className="max-w-2xl text-xs sm:text-sm text-white/60 font-sans leading-relaxed mb-10">
          Tập trung vào ba tuyến nội dung cốt lõi: Du lịch trải nghiệm, Review phong cách sống và Nội dung quảng cáo thương mại.
        </p>

        {/* Segmented Glassmorphism Tab Pill Bar (Matching Reference 03) */}
        <div className="p-1.5 sm:p-2 rounded-full glass-panel flex flex-wrap items-center justify-center gap-1 sm:gap-2 mb-16 shadow-2xl border border-white/10 max-w-4xl w-full">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-white text-forest-950 font-bold shadow-lg scale-[1.02]'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-forest-950/20 text-forest-950 font-mono' : 'bg-white/10 text-white/50'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Editorial Metadata Block (Matching Reference 03 Layout) */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left border-t border-b border-white/10 py-10">
          {/* Column 1: Core Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-gold-500 uppercase tracking-widest font-bold flex items-center gap-2">
              <Film className="w-3.5 h-3.5 text-gold-400" />
              Core Toolchain
            </h4>
            <ul className="text-xs font-sans text-white/75 space-y-1.5 font-light">
              <li className="flex items-center justify-between">
                <span>DaVinci Resolve Studio</span>
                <span className="text-[10px] font-mono text-white/40">Color & Master</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Adobe Premiere Pro</span>
                <span className="text-[10px] font-mono text-white/40">Editorial Timeline</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Adobe After Effects</span>
                <span className="text-[10px] font-mono text-white/40">Motion & VFX</span>
              </li>
              <li className="flex items-center justify-between">
                <span>CapCut Desktop</span>
                <span className="text-[10px] font-mono text-white/40">Social Short-Form</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Project Scope */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-gold-500 uppercase tracking-widest font-bold flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-gold-400" />
              Editorial Categories
            </h4>
            <ul className="text-xs font-sans text-white/75 space-y-1.5 font-light">
              <li className="flex items-center justify-between">
                <span>01 — Travel & Tourism</span>
                <span className="text-[10px] font-mono text-white/40">Cinematic / Pacing</span>
              </li>
              <li className="flex items-center justify-between">
                <span>02 — Destination & Review</span>
                <span className="text-[10px] font-mono text-white/40">Lifestyle / Food</span>
              </li>
              <li className="flex items-center justify-between">
                <span>03 — Commercial Content</span>
                <span className="text-[10px] font-mono text-white/40">Brand / Real Estate</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Creative Principles */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-gold-500 uppercase tracking-widest font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              Creative Principles
            </h4>
            <ul className="text-xs font-sans text-white/75 space-y-1.5 font-light">
              <li className="flex items-center justify-between">
                <span>Visual Rhythm & Hook</span>
                <span className="text-[10px] font-mono text-emerald-400">First 3s Retention</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Mobile Color Tuning</span>
                <span className="text-[10px] font-mono text-emerald-400">OLED / DCI-P3</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sound Design Architecture</span>
                <span className="text-[10px] font-mono text-emerald-400">Foley & Dynamics</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
