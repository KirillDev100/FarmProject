import React from "react";
import {
  AboutStyled,
  AboutWrapper1Styled,
  AboutWrapperStyled,
  AboutTextStyled,
  AboutTitleStyled,
} from "./style";

function About() {
  return (
    <AboutStyled>
      <AboutWrapper1Styled>
        <AboutWrapperStyled>
          <AboutTitleStyled level="1">
            Магазин фермерских продуктов с доставкой
          </AboutTitleStyled>
          <AboutTextStyled>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </AboutTextStyled>
        </AboutWrapperStyled>
      </AboutWrapper1Styled>
    </AboutStyled>
  );
}

export default About;
