import React from "react";
import { IconButton, Badge } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";
import { useBets } from "../../hooks";

interface IDrawerIconProps {
  handleDrawerToggle: () => void;
}

export const DrawerIcon = ({ handleDrawerToggle }: IDrawerIconProps) => {
  const bets = useBets();

  return (
    <IconButton onClick={handleDrawerToggle}>
      <Badge color="secondary" badgeContent={bets.length}>
        <CasinoIcon fontSize="large" />
      </Badge>
    </IconButton>
  );
};
