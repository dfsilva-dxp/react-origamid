import React from "react";

import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import { AppRoutes } from "./routes/routes";

import { GlobalStyle } from "./styles/global";

function App(): JSX.Element{
  return (
      <ProductsContextProvider>
        <BrowserRouter>
          <GlobalStyle />
          <AppRoutes />
        </BrowserRouter>
      </ProductsContextProvider>
  );
}

export default App;
