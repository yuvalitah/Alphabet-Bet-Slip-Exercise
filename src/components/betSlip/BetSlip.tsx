import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import { BetSlipContent } from "./betSlipContent";
import { useBets, useIsBetSlipValid } from "../../hooks";
import { useDispatch } from "react-redux";
import { removeAllBets } from "../../redux/actions";

interface IBetSlipProps {
  closeDrawer: () => void;
}

export const BetSlip = ({ closeDrawer }: IBetSlipProps) => {
  const bets = useBets();
  const isBetSlipValid = useIsBetSlipValid();
  const dispatch = useDispatch();

  const postBets = (): void => {
    dispatch(removeAllBets());
    closeDrawer();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      sx={{ mt: { xs: 2, sm: 0 } }}
    >
      {bets.length ? (
        <>
          <BetSlipContent variant="builder" />
          <Divider />
          <BetSlipContent variant="single" />
          <Button
            variant="contained"
            color="success"
            disabled={!isBetSlipValid}
            sx={{ minHeight: 50 }}
            onClick={postBets}
          >
            Place Your Bets!
          </Button>
        </>
      ) : (
        <Typography variant="h5" color="GrayText" mt={2}>
          Please Add Bets
        </Typography>
      )}
    </Box>
  );
};
