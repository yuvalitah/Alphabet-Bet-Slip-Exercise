import { AnyAction } from "@reduxjs/toolkit";
import { BET_SLIP_ACTIONS } from "../actions";
import { IBetSlipItem } from "../../interfaces";

interface IBetSlipState {
  bets: IBetSlipItem[];
}

const initialState: IBetSlipState = {
  bets: [],
};

export const BetSlipReducer = (
  state: IBetSlipState = initialState,
  action: AnyAction
): IBetSlipState => {
  switch (action.type) {
    case BET_SLIP_ACTIONS.ADD_BET:
      return {
        ...state,
        bets: [...state.bets, action.payload],
      };

    case BET_SLIP_ACTIONS.REMOVE_BET:
      return {
        ...state,
        bets: state.bets.filter(({ id }) => id !== action.payload),
      };

    default:
      return state;
  }
};
