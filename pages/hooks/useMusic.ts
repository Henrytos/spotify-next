import { useContext } from "react";
import { MusicContext } from "../contexts/ContextMusic";

export const useMusic = () => {
  const { musicTarget, setMusicTarget, play, setPlay, srcMusic, setSrcMusic } =
    useContext(MusicContext);
  return { musicTarget, setMusicTarget, play, setPlay, srcMusic, setSrcMusic };
};
