import React from "react";
import { Box, Typography } from "@mui/material";
import moment from "moment";

export const GameDetailsTime = () => (
  <Box display="flex" alignItems="center" ml={2} maxWidth={150}>
    <Typography variant="subtitle2" textAlign="center">
      {moment("2022-12-14T21:00:00").format("dddd DD/MM/YYYY HH:mm")}
    </Typography>
  </Box>
);
