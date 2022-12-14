import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IBetMarket } from "../../../interfaces";
import { BetMarketOptions } from "../betMarketOptions";

interface IBetMarketProps {
  betMarket: IBetMarket;
}

export const BetMarket = ({
  betMarket: { id, title, options },
}: IBetMarketProps) => {
  return (
    <Accordion defaultExpanded={id === 1} disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="large" />}>
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <BetMarketOptions marketTitle={title} betMarketOptions={options} />
      </AccordionDetails>
    </Accordion>
  );
};
