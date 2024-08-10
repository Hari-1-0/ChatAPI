import { createContext, useContext, useState } from "react";

const SoundContext = createContext();

export const useSoundContext = () => useContext(SoundContext);

export const SoundContextProvider = ({ children }) => {
  const [sound, setSound] = useState('iOS_Notification');

  const changeSound = (newSound) => {
    setSound(newSound);
  }

  return (
    <SoundContext.Provider value={{ sound, changeSound }}>
      {children}
    </SoundContext.Provider>
  );
};