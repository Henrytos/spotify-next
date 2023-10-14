import { ReactNode, createContext, useState } from "react";
import { MusicType } from "../api/music";
import { useMusics } from "../hooks/useMusics";

export type MusicTargetType = {
  musicTarget: MusicType;
  setMusicTarget: (music: MusicType) => void;
  srcMusic: string;
  setSrcMusic: (srcMusic: string) => void;
  play: boolean;
  setPlay: (play: boolean) => void;
};

export const MusicContext = createContext<MusicTargetType>(
  {} as MusicTargetType
);

const MusicContextProvider = ({ children }: { children: ReactNode }) => {
  const [musicTarget, setMusicTarget] = useState<MusicType>({
    id: "1",
    name: "AfterDark",
    author: "sla",
    urlImg: "https://images.uncyc.org/pt/9/90/After_dark.png",
    srcMusic: "/public/audios/afterdark.mp3",
  });
  const [srcMusic, setSrcMusic] = useState("");
  const [play, setPlay] = useState(false);

  return (
    <MusicContext.Provider
      value={{
        musicTarget,
        setMusicTarget,
        srcMusic,
        setSrcMusic,
        play,
        setPlay,
      }}
    >
      {children}
      <audio src={srcMusic} id="srcMusic"></audio>
    </MusicContext.Provider>
  );
};
export default MusicContextProvider;
