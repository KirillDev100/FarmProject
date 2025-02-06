import React from "react";
import { PropertyStyled, PropertyNameStyled } from "./style";

function Characteristics({ product }) {
  return (
    <>
      <PropertyStyled>
        <PropertyNameStyled>Масса: </PropertyNameStyled>
        {product.characteristics.weight}
      </PropertyStyled>
      <PropertyStyled>
        <PropertyNameStyled>Срок годности: </PropertyNameStyled>
        {product.characteristics.period}
      </PropertyStyled>
      <PropertyStyled>
        <PropertyNameStyled>Порода: </PropertyNameStyled>
        {product.characteristics.type}
      </PropertyStyled>
      <PropertyStyled>
        <PropertyNameStyled>Место происхождения: </PropertyNameStyled>
        {product.characteristics.place}
      </PropertyStyled>
    </>
  );
}

export default Characteristics;
