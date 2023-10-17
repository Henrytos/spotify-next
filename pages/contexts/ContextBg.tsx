import { ReactNode, createContext, useState } from "react";
import { useBg } from "../hooks/useBg";
export type bgType = {
  bg: string;
  setBg: (value: string | number) => void;
};

export const ContextBg = createContext<bgType>({} as bgType);

export default function ContextBgProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [bg, setBg] = useState<bgType | any>("from-zinc-600/40");
  return (
    <ContextBg.Provider value={{ bg, setBg }}>
      <main
        className={`
      h-[calc(100vh_-_6rem)] overflow-y-auto my-auto grow flex p-2 rounded-md bg-gradient-to-b  ${bg}  via-[#121212]   to-[#121212]  transition-colors `}
      >
        {children}
      </main>
    </ContextBg.Provider>
  );
}
