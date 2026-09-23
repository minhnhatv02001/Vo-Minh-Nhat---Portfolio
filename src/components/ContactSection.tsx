import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/profile';

// Clean SVG Brand Icons for Facebook and Instagram
const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copiedZalo, setCopiedZalo] = useState(false);

  const copyZalo = () => {
    navigator.clipboard.writeText(PROFILE.contact.zalo);
    setCopiedZalo(true);
    setTimeout(() => setCopiedZalo(false), 2500);
  };

  return (
    <footer id="contact" className="relative w-full min-h-[90vh] flex flex-col justify-between items-center bg-forest-950 text-white overflow-hidden pt-24 pb-12 px-4 sm:px-6 lg:px-12">
      {/* Background with Sunlit Canopy Rays Matching Reference 12 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Reference 12 Background Image Backdrop */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70 mix-blend-screen scale-105 filter contrast-110"
          style={{ backgroundImage: `url('/references/portfolio-reference/12-reference-ending-contact.png')` }}
        />
        {/* Soft atmospheric gradient transitions */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-transparent to-forest-950/80" />
      </div>

      {/* Top Floating Badge */}
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-mono text-gold-400 uppercase tracking-widest shadow-glass mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>AVAILABLE FOR FREELANCE & PROJECTS</span>
        </div>
      </div>

      {/* Center Giant THANK YOU Display Title (Matching Reference 12) */}
      <div className="relative z-10 my-auto py-12 text-center select-none">
        <h2 className="font-display text-7xl sm:text-9xl md:text-[11rem] lg:text-[14rem] tracking-wider text-white uppercase font-bold leading-none distressed-title drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]">
          THANK YOU
        </h2>

        {/* Real Clickable Contact Links Matching Reference 12 Layout */}
        <div className="mt-8 sm:mt-12 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-12 text-sm sm:text-base font-mono">
          
          {/* Email Clickable */}
          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="flex items-center gap-2 text-white/90 hover:text-gold-400 transition-colors group px-4 py-2 rounded-full glass-pill hover:border-gold-500/50"
          >
            <Mail className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
            <span className="font-medium tracking-wider">{PROFILE.contact.email}</span>
          </a>

          {/* Social Links (Facebook & Instagram) */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-white/90 hover:text-gold-400 hover:border-gold-500/50 transition-colors group"
            >
              <FacebookIcon className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
              <span>Facebook</span>
              <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100" />
            </a>

            <a
              href={PROFILE.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-white/90 hover:text-gold-400 hover:border-gold-500/50 transition-colors group"
            >
              <InstagramIcon className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
              <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100" />
            </a>
          </div>

          {/* Zalo Contact */}
          <button
            onClick={copyZalo}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-white/90 hover:text-gold-400 hover:border-gold-500/50 transition-colors group"
            title="Nhấp để sao chép số Zalo"
          >
            <Phone className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
            <span>Zalo: {PROFILE.contact.zalo}</span>
            {copiedZalo ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100" />
            )}
          </button>

        </div>
      </div>

      {/* Bottom Minimal Copyright Bar */}
      <div className="relative z-10 w-full max-w-7xl pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40 gap-4">
        <div>
          <span>MINH NHẬT © 2026 · VIDEO EDITOR & CONTENT CREATIVE</span>
        </div>
        <div className="flex items-center gap-4">
          <span>HO CHI MINH CITY, VIETNAM</span>
          <span>·</span>
          <span className="text-gold-400/70">ALL VISUAL ARCHIVES RESERVED</span>
        </div>
      </div>
    </footer>
  );
};
