import React, { useState } from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useDispatch } from "react-redux";
import {
  changeBuilderWager,
  changeSingleBetWager,
} from "../../../../redux/actions";
import { useBuilderWager } from "../../../../hooks";
import { IBetSlipItem } from "../../../../interfaces";

interface IBetSlipWagerInputProps {
  variant: "single" | "builder";
  bet?: IBetSlipItem;
}

export const BetSlipWagerInput = ({
  variant,
  bet,
}: IBetSlipWagerInputProps) => {
  const builderWager = useBuilderWager();
  const [wager, setWager] = useState(
    variant === "single" ? bet?.wager : builderWager
  );
  const dispatch = useDispatch();

  const onChangeWagerAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const wager = parseInt(event.target.value);
    dispatch(
      variant === "builder"
        ? changeBuilderWager(wager)
        : changeSingleBetWager(bet ? bet.id : 0, wager)
    );
    setWager(wager);
  };

  return (
    <Box
      display="flex"
      justifyContent={variant === "builder" ? "center" : "unset"}
    >
      <TextField
        label="Wager"
        type="number"
        defaultValue={wager}
        InputProps={{
          inputProps: { min: 0 },
          endAdornment: (
            <InputAdornment position="end">
              <AttachMoneyIcon />
            </InputAdornment>
          ),
        }}
        sx={{ maxWidth: 150 }}
        onChange={onChangeWagerAmount}
      />
    </Box>
  );
};
