import React from "react";
import {
  AdvantageStyled,
  AdvantageTypeStyled,
  AdvantagesTitleStyled,
  AdvantageTextStyled,
  AdvantageIconStyled,
} from "./style";

function AdvantageCard({ isFarm, icon, title, text }) {
  return (
    <AdvantageStyled $isFarm={isFarm}>
      <AdvantageIconStyled src={icon} width="56" height="56" />
      <AdvantageTypeStyled $isFarm={isFarm}>
        {isFarm ? "Фермерские продукты" : "Магазинные продукты"}
      </AdvantageTypeStyled>
      <AdvantagesTitleStyled>{title}</AdvantagesTitleStyled>
      <AdvantageTextStyled>{text}</AdvantageTextStyled>
    </AdvantageStyled>
  );
}

export default AdvantageCard;
