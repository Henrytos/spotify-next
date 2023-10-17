import { useContext, useEffect } from "react";
import { ContextBg, bgType } from "../contexts/ContextBg";

export const useBg = () => {
  const bgs = [
    "from-red-600/40",
    "from-orange-600/40",
    "from-lime-600/40",
    "from-green-600/40",
    "from-emerald-600/40",
    "from-amber-600/40",
  ];

  const { bg, setBg } = useContext<bgType>(ContextBg);

  const setBgElement = (i: number) => {
    setBg(bgs[i]);
  };

  const colorTarget = (i: number) => {
    return bgs[i];
  };
  return { setBgElement, colorTarget };
};
