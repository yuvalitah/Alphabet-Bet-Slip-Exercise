import React from "react";
import { IBetMarketOption } from "../../../interfaces";
import { Grid } from "@mui/material";
import { BetMarketOption } from "./betMarketOption";

interface IBetMarketOptionsProps {
  marketId: number;
  marketTitle: string;
  betMarketOptions: IBetMarketOption[];
}

export const BetMarketOptions = ({
  marketId,
  marketTitle,
  betMarketOptions,
}: IBetMarketOptionsProps) => (
  <Grid container justifyContent="center" spacing={2}>
    {betMarketOptions.map((betMarketOption) => (
      <BetMarketOption
        key={betMarketOption.id}
        marketId={marketId}
        marketTitle={marketTitle}
        betMarketOption={betMarketOption}
        alignment={betMarketOptions.length > 2 ? "vertical" : "horizontal"}
      />
    ))}
  </Grid>
);
