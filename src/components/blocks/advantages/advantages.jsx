import React, { useContext } from "react";
import {
  AdvantagesStyled,
  AdvantagesListStyled,
  ButtonStyled,
  TitleStyled,
} from "./style";
import advantagesList from "/src/mocks/advantagesList.js";
import AdvantageCard from "/src/components/ui/advantageCard/advantageCard";

function Advantages() {
  return (
    <AdvantagesStyled>
      <TitleStyled level="2">Почему фермерские продукты лучше?</TitleStyled>
      <AdvantagesListStyled>
        {advantagesList.map(function (card, index) {
          return (
            <AdvantageCard
              key={index}
              isFarm={card.isFarm}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          );
        })}
      </AdvantagesListStyled>
      <ButtonStyled minWidth="260" to="/order">
        Купить
      </ButtonStyled>
    </AdvantagesStyled>
  );
}

export default Advantages;
