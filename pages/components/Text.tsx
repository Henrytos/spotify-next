import { ReactNode } from "react";

export default function Text({
  children,
  active,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <span className={`text-base ${active ? "font-semibold" : ""}`}>
      {children}
    </span>
  );
}
