import { useState } from "react";
import SideBarBottom from "./SideBarBootom";
import { SideBarTop } from "./SideBarTop";

export default function SideBar() {
  const [isOpen, setIsopen] = useState(true);

  return (
    <main
      className={`h-[calc(100vh_-_5rem)] w-[50%] max-w-md
      }  flex flex-col gap-2 p-2 `}
    >
      <SideBarTop />
      <SideBarBottom />
    </main>
  );
}
