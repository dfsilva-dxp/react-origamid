import { ThemeProvider } from "styled-components";
import { LayoutComponent } from "./components/LayoutComponent";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import light from "./styles/themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <LayoutComponent>
        <Transactions />
      </LayoutComponent>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
