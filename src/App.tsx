import React from "react";
import { Header, Market } from "./components";
import { ThemeProvider } from "./context";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Market />
    </ThemeProvider>
  );
}

export default App;
