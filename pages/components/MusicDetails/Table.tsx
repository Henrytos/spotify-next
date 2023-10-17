import { MusicType } from "@/pages/api/music";
import { Clock, Play } from "lucide-react";

export default function TableMusic({ music }: { music?: MusicType }) {
  return (
    <table className="w-full ">
      <thead>
        <tr className="text-zinc-500">
          <th>#</th>
          <th className="w-2/3 text-left">Title</th>
          <th className="text-center">Plays</th>
          <th>
            <Clock className="m-auto" />
          </th>
        </tr>
      </thead>
      <tbody className="relative group/item">
        <span className="group-hover/item:scale-100  scale-0 absolute left-2 top-2 transition-transform s ">
          <Play className="text-zinc-500 " />
        </span>
        <tr className=" hover:bg-zinc-800 cursor-pointer transition-colors ">
          <td className=" group-hover/item:opacity-0  text-center">1</td>
          <td className="w-2/3 text-sm">
            <span className="block">{music?.name}</span>
            <span className="text-zinc-400">{music?.author}</span>
          </td>
          <td className="text-center">13123</td>
          <td className="text-center">5:54</td>
        </tr>
      </tbody>
    </table>
  );
}
