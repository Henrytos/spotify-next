import Home from "./components/Home";
import ControlMusic from "./components/MusicControler";
import SideBar from "./components/SideBar";
import ContextBgProvider from "./contexts/ContextBg";
import MusicContextProvider from "./contexts/ContextMusic";
import MusicsContextProvider from "./contexts/ContextMusics";
import { ReactNode } from "react";

export default function index({ children }: { children?: ReactNode }) {
  return (
    <>
      <MusicsContextProvider>
        <MusicContextProvider>
          <main className="flex flex-col">
            <div className="flex">
              <SideBar />
              <ContextBgProvider>
                <Home />
              </ContextBgProvider>
            </div>
            <ControlMusic />
          </main>
        </MusicContextProvider>
      </MusicsContextProvider>
    </>
  );
}
