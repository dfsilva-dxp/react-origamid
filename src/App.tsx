import React from "react";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes/routes";

import { GlobalStyle } from "./styles/global";
import light from "./styles/themes/light";

function App(): JSX.Element{
  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
