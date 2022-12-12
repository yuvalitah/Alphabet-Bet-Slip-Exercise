import React from "react";
import { Typography, Box } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";

export const HeaderTitle = () => (
  <Box
    display="flex"
    alignItems="center"
    sx={{ display: { xs: "none", sm: "flex" } }}
  >
    <CasinoIcon fontSize="large" />
    <Typography variant="h4" ml={3} noWrap>
      Bet Slip App!
    </Typography>
  </Box>
);
