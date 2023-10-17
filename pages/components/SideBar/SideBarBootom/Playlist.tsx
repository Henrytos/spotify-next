import { MusicType } from "@/pages/api/music";
import Text from "../../Text";
import SubText from "../../SubText";

export default function Playlist({ music }: { music: MusicType }) {
  return (
    <div className="w-full flex items-center gap-2 cursor-pointer rounded hover:bg-zinc-800 transition-colors ">
      <div>
        <img
          src={music.urlImg}
          alt={music.name}
          className="w-14 h-14 object-cover rounded-md "
        />
      </div>
      <div className="flex flex-col">
        <Text active={true}>{music.name.slice(0, 35)}</Text>
        <SubText>{music.author.slice(0, 35)}</SubText>
      </div>
    </div>
  );
}
