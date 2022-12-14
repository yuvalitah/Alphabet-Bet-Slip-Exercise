import React from "react";
import { Drawer as MuiDrawer, Divider, Box } from "@mui/material";
import { DrawerTitle } from "./DrawerTitle";
import { ThemeToggle } from "../themeToggle";
import { BetSlip } from "../betSlip";

interface IDrawerProps {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}

export const Drawer = ({ isOpen, handleDrawerToggle }: IDrawerProps) => (
  <MuiDrawer variant="temporary" open={isOpen} onClose={handleDrawerToggle}>
    <Box display="flex" flexDirection="column" textAlign="center" flex={1}>
      <DrawerTitle />
      <Divider />
      <Box mt={3} sx={{ display: { xs: "block", sm: "none" } }}>
        <ThemeToggle />
      </Box>
      <BetSlip />
    </Box>
  </MuiDrawer>
);
