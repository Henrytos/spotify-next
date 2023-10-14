import { useMusics } from "@/pages/hooks/useMusics";
import SubTitle from "../SubTitle";
import Title from "../Title";
import GaleryMusic from "./GaleryMusic";
import CardsMusic from "./CardsMusic";

export default function Home() {
  const { musics } = useMusics();
  return (
    <main className="w-full h-full max-w-[1600px] flex flex-col gap-4">
      <Title>Good evening</Title>
      <GaleryMusic />
      <SubTitle>Your top mixes</SubTitle>
      <CardsMusic musics={musics} />
      <SubTitle>Popular artist</SubTitle>
    </main>
  );
}
