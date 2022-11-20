import Link from "next/link";

import type { SearchProps } from "./type";

import { StyledMenu } from "./styles";
import { Logo } from "../Logo";
import { Search } from "./components/Search";
import { ThemeToggle } from "./components/ThemeToggle";

export const Menu = ({ searchValue, setSearchValue }: SearchProps) => {
  return (
    <StyledMenu>
      <Link href="/" title="Ir para o inicio">
        <Logo />
      </Link>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <ThemeToggle />
    </StyledMenu>
  );
};
