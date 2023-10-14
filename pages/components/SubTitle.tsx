import { ReactNode } from "react";

export default function SubTitle({ children }: { children: ReactNode }) {
  return <span className="text-2xl font-semibold">{children}</span>;
}
