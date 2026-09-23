import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '../context/SoundContext';

export const Navigation: React.FC = () => {
  const { isMuted, toggleMute } = useSound();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'OVERVIEW', href: '#overview' },
    { label: 'FEATURED', href: '#featured' },
    { label: 'SHOWCASE', href: '#showcase' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'TOOLS', href: '#tools' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 pointer-events-none">
      {/* Brand tag / identity */}
      <a
        href="#cover"
        className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-mono tracking-widest text-[#E5C05B] hover:text-white transition-all shadow-glass"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="font-bold">MINH NHẬT</span>
        <span className="text-white/40">/</span>
        <span className="text-white/70 hidden sm:inline">PORTFOLIO</span>
      </a>

      {/* Floating Center Menu (minimal glass pill) */}
      <nav
        className={`pointer-events-auto hidden md:flex items-center gap-1 p-1.5 rounded-full transition-all duration-300 ${
          scrolled ? 'glass-panel bg-forest-950/80 shadow-2xl border-white/10' : 'glass-pill bg-black/40'
        }`}
      >
        {navItems.map(item => (
          <a
            key={item.label}
            href={item.href}
            className="px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Master Sound Button Pill (Matching Reference "Unmute" pill) */}
      <div className="pointer-events-auto flex items-center gap-2">
        <button
          onClick={toggleMute}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wider transition-all duration-200 shadow-glass ${
            isMuted
              ? 'bg-black/70 hover:bg-black/90 text-white/90 border border-white/20 hover:border-gold-500/50'
              : 'bg-gold-500 text-forest-950 font-bold shadow-glow-gold'
          }`}
          aria-label={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-white/60" />
              <span>Unmute</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-forest-950" />
              <span>Audio Active</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
