import React from "react";
import { Box, Typography, styled } from "@mui/material";
import {
  FRANCE_IMAGE_LOGO_URL,
  MOROCCO_IMAGE_LOGO_URL,
} from "../../../../constants";

const StyledImageBox = styled(Box)({
  width: 20,
  height: 20,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
});

export const GameDetailsTeams = () => (
  <Box display="flex" flexDirection="column" gap={2} flex={1}>
    <Box display="flex" alignItems="center" gap={1}>
      <StyledImageBox
        sx={{
          backgroundImage: `url(${FRANCE_IMAGE_LOGO_URL})`,
        }}
      />
      <Typography variant="subtitle1">France</Typography>
    </Box>
    <Box display="flex" alignItems="center" gap={1}>
      <StyledImageBox
        sx={{
          backgroundImage: `url(${MOROCCO_IMAGE_LOGO_URL})`,
        }}
      />
      <Typography variant="subtitle1">Morocco</Typography>
    </Box>
  </Box>
);
