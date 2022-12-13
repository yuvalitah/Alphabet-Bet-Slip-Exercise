import React from "react";
import { IBetMarketOption } from "../../../interfaces";
import { Grid } from "@mui/material";
import { BetMarketOption } from "./betMarketOption";

interface IBetMarketOptionsProps {
  betMarketOptions: IBetMarketOption[];
}

export const BetMarketOptions = ({
  betMarketOptions,
}: IBetMarketOptionsProps) => (
  <Grid container justifyContent="center" spacing={2}>
    {betMarketOptions.map((betMarketOption) => (
      <BetMarketOption
        key={betMarketOption.id}
        betMarketOption={betMarketOption}
        alignment={betMarketOptions.length > 2 ? "vertical" : "horizontal"}
      />
    ))}
  </Grid>
);
