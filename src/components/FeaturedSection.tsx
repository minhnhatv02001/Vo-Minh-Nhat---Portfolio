import React, { useRef, useState, useEffect } from 'react';
import { Play, Maximize2, Tag } from 'lucide-react';
import { Project, getCloudinaryPoster, getOptimizedVideoSrc } from '../data/projects';
import { useSound } from '../context/SoundContext';

interface FeaturedSectionProps {
  featuredProject: Project;
  onOpenProject: (project: Project) => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  featuredProject,
  onOpenProject,
}) => {
  const { isMuted, isModalOpen } = useSound();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;

    if (isModalOpen) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isModalOpen) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isMuted, isModalOpen, featuredProject.assetPath]);

  return (
    <section id="featured" className="relative w-full py-24 px-4 sm:px-6 lg:px-12 bg-forest-950 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-emerald-900/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono text-gold-500 tracking-widest uppercase block mb-1">
              04 / SPOTLIGHT FEATURE
            </span>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wider uppercase font-bold">
              FEATURED PROJECT
            </h2>
          </div>
          <div className="mt-3 sm:mt-0 text-left sm:text-right">
            <span className="text-xs font-mono text-white/50 tracking-wider">
              {featuredProject.category} · {featuredProject.editorialNumber}
            </span>
          </div>
        </div>

        {/* Featured Layout (Ref 05 Inspired Multi-Card Staggered Composition) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Large Vertical Video Card (5 cols) */}
          <div 
            className="lg:col-span-5 relative group cursor-pointer"
            onClick={() => onOpenProject(featuredProject)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Outer Glow & Glass Frame */}
            <div className="relative rounded-[28px] overflow-hidden glass-panel border-2 border-white/15 p-2 sm:p-3 shadow-2xl transition-all duration-500 group-hover:border-gold-500/50 group-hover:shadow-glow-gold">
              
              {/* Vertical Video Viewport (9:16 Aspect Ratio) */}
              <div className="relative aspect-[9/16] w-full rounded-[22px] overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  src={getOptimizedVideoSrc(featuredProject.assetPath)}
                  poster={getCloudinaryPoster(featuredProject.assetPath)}
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.98] group-hover:scale-105 transition-transform duration-700"
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                />

                {/* Dark Vignette & Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top Overlay Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur text-[10px] font-mono text-white/90 border border-white/10 uppercase tracking-widest">
                    {featuredProject.categoryShort} · 4K UHD
                  </span>
                  <div className="p-2 rounded-full bg-black/60 backdrop-blur text-white/80 border border-white/10 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Center Play Button on Hover */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
                  <div className="p-5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-2xl group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-forest-950 transition-all duration-300">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] font-mono text-gold-400 font-semibold tracking-widest block uppercase">
                    CLICK TO WATCH FULL REEL
                  </span>
                  <h4 className="font-display text-2xl text-white tracking-wide uppercase">
                    {featuredProject.editorialTitle}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Spotlight Panel & Editorial Breakdown (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pl-6">
            
            {/* Category & Badge */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-gold-500/10 text-gold-400 border border-gold-500/30 uppercase tracking-wider font-semibold">
                {featuredProject.category}
              </span>
              <span className="text-xs font-mono text-white/40">
                FRAME RATE: 60 FPS
              </span>
            </div>

            {/* Editorial Project Title */}
            <div>
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wider uppercase font-bold leading-tight">
                {featuredProject.editorialTitle}
              </h3>
              <p className="font-mono text-sm sm:text-base text-gold-400 tracking-wider uppercase mt-1">
                {featuredProject.subtitle}
              </p>
            </div>

            {/* Editorial Statement */}
            <div className="space-y-3 text-sm text-white/75 font-sans leading-relaxed font-light">
              <p>
                Dự án video ngắn thương mại tập trung vào nhịp điệu chuyển động không gian kiến trúc, kỹ thuật xử lý màu sắc chuẩn xác và cắt gọt từng khung hình để tôn vinh sự tinh tế của đường nét thiết kế.
              </p>
              <p className="text-xs text-white/50 italic">
                Architectural commercial visual showcase emphasizing spatial rhythm, precision color science, and dynamic cuts designed for maximum engagement on digital platforms.
              </p>
            </div>

            {/* Meta Attributes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-3.5 rounded-xl bg-forest-900/60 border border-white/10">
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                  ROLE & SCOPE
                </span>
                <span className="text-xs font-mono text-white/90 font-medium">
                  Editing · Color · Sound
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-forest-900/60 border border-white/10">
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                  ORIENTATION
                </span>
                <span className="text-xs font-mono text-white/90 font-medium">
                  Vertical 9:16 Short-Form
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-forest-900/60 border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                  KEY FOCUS
                </span>
                <span className="text-xs font-mono text-white/90 font-medium">
                  High-Retention Flow
                </span>
              </div>
            </div>

            {/* Tags & Action Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-white/70 border border-white/10"
                  >
                    <Tag className="w-2.5 h-2.5 text-gold-400" />
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenProject(featuredProject)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-glow-gold hover:scale-105"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Open Full Cinema</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
