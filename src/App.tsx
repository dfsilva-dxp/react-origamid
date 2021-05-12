import { ThemeProvider } from "styled-components";
import { LayoutComponent } from "./components/LayoutComponent";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import dark from "./styles/themes/dark";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <LayoutComponent>
        <Transactions />
      </LayoutComponent>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
