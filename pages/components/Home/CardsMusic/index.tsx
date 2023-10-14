import { MusicType } from "@/pages/api/music";
import Link from "next/link";
import BtnPlay from "../../BtnPlay";
import Text from "../../Text";
import SubText from "../../SubText";
import { useMusic } from "@/pages/hooks/useMusic";

export default function CardsMusic({
  musics,
}: {
  musics: MusicType[] | undefined;
}) {
  const musicsTarget = musics?.slice(0, 6);
  const { setMusicTarget } = useMusic();

  return (
    <div className="w-full flex flex-wrap gap-4 ">
      {musicsTarget?.map((music, i) => (
        <Link
          key={i}
          href={`/`}
          className="group/item  w-52 h-auto p-4 flex flex-col gap-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors relative"
          onClick={() => setMusicTarget(music)}
        >
          <img
            alt={music.name}
            src={music.urlImg}
            className="w-44 h-44 object-cover rounded-lg"
          />
          <span className="absolute right-3 top-40">
            <BtnPlay path={music.id} />
          </span>
          <Text active={true}>{music.name.slice(0, 30)}</Text>
          <SubText>{music.author.slice(0, 30)}</SubText>
        </Link>
      ))}
    </div>
  );
}
