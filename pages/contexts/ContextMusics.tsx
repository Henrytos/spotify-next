import { ReactNode, createContext, useState } from "react";
import { useMusics } from "../hooks/useMusics";
import { MusicType } from "../api/music";

export const MusicsContext = createContext<MusicType[] | any>(
  {} as MusicType[]
);

const MusicsContextProvider = ({ children }: { children: ReactNode }) => {
  const { musics, setMusics } = useMusics();
  return (
    <MusicsContext.Provider value={{ musics, setMusics }}>
      {children}
    </MusicsContext.Provider>
  );
};
export default MusicsContextProvider;
