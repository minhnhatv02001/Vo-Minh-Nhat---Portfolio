import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';
import { useSound } from '../context/SoundContext';
import { SmartVideo } from './SmartVideo';

interface ShowcaseSectionProps {
  projects: Project[];
  activeCategory?: string;
  onOpenProject: (project: Project) => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  projects,
  onOpenProject,
}) => {
  const { isMuted } = useSound();

  // Find specific projects by id for each reference layout
  const projVinwonders = projects.find(p => p.id === 'proj-travel-vinwonders') || projects[1];
  const projCoastal = projects.find(p => p.id === 'proj-travel-coastal') || projects[2];
  const projTour = projects.find(p => p.id === 'proj-travel-tour') || projects[3];

  const rowProjects = [
    projects.find(p => p.id === 'proj-travel-heritage') || projects[6],
    projects.find(p => p.id === 'proj-travel-ninhbinh') || projects[7],
    projects.find(p => p.id === 'proj-destination-island-breeze') || projects[8],
    projects.find(p => p.id === 'proj-commercial-brand-pulse') || projects[9],
    projects.find(p => p.id === 'proj-travel-hangzhou') || projects[10],
  ].filter(Boolean) as Project[];

  const destinationProjects = [
    projects.find(p => p.id === 'proj-review-culinary') || projects[4],
    projects.find(p => p.id === 'proj-destination-island-escape') || projects[5],
    projects.find(p => p.id === 'proj-travel-island-odyssey') || projects[11],
  ].filter(Boolean) as Project[];

  return (
    <section id="showcase" className="relative w-full py-24 px-4 sm:px-6 lg:px-12 bg-forest-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-emerald-950/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-28">

        {/* ========================================================
            LAYOUT A: Reference 04 Composition (2 Vertical + 1 Landscape Feature)
           ======================================================== */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-gold-500 tracking-widest uppercase block mb-1">
                05 / EDITORIAL COMPOSITION I
              </span>
              <h3 className="font-display text-3xl sm:text-5xl text-white tracking-wider uppercase font-bold">
                01 — TRAVEL & TOURISM SHOWCASE
              </h3>
            </div>
            <span className="text-xs font-mono text-white/50 mt-2 sm:mt-0">
              KINETIC PACING · CINEMATIC HORIZON
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Card 1: Vertical 9:16 (3 cols) */}
            <div
              className="md:col-span-3 flex flex-col group cursor-pointer"
              onClick={() => onOpenProject(projVinwonders)}
            >
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden glass-panel border border-white/15 p-1.5 shadow-xl group-hover:border-gold-500/50 transition-all duration-300">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                  <SmartVideo
                    src={projVinwonders.assetPath}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    isMuted={isMuted}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur text-[10px] font-mono text-white/90">
                    {projVinwonders.editorialNumber}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3.5 rounded-full bg-gold-500 text-forest-950 shadow-lg">
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 px-1">
                <span className="text-[10px] font-mono text-gold-400 font-semibold tracking-wider uppercase block">
                  {projVinwonders.categoryShort}
                </span>
                <h4 className="font-display text-xl text-white tracking-wide uppercase">
                  {projVinwonders.editorialTitle}
                </h4>
                <p className="text-[11px] font-sans text-white/50 truncate">
                  {projVinwonders.subtitle}
                </p>
              </div>
            </div>

            {/* Card 2: Vertical 9:16 (3 cols) */}
            <div
              className="md:col-span-3 flex flex-col group cursor-pointer"
              onClick={() => onOpenProject(projCoastal)}
            >
              <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden glass-panel border border-white/15 p-1.5 shadow-xl group-hover:border-gold-500/50 transition-all duration-300">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                  <SmartVideo
                    src={projCoastal.assetPath}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    isMuted={isMuted}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur text-[10px] font-mono text-white/90">
                    {projCoastal.editorialNumber}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3.5 rounded-full bg-gold-500 text-forest-950 shadow-lg">
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 px-1">
                <span className="text-[10px] font-mono text-gold-400 font-semibold tracking-wider uppercase block">
                  {projCoastal.categoryShort}
                </span>
                <h4 className="font-display text-xl text-white tracking-wide uppercase">
                  {projCoastal.editorialTitle}
                </h4>
                <p className="text-[11px] font-sans text-white/50 truncate">
                  {projCoastal.subtitle}
                </p>
              </div>
            </div>

            {/* Card 3: Large Feature Card (6 cols) */}
            <div
              className="md:col-span-6 flex flex-col group cursor-pointer"
              onClick={() => onOpenProject(projTour)}
            >
              <div className="relative flex-1 w-full rounded-2xl overflow-hidden glass-panel border border-white/15 p-2 shadow-xl group-hover:border-gold-500/50 transition-all duration-300 min-h-[300px] md:min-h-[auto]">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                  <SmartVideo
                    src={projTour.assetPath}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    isMuted={isMuted}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur text-xs font-mono text-white/90 border border-white/10 uppercase tracking-widest">
                      EXPEDITION FILM · {projTour.editorialNumber}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-mono">
                      4K MASTER
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-5 rounded-full bg-gold-500 text-forest-950 shadow-2xl scale-110">
                      <Play className="w-8 h-8 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-[10px] font-mono text-gold-400 tracking-widest uppercase font-semibold block">
                      FEATURED TRAVEL SEQUENCE
                    </span>
                    <h4 className="font-display text-3xl sm:text-4xl text-white tracking-wide uppercase">
                      {projTour.editorialTitle}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="mt-3 px-1 flex items-center justify-between text-xs font-mono text-white/50">
                <span>{projTour.subtitle}</span>
                <span className="text-gold-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Film <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            LAYOUT B: Reference 06 & 07 Composition (Horizontal Row of Vertical Cards)
           ======================================================== */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-gold-500 tracking-widest uppercase block mb-1">
                06 / EDITORIAL COMPOSITION II
              </span>
              <h3 className="font-display text-3xl sm:text-5xl text-white tracking-wider uppercase font-bold">
                CINEMATIC PANORAMA — SELECTED REELS
              </h3>
            </div>
            <span className="text-xs font-mono text-white/50 mt-2 sm:mt-0">
              5-CARD EDITORIAL STRIP
            </span>
          </div>

          {/* 5-Column Responsive Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {rowProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenProject(item)}
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden glass-panel border border-white/15 p-1.5 shadow-xl group-hover:border-gold-500/50 group-hover:shadow-glow-gold transition-all duration-300">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                    <SmartVideo
                      src={item.assetPath}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      isMuted={isMuted}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                    
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur text-[10px] font-mono text-white/90 border border-white/10">
                      {item.editorialNumber}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-3 rounded-full bg-gold-500 text-forest-950 shadow-lg">
                        <Play className="w-4 h-4 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2.5 px-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gold-400 uppercase font-semibold">
                      {item.categoryShort}
                    </span>
                    <span className="text-[10px] font-mono text-white/40">
                      {item.duration}
                    </span>
                  </div>
                  <h4 className="font-display text-lg text-white tracking-wide uppercase truncate mt-0.5">
                    {item.editorialTitle}
                  </h4>
                  <p className="text-[11px] font-sans text-white/50 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            LAYOUT C: Reference 08 Composition (Destination & Review Showcase)
           ======================================================== */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-gold-500 tracking-widest uppercase block mb-1">
                07 / EDITORIAL COMPOSITION III
              </span>
              <h3 className="font-display text-3xl sm:text-5xl text-white tracking-wider uppercase font-bold">
                02 — DESTINATION & REVIEW ARCHIVE
              </h3>
            </div>
            <span className="text-xs font-mono text-white/50 mt-2 sm:mt-0">
              LIFESTYLE · ATMOSPHERE · SENSORY TONES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinationProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenProject(item)}
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden glass-panel border border-white/15 p-2 shadow-xl group-hover:border-gold-500/50 transition-all duration-300">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                    <SmartVideo
                      src={item.assetPath}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      isMuted={isMuted}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur text-[10px] font-mono text-white/90 border border-white/10 uppercase">
                        {item.editorialNumber}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur text-[10px] font-mono text-white/80">
                        {item.duration}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-4 rounded-full bg-gold-500 text-forest-950 shadow-xl">
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <span className="text-[10px] font-mono text-gold-400 uppercase font-semibold block">
                        {item.categoryShort}
                      </span>
                      <h4 className="font-display text-2xl text-white tracking-wide uppercase truncate">
                        {item.editorialTitle}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="mt-3 px-1">
                  <p className="text-xs font-sans text-white/60">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
