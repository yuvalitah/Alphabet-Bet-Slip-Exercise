import React from "react";
import { Header, Market } from "./components";
import { ThemeProvider, SnackbarProvider } from "./context";

function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <Header />
        <Market />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
