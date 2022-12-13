import React from "react";
import { Card, Divider, styled, CardContent } from "@mui/material";
import { GameDetailsTeams } from "./gameDetailsTeams";
import { GameDetailsTime } from "./gameDetailsTime";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignSelf: "stretch",
  marginTop: theme.spacing(2),
}));

export const GameDetailsCard = () => (
  <StyledCard>
    <CardContent sx={{ display: "flex", flex: 1 }}>
      <GameDetailsTeams />
      <Divider orientation="vertical" />
      <GameDetailsTime />
    </CardContent>
  </StyledCard>
);
