import React from "react";
import { IBetMarketOption } from "../../../../interfaces";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  styled,
  Grid,
} from "@mui/material";
import { addNewBetSlipAction, removeBetSlip } from "../../../../redux/actions";
import { useIsBetSelected } from "../../../../hooks";
import { useDispatch } from "react-redux";

interface IBetMarketOptionProps {
  marketTitle: string;
  betMarketOption: IBetMarketOption;
  alignment: "horizontal" | "vertical";
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#E7EBF0" : "#1A2027",
}));

export const BetMarketOption = ({
  marketTitle,
  betMarketOption: { id, title, odd },
  alignment,
}: IBetMarketOptionProps) => {
  const dispatch = useDispatch();
  const isSelected = useIsBetSelected(id);

  return (
    <Grid item xs={12} sm={alignment === "horizontal" ? 12 : 4}>
      <CardActionArea
        onClick={() =>
          isSelected
            ? dispatch(removeBetSlip(id))
            : dispatch(addNewBetSlipAction({ id, title, marketTitle, odd }))
        }
      >
        <StyledCard sx={{ backgroundColor: isSelected ? "green" : "unset" }}>
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
            <Typography variant="subtitle2" color={odd > 0 ? "blue" : "red"}>
              {odd > 0 ? `+${odd}` : odd}
            </Typography>
          </CardContent>
        </StyledCard>
      </CardActionArea>
    </Grid>
  );
};
