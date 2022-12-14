import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface IDrawerTitleProps {
  closeDrawer: () => void;
}

export const DrawerTitle = ({ closeDrawer }: IDrawerTitleProps) => (
  <Box display="flex">
    <IconButton onClick={closeDrawer} sx={{ m: 1 }}>
      <ArrowBackIcon fontSize="large" />
    </IconButton>
    <Box display="flex" alignItems="center" justifyContent="center" flex={1}>
      <CasinoIcon fontSize="large" />
      <Typography variant="h5" m={2}>
        Bet Slip
      </Typography>
    </Box>
  </Box>
);
