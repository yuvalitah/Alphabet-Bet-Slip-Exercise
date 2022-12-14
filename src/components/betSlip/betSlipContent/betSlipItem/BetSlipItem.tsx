import React from "react";
import { IBetSlipItem } from "../../../../interfaces";
import { Box, Typography, IconButton } from "@mui/material";
import { removeBet } from "../../../../redux/actions";
import { useDispatch } from "react-redux";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

interface IBetSlipBuilderItemProps {
  bet: IBetSlipItem;
}

export const BetSlipBuilderItem = ({
  bet: { id, marketTitle, title },
}: IBetSlipBuilderItemProps) => {
  const dispatch = useDispatch();

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton onClick={() => dispatch(removeBet(id))}>
        <RemoveCircleOutlineIcon color="error" />
      </IconButton>
      <Box display="flex" flexDirection="column">
        <Typography variant="subtitle1" textAlign="start">
          {title}
        </Typography>
        <Typography variant="body1" color="GrayText" textAlign="start">
          {marketTitle}
        </Typography>
      </Box>
    </Box>
  );
};
