import { useMusic } from "@/pages/hooks/useMusic";
import Text from "../Text";
import SubText from "../SubText";

export default function ControlMusic() {
  const { musicTarget } = useMusic();
  return (
    <>
      <aside className="h-20 bg-black flex justify-between items-center py-2 px-4">
        <div className="w-56 bg-white/10 h-full flex items-center gap-2">
          <img
            src={musicTarget.urlImg}
            alt={musicTarget.name}
            className="h-full w-auto object-cover"
          />
          <div className="flex flex-col">
            <Text>{musicTarget.name.slice(0, 30)}</Text>
            <SubText>{musicTarget.author.slice(0, 30)}</SubText>
          </div>
          <span></span>
        </div>
        <div className="w-56 bg-white/10 h-full"></div>
        <div className="w-56 bg-white/10 h-full"></div>
      </aside>
    </>
  );
}
