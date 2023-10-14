import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="h-[calc(100vh_-_6rem)] my-auto grow flex p-2 rounded-md bg-[#121212]">
        {children}
      </main>
    </>
  );
}
