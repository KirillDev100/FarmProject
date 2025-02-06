import React, { useState } from "react";
import {
  ProductCardStyled,
  ProductImageStyled,
  ProductTitleStyled,
} from "./style";
import Properties from "/src/components/ui/properties/properties";
import Characteristics from "/src/components/ui/characteristics/characteristics";
import Description from "/src/components/ui/description/description";
import Tabs from "/src/components/ui/tabs/tabs";

function ProductCard({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: <Description product={product} />,
    },
    {
      title: "Характеристики",
      content: <Characteristics product={product} />,
    },
    {
      title: "Свойства",
      content: <Properties product={product} />,
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <ProductCardStyled>
      <ProductImageStyled src={product.image} width="248" height="248" />
      <div>
        <ProductTitleStyled level="4">{product.title}</ProductTitleStyled>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </ProductCardStyled>
  );
}
export default ProductCard;
