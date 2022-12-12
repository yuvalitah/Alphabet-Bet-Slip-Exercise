import React from "react";
import { Box, Typography } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";

export const DrawerTitle = () => (
  <Box display="flex" alignItems="center" justifyContent="center">
    <CasinoIcon fontSize="large" />
    <Typography variant="h5" m={2}>
      Bet Slip App!
    </Typography>
  </Box>
);
