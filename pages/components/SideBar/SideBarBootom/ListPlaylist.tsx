import Playlist from "./Playlist";
import { MusicType } from "@/pages/api/music";

export default function ListPlaylist({
  musics,
}: {
  musics: MusicType[] | undefined;
}) {
  return (
    <>
      <div
        className="w-full flex flex-col  gap-3 absolute   h-[100%] right-0 top-0 "
        id="musicLibrary"
      >
        {musics?.map((music, i) => (
          <Playlist music={music} key={i} />
        ))}
      </div>
    </>
  );
}
