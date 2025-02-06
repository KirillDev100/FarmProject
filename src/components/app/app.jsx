import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import ScrollFix from "/src/scroll-fix";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollFix />
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route index element={<MainPage />} />
            <Route path="order" element={<BuyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
