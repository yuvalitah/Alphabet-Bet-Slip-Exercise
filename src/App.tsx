import React from "react";
import { Header } from "./components";
import { ThemeProvider } from "./context";

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
