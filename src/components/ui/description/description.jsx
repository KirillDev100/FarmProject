import React from "react";
import { DescriptionTextStyled, DescriptionPriceStyled } from "./style";

function Description({ product }) {
  console.log(product, "description");
  return (
    <>
      <DescriptionTextStyled>{product.description.text}</DescriptionTextStyled>
      <DescriptionPriceStyled>
        {product.description.price} руб./700 гр.
      </DescriptionPriceStyled>
    </>
  );
}

export default Description;
