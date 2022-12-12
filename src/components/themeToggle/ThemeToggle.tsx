import React from "react";
import { useToggleTheme } from "../../hooks";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Switch, useTheme } from "@mui/material";

export const ThemeToggle = () => {
  const { toggleTheme } = useToggleTheme();
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <LightModeIcon fontSize="large" />
      <Switch
        checked={theme.palette.mode === "dark"}
        onChange={toggleTheme}
        color="secondary"
      />
      <DarkModeIcon fontSize="large" />
    </Box>
  );
};
