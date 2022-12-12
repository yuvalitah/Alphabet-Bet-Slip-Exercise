import { useContext } from "react";
import { ThemeModeContext } from "../context";

export const useToggleTheme = () => useContext(ThemeModeContext);
