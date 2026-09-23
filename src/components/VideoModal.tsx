import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Tag } from 'lucide-react';
import { Project } from '../data/projects';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (project && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [project]);

  if (!project) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((cur / dur) * 100);

    const curM = Math.floor(cur / 60);
    const curS = Math.floor(cur % 60).toString().padStart(2, '0');
    setCurrentTime(`${curM}:${curS}`);

    const durM = Math.floor(dur / 60);
    const durS = Math.floor(dur % 60).toString().padStart(2, '0');
    setDuration(`${durM}:${durS}`);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 0);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-fadeIn">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main modal container */}
      <div className="relative z-10 max-w-5xl w-full max-h-[92vh] flex flex-col md:flex-row rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl bg-forest-950/95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-colors border border-white/10"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[360px] md:min-h-[580px] max-h-[70vh] md:max-h-[85vh]">
          <video
            ref={videoRef}
            src={project.assetPath}
            className="w-full h-full object-contain max-h-[85vh]"
            playsInline
            loop
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}
          />

          {/* Overlay Play/Pause indicator on click */}
          <div
            onClick={togglePlay}
            className="absolute inset-0 cursor-pointer flex items-center justify-center group"
          >
            {!isPlaying && (
              <div className="p-5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-2xl scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              </div>
            )}
          </div>

          {/* Minimal Bottom Player Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-2">
            {/* Scrubber Bar */}
            <div
              onClick={handleSeek}
              className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full cursor-pointer transition-all relative overflow-hidden group"
            >
              <div
                className="h-full bg-gold-500 rounded-full transition-all duration-75 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-white/80 pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-1 rounded hover:text-gold-500 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-1 rounded hover:text-gold-500 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-[11px] text-white/60">
                  {currentTime} / {duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-white/70">
                  {project.aspectRatio}
                </span>
                <button
                  onClick={toggleFullscreen}
                  className="p-1 rounded hover:text-gold-500 transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Project Info Panel (Strictly no source filenames) */}
        <div className="w-full md:w-80 lg:w-96 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-forest-900/60">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono text-gold-500 tracking-widest font-semibold uppercase">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/10 text-white/80 border border-white/10">
                {project.editorialNumber}
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide uppercase leading-tight mb-2">
              {project.editorialTitle}
            </h3>

            <p className="text-xs md:text-sm font-sans text-white/60 font-light leading-relaxed mb-6">
              {project.subtitle}
            </p>

            {/* Editorial tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-forest-800/80 text-white/75 border border-white/10"
                >
                  <Tag className="w-2.5 h-2.5 text-gold-500" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Minimal metadata footer */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
            <span>EDITORIAL WORK</span>
            <span className="text-gold-500/80">MINH NHẬT · 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};
