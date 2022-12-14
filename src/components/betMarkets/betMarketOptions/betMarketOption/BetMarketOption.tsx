import React from "react";
import { IBetMarketOption, IBetSlipItem } from "../../../../interfaces";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  styled,
  Grid,
} from "@mui/material";
import { addNewBet, removeBet } from "../../../../redux/actions";
import { useIsBetSelected, useSnackbar } from "../../../../hooks";
import { useDispatch } from "react-redux";

interface IBetMarketOptionProps {
  marketId: number;
  marketTitle: string;
  betMarketOption: IBetMarketOption;
  alignment: "horizontal" | "vertical";
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#dfedff" : "#1A2027",
}));

export const BetMarketOption = ({
  marketId,
  marketTitle,
  betMarketOption: { id, title, odds },
  alignment,
}: IBetMarketOptionProps) => {
  const dispatch = useDispatch();
  const isSelected = useIsBetSelected(id);
  const { openSnackbar } = useSnackbar();

  const addBetToBetSlip = (bet: IBetSlipItem): void => {
    dispatch(addNewBet({ id, marketId, title, marketTitle, odds, wager: 0 }));
    openSnackbar("The Bet was added successfully to the Bet Slip!", "success");
  };

  const removeBetFromBetSlip = (id: number): void => {
    dispatch(removeBet(id));
    openSnackbar(
      "The Bet was removed successfully from the Bet Slip!",
      "success"
    );
  };

  return (
    <Grid item xs={12} sm={alignment === "horizontal" ? 12 : 4}>
      <CardActionArea
        onClick={() =>
          isSelected
            ? removeBetFromBetSlip(id)
            : addBetToBetSlip({
                id,
                marketId,
                title,
                marketTitle,
                odds,
                wager: 0,
              })
        }
      >
        <StyledCard sx={{ backgroundColor: isSelected ? "green" : "" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: alignment === "horizontal" ? "row" : "column",
              alignItems: alignment === "horizontal" ? "unset" : "center",
              gap: alignment === "horizontal" ? 0 : 1,
            }}
          >
            <Typography variant="subtitle2" flex={1}>
              {title}
            </Typography>
            <Typography variant="subtitle2" color={odds > 0 ? "blue" : "red"}>
              {odds > 0 ? `+${odds}` : odds}
            </Typography>
          </CardContent>
        </StyledCard>
      </CardActionArea>
    </Grid>
  );
};
