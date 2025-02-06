import React, { useContext } from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledSpan, StyledLink } from "./style";

function Logo() {
  return (
    <StyledLink href="#" to="/">
      <LogoImage />
      <StyledSpan>Фермерские продукты</StyledSpan>
    </StyledLink>
  );
}

export default Logo;
