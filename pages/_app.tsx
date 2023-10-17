import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MusicsContextProvider from "./contexts/ContextMusics";
import MusicContextProvider from "./contexts/ContextMusic";
import ContextBgProvider from "./contexts/ContextBg";
import SideBar from "./components/SideBar";
import ControlMusic from "./components/MusicControler";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MusicsContextProvider>
      <MusicContextProvider>
        <main className="flex flex-col">
          <div className="flex">
            <SideBar />
            <ContextBgProvider>
              <Component {...pageProps} />
            </ContextBgProvider>
          </div>
          <ControlMusic />
        </main>
      </MusicContextProvider>
    </MusicsContextProvider>
  );
}
