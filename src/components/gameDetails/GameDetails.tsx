import React from "react";
import { Box } from "@mui/material";
import { GameDetailsHeader } from "./gameDetailsHeader";
import { GameDetailsCard } from "./gameDetailsCard";

export const GameDetails = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    mt={4}
    width="90%"
  >
    <GameDetailsHeader />
    <GameDetailsCard />
  </Box>
);
