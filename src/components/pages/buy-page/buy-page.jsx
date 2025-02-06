import React, { useRef, useState } from "react";
import ChooseProduct from "/src/components/blocks/choose-product/choose-product";
import Order from "/src/components/blocks/order/order";

import { products } from "/src/mocks/products";
import { StyledBuyWrapper } from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Mousewheel, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import ProductCard from "/src/components/ui/productCard/productCard";

function LeftColumn({ swiperRef }) {
  const [selectedProductsIds, setSelectedProductsIds] = useState([]);
  const [price, setPrice] = useState(0);
  return (
    <div style={{ paddingBottom: "40px" }}>
      <ChooseProduct
        products={products}
        swiperRef={swiperRef}
        setSelectedProductsIds={setSelectedProductsIds}
        selectedProductsIds={selectedProductsIds}
        setPrice={setPrice}
      />
      <Order price={price} selectedProductsIds={selectedProductsIds} />
    </div>
  );
}

function CurrentBuyPage() {
  const swiperRef = useRef(null);
  return (
    <StyledBuyWrapper>
      {products && products.length ? (
        <form
          action="https://echo.htmlacademy.ru/"
          method="POST"
          style={{
            width: "1100px",
            margin: "0 auto",
            display: "flex",
            gap: "20px",
          }}
        >
          <LeftColumn swiperRef={swiperRef} />
          <Swiper
            modules={[Navigation, Scrollbar, Mousewheel, FreeMode]}
            slidesPerView="auto"
            spaceBetween={12}
            direction="vertical"
            loop={false}
            freeMode={true}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
              smooth: true,
            }} // Разрешаем колесо
            scrollbar={{ hide: false, draggable: true }} // Добавляем скроллбар
            style={{ height: "calc(100vh - 145px)" }}
            ref={swiperRef}
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // Сохраняем объект Swiper в ref
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} style={{ height: "auto" }}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </form>
      ) : (
        "Продукты были слишком вкусные и их разобрали."
      )}
    </StyledBuyWrapper>
  );
}

function BuyPage() {
  return <CurrentBuyPage />;
}

export default BuyPage;
