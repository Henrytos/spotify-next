import { MusicType } from "../api/music";

export const fetchMusics = async () => {
  const musics: MusicType[] = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/music`
  ).then((res) => res.json());

  return musics;
};

export const fetchMusic = async (id: string | number) => {
  const music: MusicType = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/music/${id}`
  ).then((res) => res.json());
  return music;
};
