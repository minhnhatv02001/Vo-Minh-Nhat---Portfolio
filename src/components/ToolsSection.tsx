import React from 'react';
import { Cpu } from 'lucide-react';
import { TOOLS } from '../data/tools';

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="relative w-full py-24 px-4 sm:px-6 lg:px-12 bg-forest-950 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-900/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] font-mono text-gold-500 uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5 text-gold-400" />
            <span>10 / CREATIVE TOOLCHAIN</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wider uppercase font-bold mb-3">
            PRODUCTION SUITE & TOOLS
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-sans max-w-xl mx-auto">
            Hệ công cụ chuyên nghiệp phục vụ dựng phim, motion graphics, chỉnh màu và sản xuất video ngắn tốc độ cao.
          </p>
        </div>

        {/* Coherent, Compact Editorial Grid (All 6 tools in ONE unified layout) */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {TOOLS.map((tool) => (
              <div
                key={tool.id}
                className="group relative p-4 rounded-2xl bg-forest-900/50 hover:bg-forest-900/90 border border-white/10 hover:border-gold-500/50 transition-all duration-300 flex items-start gap-4"
              >
                {/* Real Icon Asset */}
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/60 p-1 border border-white/10 flex-shrink-0 group-hover:scale-105 group-hover:border-gold-500/40 transition-all">
                  <img
                    src={tool.iconPath}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Editorial Information */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h3 className="font-display text-lg text-white tracking-wide uppercase truncate group-hover:text-gold-400 transition-colors">
                      {tool.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/60 flex-shrink-0">
                      {tool.category}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-gold-500/90 font-medium truncate mb-1">
                    {tool.role}
                  </p>

                  <p className="text-[11px] font-sans text-white/50 leading-relaxed font-light line-clamp-2">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Minimal Editorial Footnote */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-2">
            <span>PIPELINE: 4K UHD · COLOR MANAGED (ACES / DA VINCI YRGB) · 60 FPS MASTERING</span>
            <span className="text-gold-400/80">STANDARDIZED WORKFLOW</span>
          </div>
        </div>

      </div>
    </section>
  );
};
