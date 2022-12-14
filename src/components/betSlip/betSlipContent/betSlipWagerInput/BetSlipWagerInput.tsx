import React, { useState } from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useDispatch } from "react-redux";
import { changeBetBuilderWager } from "../../../../redux/actions";
import { useBetBuilderWager } from "../../../../hooks";

interface IBetSlipWagerInputProps {
  variant: "single" | "builder";
}

export const BetSlipWagerInput = ({ variant }: IBetSlipWagerInputProps) => {
  const betBuilderWager = useBetBuilderWager();
  const [wager, setWager] = useState(
    variant === "single" ? 0 : betBuilderWager // TODO - Change this!
  );
  const dispatch = useDispatch();

  const onChangeWagerAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const wager = parseInt(event.target.value);
    dispatch(changeBetBuilderWager(wager)); // TODO - Change this!
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
