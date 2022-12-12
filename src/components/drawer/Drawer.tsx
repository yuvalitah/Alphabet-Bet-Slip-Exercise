import React from "react";
import { Drawer as MuiDrawer, Divider, Box } from "@mui/material";
import { DrawerTitle } from "./DrawerTitle";
import { ThemeToggle } from "../themeToggle";

interface IDrawerProps {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}

export const Drawer = ({ isOpen, handleDrawerToggle }: IDrawerProps) => (
  <MuiDrawer variant="temporary" open={isOpen} onClose={handleDrawerToggle}>
    <Box textAlign="center" flex={1}>
      <DrawerTitle />
      <Divider />
      <Box mt={3} sx={{ display: { xs: "block", sm: "none" } }}>
        <ThemeToggle />
      </Box>
    </Box>
  </MuiDrawer>
);
