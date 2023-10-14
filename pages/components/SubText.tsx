import { ReactNode } from "react";

export default function SubText({ children }: { children: ReactNode }) {
  return <span className="w- text-zinc-50/60 text-sm ">{children}</span>;
}
