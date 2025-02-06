import React, { useCallback, useState } from "react";
import {
  StyledChooseProduct,
  StyledChooseTitle,
  StyledInputWrapper,
  StyledCheckboxElement,
  StyledInput,
} from "./style";

function Checkbox({
  product,
  index,
  setSelectedProductsIds,
  selectedProductsIds,
  swiperRef,
  setPrice,
}) {
  const handleClick = () => {
    setSelectedProductsIds((prevSelected) =>
      prevSelected.includes(product.id)
        ? prevSelected.filter((id) => id !== product.id)
        : [...prevSelected, product.id]
    );

    if (!selectedProductsIds.includes(product.id)) {
      swiperRef.current.slideTo(product.id);
      setPrice((prevSelected) => {
        return prevSelected + Number(product.description.price);
      });
    } else {
      setPrice((prevSelected) => {
        return prevSelected - Number(product.description.price);
      });
    }
  };

  return (
    <StyledInputWrapper>
      {product.title}
      <StyledInput key={index} onChange={handleClick} />
      <StyledCheckboxElement />
    </StyledInputWrapper>
  );
}

function ChooseProduct({
  products,
  swiperRef,
  selectedProductsIds,
  setSelectedProductsIds,
  setPrice,
}) {
  console.log(selectedProductsIds);
  return (
    <StyledChooseProduct>
      <StyledChooseTitle>Выберите продукты</StyledChooseTitle>
      {products.map((product, index) => {
        return (
          <Checkbox
            product={product}
            index={index}
            setSelectedProductsIds={setSelectedProductsIds}
            selectedProductsIds={selectedProductsIds}
            swiperRef={swiperRef}
            setPrice={setPrice}
          />
        );
      })}
    </StyledChooseProduct>
  );
}

export default ChooseProduct;
