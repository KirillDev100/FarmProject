import React from "react";
import { PropertyStyled, PropertyNameStyled } from "./style";

function Properties({ product }) {
  return (
    <>
      <PropertyStyled>
        <PropertyNameStyled>Энергетическая ценность: </PropertyNameStyled>
        {product.properties.energy}
      </PropertyStyled>
      <PropertyStyled>
        <PropertyNameStyled>Пищевая ценность: </PropertyNameStyled>
        {product.properties.value}
      </PropertyStyled>
    </>
  );
}

export default Properties;
