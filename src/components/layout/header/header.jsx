import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { HeaderStyled, HeaderWrapperStyled } from "./style";

function Header() {
  return (
    <HeaderStyled>
      <HeaderWrapperStyled>
        <Logo />
        <Nav />
      </HeaderWrapperStyled>
    </HeaderStyled>
  );
}

export default Header;
