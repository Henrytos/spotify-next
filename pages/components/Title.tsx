import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return <span className="text-3xl font-semibold">{children}</span>;
}
