import React from "react";
import { styled, Paper } from "@mui/material";
import { SortingList } from "../../sortingList";
import { GameDetails } from "../../gameDetails";

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.mode === "light" ? "#E7EBF0" : "#1A2027",
  flex: 1,
}));

export const Market = () => {
  return (
    <StyledPaper>
      <GameDetails />
      <SortingList />
    </StyledPaper>
  );
};
