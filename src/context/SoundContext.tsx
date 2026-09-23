import React, { createContext, useContext, useState } from 'react';

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  setMuted: (muted: boolean) => void;
}

const SoundContext = createContext<SoundContextType>({
  isMuted: true,
  toggleMute: () => {},
  setMuted: () => {},
});

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => setIsMuted(prev => !prev);
  const setMuted = (muted: boolean) => setIsMuted(muted);

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, setMuted }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
