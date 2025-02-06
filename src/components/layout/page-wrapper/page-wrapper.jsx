import React, { useState } from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { MainStyled } from "./style";
import { Outlet } from "react-router-dom";

let ActivePageContext;

// Обёртка для контента страниц
function PageWrapper({ children }) {
  return (
    <>
      <Header />
      <MainStyled>
        <Outlet />
      </MainStyled>
      <Footer />
    </>
  );
}

export default PageWrapper;
