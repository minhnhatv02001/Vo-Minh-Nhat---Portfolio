import React from 'react';
import { Phone, MapPin, Mail, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { TOOLS } from '../data/tools';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 px-4 sm:px-6 lg:px-12 bg-forest-950 overflow-hidden">
      {/* Background Texture & Camera HUD elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-md mix-blend-overlay"
          style={{ backgroundImage: `url('/references/portfolio-reference/02-reference-about-me.png')` }}
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-forest-950/80 to-forest-950" />
      </div>

      {/* Camera Viewfinder HUD Overlay (Matching Reference 02) */}
      <div className="absolute inset-6 sm:inset-10 border border-white/5 rounded-3xl pointer-events-none z-10 hidden md:block">
        {/* Top Left Bracket & Camera Info */}
        <div className="absolute top-4 left-6 flex items-center gap-4 text-[11px] font-mono text-white/40">
          <span className="text-white/60">┌ [ + ]</span>
          <span>ISO 400</span>
          <span>F2.8</span>
          <span>1/125s</span>
        </div>
        {/* Top Right Bracket & Mode */}
        <div className="absolute top-4 right-6 flex items-center gap-3 text-[11px] font-mono text-white/40">
          <span>WB 5600K</span>
          <span className="text-emerald-400">AUTO</span>
          <span className="text-white/60">[ + ] ┐</span>
        </div>
        {/* Bottom Left Bracket */}
        <div className="absolute bottom-4 left-6 flex items-center gap-3 text-[11px] font-mono text-white/40">
          <span className="text-white/60">└</span>
          <span>4K UHD · 60 FPS</span>
          <span>LOG 3 · 10-BIT</span>
        </div>
        {/* Bottom Right Recording Indicator */}
        <div className="absolute bottom-4 right-6 flex items-center gap-2 text-[11px] font-mono text-red-500">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          <span className="font-bold tracking-widest">● REC</span>
          <span className="text-white/60">┘</span>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        {/* 3-Column Asymmetric Grid Matching Reference 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* COLUMN 1 (Left 4 cols): ABOUT ME Heading, Concise Statement, Filmstrip Portrait */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-4">
              <span className="text-xs font-mono text-gold-500 tracking-widest uppercase">02 / PROFILE</span>
              <h2 className="font-display text-5xl sm:text-6xl text-white tracking-wider uppercase font-bold mt-1">
                ABOUT ME
              </h2>
            </div>

            {/* Concise Bio Statement (Marketing + Video Creative) */}
            <p className="text-sm text-white/75 font-sans leading-relaxed mb-6 font-light">
              {PROFILE.statement}
            </p>
            <p className="text-xs text-white/50 font-sans italic leading-relaxed mb-8">
              "{PROFILE.statementEn}"
            </p>

            {/* Real Portrait with Winding 35mm Filmstrip (Matching Reference 02) */}
            <div className="relative w-full max-w-[320px] mx-auto lg:mx-0 mt-2">
              {/* Decorative 35mm Filmstrip Ribbon Behind/Around Portrait */}
              <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border-2 border-white/10 rounded-2xl pointer-events-none" />
              
              {/* Main Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/15 bg-black">
                <img
                  src={PROFILE.portrait}
                  alt="Minh Nhật - Video Editor & Content Creative"
                  className="w-full aspect-[4/5] object-cover object-top filter contrast-[1.05] brightness-[0.98] hover:scale-105 transition-transform duration-700"
                />

                {/* Filmstrip Sprockets Top & Bottom Bar Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-black/80 backdrop-blur-sm border-t border-white/10 flex items-center justify-between px-3">
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="w-2.5 h-3.5 bg-white/20 rounded-sm" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-gold-400 font-semibold tracking-widest">
                    MN · KODAK 400
                  </span>
                  <div className="flex gap-2">
                    {[7, 8, 9].map((i) => (
                      <div key={i} className="w-2.5 h-3.5 bg-white/20 rounded-sm" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Viewfinder Corner Overlays */}
              <div className="absolute -top-2 -left-2 text-white/40 font-mono text-xs">┌</div>
              <div className="absolute -bottom-2 -right-2 text-white/40 font-mono text-xs">┘</div>
            </div>
          </div>

          {/* COLUMN 2 (Middle 4 cols): Contact, Education, Tools (3x2), Soft Skills */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:px-4">
            
            {/* Contact Details */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-sm font-mono text-white/90 uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                Contact
              </h3>
              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center gap-3 text-white/80">
                  <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span>{PROFILE.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span>{PROFILE.contact.location}</span>
                </div>
                <div className="pt-1">
                  <a
                    href={`mailto:${PROFILE.contact.email}`}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 text-xs font-mono transition-colors border border-white/10"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold-400" />
                    <span>{PROFILE.contact.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Education / Foundation */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-sm font-mono text-white/90 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                Background
              </h3>
              <p className="text-xs font-sans text-white/90 font-medium">
                {PROFILE.education.field}
              </p>
              <p className="text-[11px] font-mono text-white/50 mt-1">
                {PROFILE.education.subtext}
              </p>
            </div>

            {/* Tools (Compact 3x2 Grid with REAL Icons) */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-sm font-mono text-white/90 uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                Core Tools
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {TOOLS.map((t) => (
                  <div
                    key={t.id}
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-forest-900/80 border border-white/10 hover:border-gold-500/50 hover:bg-forest-800 transition-all group cursor-pointer"
                    title={`${t.name} - ${t.role}`}
                  >
                    <img
                      src={t.iconPath}
                      alt={t.name}
                      className="w-8 h-8 rounded-lg object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="text-[10px] font-mono text-white/70 mt-1.5 text-center truncate max-w-full group-hover:text-white">
                      {t.name.split(' ')[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills (Frosted Tag Pills) */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-sm font-mono text-white/90 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                Creative Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {PROFILE.softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/5 text-white/80 border border-white/10 hover:border-gold-500/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* COLUMN 3 (Right 4 cols): Experience Timeline & Hobby / Interests */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Experience Timeline (Matching Reference 02 Target Circles) */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl">
              <h3 className="text-sm font-mono text-white/90 uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                Practice & Experience
              </h3>

              <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/15">
                {PROFILE.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8">
                    {/* Glowing Target Circle */}
                    <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-forest-950 border-2 border-gold-500 flex items-center justify-center -translate-x-1/2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></div>
                    </div>

                    <span className="text-[11px] font-mono text-gold-400 font-semibold tracking-wider block mb-1">
                      {exp.period}
                    </span>
                    <h4 className="text-sm font-sans font-bold text-white mb-1.5">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-sans text-white/60 leading-relaxed font-light">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Creative Focus / Interests (Matching Reference 02 "Hobby") */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-sm font-mono text-white/90 uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                Focus & Passion
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {PROFILE.interests.map((interest) => (
                  <div key={interest} className="flex items-center gap-2 text-xs font-mono text-white/75">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-500/80 flex-shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
