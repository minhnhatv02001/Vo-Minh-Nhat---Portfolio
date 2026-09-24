import React, { useState } from 'react';
import { Play, Film } from 'lucide-react';
import { Project } from '../data/projects';
import { useSound } from '../context/SoundContext';
import { SmartVideo } from './SmartVideo';

interface ShortVideoGalleryProps {
  projects: Project[];
  onOpenProject: (project: Project) => void;
}

export const ShortVideoGallery: React.FC<ShortVideoGalleryProps> = ({
  projects,
  onOpenProject,
}) => {
  const { isMuted } = useSound();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative w-full py-24 px-4 sm:px-6 lg:px-12 bg-forest-950 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-emerald-900/10 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header matching Reference 09 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-[11px] font-mono text-gold-500 uppercase tracking-widest mb-3">
              <Film className="w-3.5 h-3.5 text-gold-400" />
              <span>08 / HIGH DENSITY REEL GRID</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wider uppercase font-bold">
              SHORT VIDEO GALLERY
            </h2>
          </div>
          <div className="mt-3 sm:mt-0 text-left sm:text-right">
            <span className="text-xs font-mono text-white/50 tracking-wider block">
              12 EDITORIAL WORKS · VERTICAL 9:16
            </span>
            <span className="text-[11px] font-mono text-gold-400/80">
              HOVER TO AUDITION · CLICK FOR FULL CINEMA
            </span>
          </div>
        </div>

        {/* 6-Column x 2-Row Dense Grid Matching Reference 09 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {projects.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => onOpenProject(item)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col cursor-pointer"
              >
                {/* 9:16 Aspect Ratio Card */}
                <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden glass-panel border border-white/10 p-1 shadow-lg group-hover:border-gold-500/60 group-hover:shadow-glow-gold transition-all duration-300">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
                    <SmartVideo
                      src={item.assetPath}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      isMuted={isMuted}
                      playOnHover={true}
                      isHovered={isHovered}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Pill / Badge */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur text-[9px] font-mono text-white/90 border border-white/10 font-bold">
                        {item.editorialNumber}
                      </span>
                      <span className="text-[9px] font-mono text-white/60">
                        {item.duration}
                      </span>
                    </div>

                    {/* Center Hover Action */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="p-3 rounded-full bg-gold-500 text-forest-950 shadow-xl scale-105">
                        <Play className="w-4 h-4 fill-current translate-x-0.5" />
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="absolute bottom-2 left-2 right-2 z-10">
                      <span className="text-[9px] font-mono text-gold-400 font-bold tracking-wider uppercase block truncate">
                        {item.categoryShort}
                      </span>
                      <h4 className="font-display text-sm text-white tracking-wide uppercase truncate">
                        {item.editorialTitle}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
