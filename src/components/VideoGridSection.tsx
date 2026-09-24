import React from 'react';
import { Play, MonitorPlay } from 'lucide-react';
import { Project } from '../data/projects';
import { useSound } from '../context/SoundContext';
import { SmartVideo } from './SmartVideo';

interface VideoGridSectionProps {
  projects: Project[];
  onOpenProject: (project: Project) => void;
}

export const VideoGridSection: React.FC<VideoGridSectionProps> = ({
  projects,
  onOpenProject,
}) => {
  const { isMuted } = useSound();

  // Select 4 showcase pieces for the 2x2 widescreen grid (Matching Reference 10)
  const gridItems = [
    projects.find(p => p.id === 'proj-commercial-real-estate') || projects[0],
    projects.find(p => p.id === 'proj-travel-tour') || projects[3],
    projects.find(p => p.id === 'proj-travel-heritage') || projects[6],
    projects.find(p => p.id === 'proj-travel-hangzhou') || projects[10],
  ];

  return (
    <section id="videogrid" className="relative w-full py-24 px-4 sm:px-6 lg:px-12 bg-forest-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[800px] h-[500px] bg-emerald-950/20 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] font-mono text-gold-500 uppercase tracking-widest mb-3">
              <MonitorPlay className="w-3.5 h-3.5 text-gold-400" />
              <span>09 / CINEMATIC EXPANSION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wider uppercase font-bold">
              VIDEO GRID / SELECTED WORK
            </h2>
          </div>
          <span className="text-xs font-mono text-white/50 tracking-wider mt-3 sm:mt-0">
            2X2 WIDESCREEN CINEMATIC CUTS
          </span>
        </div>

        {/* 2x2 Widescreen Grid (Matching Reference 10) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {gridItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenProject(item)}
              className="group relative flex flex-col cursor-pointer"
            >
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden glass-panel border border-white/15 p-2 shadow-2xl group-hover:border-gold-500/50 group-hover:shadow-glow-gold transition-all duration-500">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                  <SmartVideo
                    src={item.assetPath}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    isMuted={isMuted}
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Bar Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur text-xs font-mono text-white/90 border border-white/10 uppercase tracking-wider">
                      {item.categoryShort} · {item.editorialNumber}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur text-[11px] font-mono text-white/80">
                      {item.duration}
                    </span>
                  </div>

                  {/* Center Play Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-5 rounded-full bg-gold-500 text-forest-950 shadow-2xl scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Title Bar */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest font-semibold block mb-0.5">
                      {item.subtitle}
                    </span>
                    <h4 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
                      {item.editorialTitle}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
