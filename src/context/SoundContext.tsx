import React, { createContext, useContext, useState } from 'react';

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  setMuted: (muted: boolean) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const SoundContext = createContext<SoundContextType>({
  isMuted: true,
  toggleMute: () => {},
  setMuted: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMute = () => setIsMuted(prev => !prev);
  const setMuted = (muted: boolean) => setIsMuted(muted);

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, setMuted, isModalOpen, setIsModalOpen }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
