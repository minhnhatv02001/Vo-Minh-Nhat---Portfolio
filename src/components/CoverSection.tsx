import React from 'react';
import { Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const CoverSection: React.FC = () => {

  return (
    <section id="cover" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-forest-950 pt-20 pb-16">
      {/* Ambient Forest & Canopy Sunlight Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep forest backdrop image from reference */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity filter blur-sm scale-105"
          style={{ backgroundImage: `url('/references/portfolio-reference/01-reference-cover.png')` }}
        />
        {/* Organic Vignette & Sunbeam Radial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-transparent to-forest-950" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-400/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* Floating Category Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-[#E5C05B] tracking-widest uppercase mb-6 shadow-glass">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>PORTFOLIO 2026</span>
          <span className="text-white/30">|</span>
          <span className="text-white/80">REEL & ARCHIVE</span>
        </div>

        {/* Massive Distressed/Condensed Title (Matching Reference "PORTFOLIO") */}
        <div className="relative w-full select-none mb-6">
          <h1 className="font-display text-7xl sm:text-9xl md:text-[11rem] lg:text-[14rem] tracking-wider text-[#F0F2ED] uppercase leading-none distressed-title font-extrabold transition-transform duration-500">
            PORTFOLIO
          </h1>
        </div>

        {/* Centerpiece: Vintage CRT Monitor Embedded in Moss & Nature with LIVE Footage */}
        <div className="relative w-full max-w-3xl my-2 flex items-center justify-center">
          {/* Outer Retro CRT Cabinet Frame with Foliage Accents */}
          <div className="relative w-[340px] sm:w-[460px] md:w-[560px] aspect-[4/3] rounded-[36px] bg-gradient-to-b from-[#2a3026] via-[#1c221a] to-[#121610] p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(34,61,42,0.4)] border-4 border-[#3c4436]/80 flex flex-col justify-between">
            {/* Top CRT Bezel Brand Mark & Cooling Vents */}
            <div className="flex items-center justify-between px-3 pb-2 text-[10px] font-mono text-white/40">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/80 animate-ping"></span>
                <span className="font-bold text-white/60">COLOR MASTER · CRT 24</span>
              </div>
              <div className="flex gap-1.5 opacity-60">
                <span className="w-6 h-1 bg-white/20 rounded"></span>
                <span className="w-6 h-1 bg-white/20 rounded"></span>
              </div>
            </div>

            {/* Curved Glass CRT Screen with Personal Portrait */}
            <div className="relative flex-1 rounded-[22px] overflow-hidden bg-black crt-screen border-2 border-black/80 shadow-inner group">
              <img
                src={PROFILE.portrait}
                alt="Minh Nhật - Video Editor / Content Creative"
                className="w-full h-full object-cover object-[center_18%] filter contrast-[1.06] saturate-[1.04]"
              />

              {/* Glass Scanlines & Screen Curvature Glare */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/40 pointer-events-none" />

              {/* Subtle Screen Badge / Live indicator */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 backdrop-blur text-[10px] font-mono text-emerald-400 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>CH-01 · LIVE</span>
              </div>
            </div>

            {/* Bottom CRT Console Controls (Knobs & Speaker Grill) */}
            <div className="pt-3 flex items-center justify-between px-2 text-[10px] font-mono text-white/40">
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-[#232a1f] border border-white/10 shadow flex items-center justify-center">
                  <div className="w-1 h-2 bg-white/30 rounded"></div>
                </div>
                <div className="w-5 h-5 rounded-full bg-[#232a1f] border border-white/10 shadow flex items-center justify-center">
                  <div className="w-1 h-2 bg-white/30 rounded"></div>
                </div>
              </div>
              <div className="text-center">
                <span className="tracking-widest text-[#E5C05B]/80 font-bold uppercase">MINH NHẬT EDITORIAL</span>
              </div>
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-white/20 rounded-full"></div>
                <div className="w-1 h-3 bg-white/20 rounded-full"></div>
                <div className="w-1 h-3 bg-white/20 rounded-full"></div>
                <div className="w-1 h-3 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Identity & Role Columns (Matching Reference Composition) */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mt-6 md:mt-8 items-center">
          {/* Left Column: MINH NHẬT in warm golden condensed sans */}
          <div className="text-center md:text-left">
            <span className="block text-xs font-mono text-white/50 tracking-widest uppercase mb-1">CREATIVE IDENTITY</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#E5C05B] tracking-wider uppercase font-bold leading-none">
              MINH NHẬT
            </h2>
          </div>

          {/* Right Column: VIDEO EDITOR / CONTENT CREATIVE */}
          <div className="text-center md:text-right">
            <span className="block text-xs font-mono text-white/50 tracking-widest uppercase mb-1">SPECIALIZATION</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#E5C05B] tracking-wider uppercase font-bold leading-tight">
              VIDEO EDITOR /<br />CONTENT CREATIVE
            </h2>
          </div>
        </div>

        {/* Supporting Positioning Statement (Bottom) */}
        <div className="mt-10 pt-6 border-t border-white/10 max-w-2xl w-full flex flex-col items-center">
          <p className="font-mono text-xs sm:text-sm text-white/70 tracking-widest uppercase">
            SHORT-FORM · SOCIAL · VISUAL STORYTELLING
          </p>
          <p className="text-xs text-white/40 mt-1 font-sans">
            Marketing-grounded pacing · Commercial & Travel narratives · High-retention editing
          </p>
        </div>
      </div>
    </section>
  );
};
