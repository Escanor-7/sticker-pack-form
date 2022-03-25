import { useState } from "react";
import { StickerPackContext } from "./context/StickerPackProvider";
import { FormPage } from "./pages/Form";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Routes, Route } from 'react-router-dom';
import { StickerPackCheckout } from "./pages/StickerPackCheckout";

export const App = () => {
  const [stickerPackData, setStickerPackData] = useState([]);

  return (
    <StickerPackContext.Provider value={{ stickerPackData, setStickerPackData }} >
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/checkout" element={<StickerPackCheckout />} />
      </Routes>
      <GlobalStyle />
    </StickerPackContext.Provider>
  );
}