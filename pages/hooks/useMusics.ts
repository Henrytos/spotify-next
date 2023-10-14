import { useEffect, useState } from "react";
import { MusicType } from "../api/music";
import { fetchMusics } from "../services/musics";

export const useMusics = () => {
  const [musics, setMusics] = useState<MusicType[]>();
  const dataFetch = async () => {
    const musics = await fetchMusics();
    setMusics(musics);
  };
  useEffect(() => {
    dataFetch();
  }, []);
  return { musics, setMusics };
};
