import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { useBets } from "../../../../hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeAllBets } from "../../../../redux/actions";
import { BetSlipBuilderItem } from "../betSlipItem";
import { BetSlipWagerInput } from "../betSlipWagerInput";

export const BetSlipBuilder = () => {
  const bets = useBets();
  const dispatch = useDispatch();
  const betSlipBuilderOddsSummary = bets.reduce(
    (sum, nextBet) => sum + nextBet.odds,
    0
  );

  return (
    <Box display="flex">
      <Box display="flex" flexDirection="column" flex={1} gap={3}>
        <Box
          sx={{
            display: { xs: "flex", sm: "block" },
            alignItems: { xs: "start", sm: "center" },
          }}
        >
          <Typography variant="subtitle1" color="GrayText">
            {bets.length} Selections
          </Typography>
        </Box>
        <Typography variant="subtitle1" textAlign="start">
          France V Morocco
        </Typography>
        {bets.map((bet) => (
          <BetSlipBuilderItem key={bet.id} bet={bet} />
        ))}
        <BetSlipWagerInput variant="builder" />
      </Box>
      <Box display="flex" flexDirection="column" gap={1}>
        <IconButton onClick={() => dispatch(removeAllBets())}>
          <DeleteIcon fontSize="large" />
        </IconButton>
        <Typography variant="subtitle1" mr={1.5}>
          {betSlipBuilderOddsSummary > 0
            ? `+${betSlipBuilderOddsSummary}`
            : betSlipBuilderOddsSummary}
        </Typography>
      </Box>
    </Box>
  );
};
