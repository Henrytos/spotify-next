import { Play } from "lucide-react";
import Link from "next/link";

export default function BtnPlay({ path }: { path: string | undefined }) {
  return (
    <Link
      href={`music/${path}`}
      className="invisible group-hover/item:visible w-12 h-12 bg-green-600 rounded-full flex items-center justify-center 
        shadow-md shadow-zinc-600/30
        hover:scale-110 transition-transform
        group-hover/item:translate-y-0
        translate-y-5
        "
    >
      <Play className="translate-x-[1px]" />
    </Link>
  );
}
