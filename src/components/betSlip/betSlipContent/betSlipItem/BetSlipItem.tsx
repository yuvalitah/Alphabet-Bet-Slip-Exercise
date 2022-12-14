import React from "react";
import { IBetSlipItem } from "../../../../interfaces";
import { Box, Typography, IconButton } from "@mui/material";
import { removeBet } from "../../../../redux/actions";
import { useDispatch } from "react-redux";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { BetSlipWagerInput } from "../betSlipWagerInput";

interface IBetSlipItemProps {
  variant: "single" | "builder";
  bet: IBetSlipItem;
}

export const BetSlipItem = ({ variant, bet }: IBetSlipItemProps) => {
  const dispatch = useDispatch();
  const { id, marketTitle, title, odds } = bet;

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton onClick={() => dispatch(removeBet(id))}>
        <RemoveCircleOutlineIcon color="error" />
      </IconButton>
      <Box
        display="flex"
        flexDirection="column"
        gap={variant === "single" ? 2 : 0}
      >
        <Box display="flex" flexDirection="column">
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1" textAlign="start">
              {title}
            </Typography>
            {variant === "single" && (
              <Typography variant="subtitle1" color={odds > 0 ? "blue" : "red"}>
                {odds > 0 ? `+${odds}` : odds}
              </Typography>
            )}
          </Box>
          <Typography variant="body1" color="GrayText" textAlign="start">
            {marketTitle}
          </Typography>
        </Box>
        {variant === "single" && (
          <BetSlipWagerInput variant="single" bet={bet} />
        )}
      </Box>
    </Box>
  );
};
