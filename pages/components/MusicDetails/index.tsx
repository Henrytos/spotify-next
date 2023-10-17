import { MusicType } from "@/pages/api/music";
import { ReactNode, useState } from "react";
import ShowImg from "./ShowImg";
import { Heart, Play } from "lucide-react";
import Title from "../Title";
import SubText from "../SubText";
import MusicsAuthor from "./MusicsAuthor";
const MusicDetails = ({
  children,
  music,
  musics,
}: {
  children?: ReactNode;
  music?: MusicType;
  musics?: MusicType[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <main className="flex flex-col bg-transparent w-full px-2 gap-8">
        <div className="h-56 flex items-end gap-4">
          <img
            src={music?.urlImg}
            alt={music?.name}
            className="h-full w-auto object-cover cursor-pointer hover:scale-110 transition-transform shadow-2xl"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="flex flex-col gap-2">
            <span className="">Sigle</span>
            <span className="text-4xl font-bold">{music?.name}</span>
            <span className="text-sm flex items-center gap-1">
              <img src={music?.urlImgAuthor} className="h-6 rounded-full" />
              <span className="font-semibold">{music?.author}</span> 2023 ,1
              song
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span
            className="  w-14 h-14 bg-green-600 rounded-full 
        flex items-center justify-center 
        shadow-md shadow-zinc-600/30
        cursor-pointer
        hover:scale-110 transition-transform
        "
          >
            <Play className="translate-x-[1px]" />
          </span>
          <span className="cursor-pointer hover:scale-110 transition-transform">
            <Heart className="w-9 h-8 text-zinc-500" />
          </span>
        </div>

        <div className="w-full">
          <span className="flex justify-between items-center">
            <Title>More by {music?.author}</Title>
            <SubText>see discography</SubText>
          </span>
          <div></div>
        </div>

        <div>
          <MusicsAuthor musics={musics} />
        </div>
      </main>
      <ShowImg url={music?.urlImg} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default MusicDetails;
