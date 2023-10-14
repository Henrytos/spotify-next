import { MusicType } from "@/pages/api/music";
import { Play } from "lucide-react";
import Link from "next/link";
import BtnPlay from "../../BtnPlay";
import Text from "../../Text";

export default function CardGalery({
  music,
}: {
  music?: MusicType | undefined;
}) {
  return (
    <Link
      href={`music/${music?.id}`}
      className="group/item bg-[hsla(0,0%,100%,.1)] w-full h-20 flex items-center gap-4 rounded-md hover:bg-zinc-700/100 transition-colors cursor-pointer relative"
    >
      <img
        src={music?.urlImg}
        alt={music?.name}
        className="h-full object-cover w-20 rounded-l-md"
      />
      <Text active={true}>{music?.name}</Text>
      <span className="absolute right-2">
        <BtnPlay path={music?.id} />
      </span>
    </Link>
  );
}
