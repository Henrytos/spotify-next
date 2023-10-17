import { GetStaticPaths, GetStaticProps } from "next";
import { fetchMusic, fetchMusics } from "../services/musics";
import { ReactNode } from "react";
import { MusicType } from "../api/music";
import MusicDetails from "../components/MusicDetails";
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  if (typeof id === "string") {
    const music = await fetchMusic(id);
    const musics = await fetchMusics();
    return {
      props: {
        music,
        musics,
      },
    };
  }
  return {
    redirect: {
      destination: "/products",
      permanent: false,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const musics = await fetchMusics();
  const paths = musics.map((music) => {
    return { params: { id: music.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
};

const Music = ({
  children,
  music,
  musics,
}: {
  children: ReactNode;
  music?: MusicType;
  musics?: MusicType[];
}) => {
  return <MusicDetails music={music} />;
};

export default Music;
