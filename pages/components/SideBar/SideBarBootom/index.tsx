import { Icon } from "../Icon";
import { Library, Plus, ArrowRight, Search } from "lucide-react";
import Topico from "./Topico";
import { NextPage } from "next";
import { ReactNode } from "react";
import { useMusics } from "@/pages/hooks/useMusics";
import ListPlaylist from "./ListPlaylist";

const SideBarBottom: NextPage = ({ children }: { children?: ReactNode }) => {
  const { musics } = useMusics();
  return (
    <div className="w-full flex flex-col bg-[#121212] gap-5 p-5 rounded-md relative flex-grow">
      <div className="flex justify-between ">
        <Icon>
          <Library />
          <span>Bibliteca</span>
        </Icon>
        <span className="flex gap-4 text-zinc-400">
          <Plus className=" rounded-full cursor-pointer hover:text-zinc-100 hover:bg-zinc-800 transition-colors" />
          <ArrowRight className=" rounded-full cursor-pointer hover:text-zinc-100 hover:bg-zinc-800 transition-colors" />
        </span>
      </div>
      <div className="flex gap-3 flex-wrap">
        <Topico>Playlist</Topico>
        <Topico>Playlist</Topico>
        <Topico>Playlist</Topico>
      </div>
      <div className="text-zinc-400 flex justify-between">
        <Search className="p-[1px]  hover:text-zinc-100 transition-colors cursor-pointer" />
        <span className="flex items-center gap-2 hover:text-zinc-100 transition-colors cursor-pointer">
          Criador
        </span>
      </div>
      <div className="relative w-full h-full overflow-y-auto">
        <ListPlaylist musics={musics} />
      </div>
    </div>
  );
};
export default SideBarBottom;
