import { ReactNode } from "react";

const Topico = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <span className="rounded-full bg-zinc-800 text-zinc-100 py-1 px-3 text-sm hover:bg-zinc-700 cursor-pointer transition-colors">
        {children}
      </span>
    </>
  );
};
export default Topico;
