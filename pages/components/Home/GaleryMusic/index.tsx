import { useMusics } from "@/pages/hooks/useMusics";
import CardGalery from "./CardGalery";
import { useBg } from "@/pages/hooks/useBg";

export default function GaleryMusic() {
  const { setBgElement } = useBg();
  let { musics } = useMusics();
  musics = musics?.slice(0, 6);
  return (
    <section className="grid xl:grid-cols-3 grid-cols-2 gap-x-3 gap-y-2 transition-colors">
      {musics?.map((music, i) => (
        <div key={i} onMouseEnter={() => setBgElement(i)}>
          <CardGalery music={music} key={i} />
        </div>
      ))}
    </section>
  );
}
