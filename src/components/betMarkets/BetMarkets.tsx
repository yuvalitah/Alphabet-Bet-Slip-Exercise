import React from "react";
import { BET_MARKETS } from "../../mocks";
import { Box } from "@mui/material";
import { BetMarket } from "./betMarket";

export const BetMarkets = () => (
  <Box display="flex" flexDirection="column" flex={1} mt={5} gap={2}>
    {BET_MARKETS.map((betMarket) => (
      <BetMarket key={betMarket.id} betMarket={betMarket} />
    ))}
  </Box>
);
