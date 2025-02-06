import React from "react";
import Logo from "/src/components/ui/logo/logo";
import {
  FooterStyled,
  FooterWrapperStyled,
  FooterCopyrightStyled,
} from "./style";

function Footer() {
  return (
    <FooterStyled>
      <FooterWrapperStyled>
        <Logo />
        <FooterCopyrightStyled>Создано 2021</FooterCopyrightStyled>
      </FooterWrapperStyled>
    </FooterStyled>
  );
}

export default Footer;
