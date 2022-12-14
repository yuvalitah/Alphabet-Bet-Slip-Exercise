import React, { useState } from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useDispatch } from "react-redux";
import {
  changeBetBuilderWager,
  changeSingleBetWager,
} from "../../../../redux/actions";
import { useBetBuilderWager } from "../../../../hooks";
import { IBetSlipItem } from "../../../../interfaces";

interface IBetSlipWagerInputProps {
  variant: "single" | "builder";
  bet?: IBetSlipItem;
}

export const BetSlipWagerInput = ({
  variant,
  bet,
}: IBetSlipWagerInputProps) => {
  const betBuilderWager = useBetBuilderWager();
  const [wager, setWager] = useState(
    variant === "single" ? bet?.wager : betBuilderWager
  );
  const dispatch = useDispatch();

  const onChangeWagerAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const wager = parseInt(event.target.value);
    dispatch(
      variant === "builder"
        ? changeBetBuilderWager(wager)
        : changeSingleBetWager(bet ? bet.id : 0, wager)
    );
    setWager(wager);
  };

  return (
    <Box display="flex">
      <TextField
        label="Wager"
        type="number"
        value={wager}
        InputProps={{
          inputProps: { min: 0 },
          endAdornment: (
            <InputAdornment position="end">
              <AttachMoneyIcon />
            </InputAdornment>
          ),
        }}
        onChange={onChangeWagerAmount}
      />
    </Box>
  );
};
