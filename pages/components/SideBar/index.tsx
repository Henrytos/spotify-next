import SideBarBottom from "./SideBarBootom";
import { SideBarTop } from "./SideBarTop";

export default function SideBar() {
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
