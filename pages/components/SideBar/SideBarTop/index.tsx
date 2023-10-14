import { Home, Search } from "lucide-react";
import { Icon } from "../Icon";
import Link from "next/link";

export const SideBarTop = () => {
  return (
    <div className="flex flex-col bg-[#121212] gap-5 p-5 rounded-md">
      <Link href="/">
        <Icon>
          <Home />
          Início
        </Icon>
      </Link>
      <Link href="/seach">
        <Icon>
          <Search />
          Buscar
        </Icon>
      </Link>
    </div>
  );
};
