import React from "react";
import { Typography, Box, IconButton, Divider } from "@mui/material";
import { useBets, useSnackbar } from "../../../../hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeAllBets } from "../../../../redux/actions";
import { BetSlipItem } from "../betSlipItem";
import { BetSlipWagerInput } from "../betSlipWagerInput";

interface BetSlipContentDetailsProps {
  variant: "single" | "builder";
}

export const BetSlipContentDetails = ({
  variant,
}: BetSlipContentDetailsProps) => {
  const bets = useBets();
  const dispatch = useDispatch();
  const betSlipBuilderOddsSummary = bets.reduce(
    (sum, nextBet) => sum + nextBet.odds,
    0
  );
  const { openSnackbar } = useSnackbar();

  const removeAllBetsFromBetSlip = (): void => {
    dispatch(removeAllBets());
    openSnackbar(
      "All Bets has been successfully removed from the Bet Slip",
      "success"
    );
  };

  return (
    <Box display="flex">
      <Box display="flex" flexDirection="column" flex={1} gap={3}>
        {variant === "builder" && (
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
        )}
        <Typography variant="subtitle1" textAlign="start">
          France V Morocco
        </Typography>
        {bets.map((bet) => (
          <Box key={bet.id}>
            <BetSlipItem variant={variant} bet={bet} />
            {variant === "single" && <Divider key={bet.id} sx={{ mt: 2 }} />}
          </Box>
        ))}
        {variant === "builder" && <BetSlipWagerInput variant="builder" />}
      </Box>
      {variant === "builder" && (
        <Box display="flex" flexDirection="column" gap={1} mr={1}>
          <IconButton onClick={() => removeAllBetsFromBetSlip()}>
            <DeleteIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="subtitle1"
            color={betSlipBuilderOddsSummary > 0 ? "blue" : "red"}
            mr={1.5}
          >
            {betSlipBuilderOddsSummary > 0
              ? `+${betSlipBuilderOddsSummary}`
              : betSlipBuilderOddsSummary}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
