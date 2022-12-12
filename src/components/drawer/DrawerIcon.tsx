import React from "react";
import { IconButton } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";

interface IDrawerIconProps {
  handleDrawerToggle: () => void;
}

export const DrawerIcon = ({ handleDrawerToggle }: IDrawerIconProps) => (
  <IconButton onClick={handleDrawerToggle}>
    <CasinoIcon fontSize="large" />
  </IconButton>
);
