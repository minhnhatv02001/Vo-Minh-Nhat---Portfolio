import React, { useRef, useEffect } from 'react';
import { getCloudinaryPoster, getOptimizedVideoSrc } from '../utils/media';
import { useSound } from '../context/SoundContext';

export interface SmartVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  isMuted?: boolean;
  autoplayWhenInView?: boolean;
  playOnHover?: boolean;
  isHovered?: boolean;
}

export const SmartVideo: React.FC<SmartVideoProps> = ({
  src,
  poster,
  isMuted = true,
  autoplayWhenInView = true,
  playOnHover = false,
  isHovered = false,
  className = '',
  preload = 'none',
  ...rest
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isModalOpen } = useSound();
  const finalSrc = getOptimizedVideoSrc(src);
  const finalPoster = poster || getCloudinaryPoster(src);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // When modal is active, IMMEDIATELY pause this gallery video to release decoder sessions
    if (isModalOpen) {
      video.pause();
      return;
    }

    if (playOnHover) {
      if (isHovered) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
      return;
    }

    if (!autoplayWhenInView) return;

    // Viewport IntersectionObserver to load and play only when visible
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
      {
        threshold: 0.15,
        rootMargin: '100px',
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [autoplayWhenInView, playOnHover, isHovered, isModalOpen]);

  return (
    <video
      ref={videoRef}
      src={finalSrc}
      poster={finalPoster}
      className={className}
      muted={isMuted}
      playsInline
      loop
      preload={preload}
      {...rest}
    />
  );
};
