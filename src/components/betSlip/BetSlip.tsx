import React from "react";
import { Box, Typography } from "@mui/material";
import { BetSlipContent } from "./betSlipContent";
import { useBets } from "../../hooks";

export const BetSlip = () => {
  const bets = useBets();
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      sx={{ mt: { xs: 2, sm: 0 } }}
    >
      {bets.length ? (
        <BetSlipContent variant="builder" />
      ) : (
        <Typography variant="h5" color="GrayText" mt={2}>
          Please Add Bets
        </Typography>
      )}
    </Box>
  );
};
