import Container from "./components/Container";
import ControlMusic from "./components/MusicControler";
import SideBar from "./components/SideBar";
import MusicContextProvider from "./contexts/ContextMusics";

export default function seach() {
  return (
    <main>
      <MusicContextProvider>
        <main className="flex flex-col">
          <div className="flex">
            <SideBar />
            <Container>seach</Container>
          </div>
          <ControlMusic />
        </main>
      </MusicContextProvider>
    </main>
  );
}
