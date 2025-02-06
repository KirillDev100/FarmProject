import Button from "/src/components/ui/button/button";
import React, { useState } from "react";
import {
  StyledOrder,
  StyledOrderTitle,
  StyledOrderInput,
  StyledPriceTitle,
  StyledPrice,
} from "./style";

function Order({ price, selectedProductsIds }) {
  const [inputValue, setInputValue] = useState("");
  const buttonDisabledCondition =
    selectedProductsIds.length === 0 || inputValue.trim() === "";
  return (
    <StyledOrder>
      <StyledOrderTitle>Сделать заказ</StyledOrderTitle>
      <StyledOrderInput
        placeholder="Введите адрес доставки"
        onInput={(evt) => {
          setInputValue(evt.target.value);
        }}
      />
      <StyledPriceTitle>Цена</StyledPriceTitle>
      <StyledPrice>{price} руб.</StyledPrice>
      <Button minWidth="313" disabled={buttonDisabledCondition} type="submit">
        Купить
      </Button>
    </StyledOrder>
  );
}

export default Order;
