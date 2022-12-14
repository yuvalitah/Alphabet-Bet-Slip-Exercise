import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BetSlipContentDetails } from "./betSlipContentDetails";

interface IBetSlipContentProps {
  variant: "single" | "builder";
}

export const BetSlipContent = ({ variant }: IBetSlipContentProps) => (
  <Accordion defaultExpanded disableGutters>
    <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="large" />}>
      <Typography variant="h6">
        {variant === "single" ? "Singles" : "Build Your Bet"}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <BetSlipContentDetails variant={variant} />
    </AccordionDetails>
  </Accordion>
);
