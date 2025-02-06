import React from "react";
import { TitleStyled } from "./style";

function Title({ level, children, className }) {
  return (
    <TitleStyled $level={level} as={`h${level}`} className={className}>
      {children}
    </TitleStyled>
  );
}

export default Title;
