import Home from "./components/Home";
import { ReactNode } from "react";

export default function index({ children }: { children?: ReactNode }) {
  return <Home />;
}
