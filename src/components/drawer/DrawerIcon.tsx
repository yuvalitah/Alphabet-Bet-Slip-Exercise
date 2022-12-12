import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface IDrawerIconProps {
  handleDrawerToggle: () => void;
}

export const DrawerIcon = ({ handleDrawerToggle }: IDrawerIconProps) => (
  <IconButton onClick={handleDrawerToggle} sx={{ display: { sm: "none" } }}>
    <MenuIcon fontSize="large" />
  </IconButton>
);
