import { useMusics } from "@/pages/hooks/useMusics";
import { ReactNode } from "react";
import CardsMusic from "../Home/CardsMusic";
import { Link } from "lucide-react";
import { useMusic } from "@/pages/hooks/useMusic";
import Text from "../Text";
import SubText from "../SubText";
import BtnPlay from "../BtnPlay";

const MusicsAuthor = ({
  children,
  author,
}: {
  children?: ReactNode;
  author?: string;
}) => {
  const { musics } = useMusics();
  const { setMusicTarget } = useMusic();
  return (
    <div>
      {musics?.map((music, i) => (
        <Link
          key={i}
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
};

export default MusicsAuthor;
