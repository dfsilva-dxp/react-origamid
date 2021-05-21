import { ThemeProvider } from "styled-components";
import { FirebaseConnectionProvider } from "./hooks/useFirebaseConnection";
import { Routes } from "./routes";

import { GlobalStyle } from "./styles/global";
import light from "./styles/themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <FirebaseConnectionProvider>
        <Routes />
      </FirebaseConnectionProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
