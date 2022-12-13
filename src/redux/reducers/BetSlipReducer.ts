// import { AnyAction } from "@reduxjs/toolkit";
import { BET_SLIP_ACTIONS, BetActionTypes } from "../actions";
import { IBet } from "../../interfaces";

interface IBetSlipState {
  bets: IBet[];
}

const initialState: IBetSlipState = {
  bets: [],
};

export const BetSlipReducer = (
  state: IBetSlipState = initialState,
  action: BetActionTypes
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
        bets: state.bets.filter(
          ({ id, marketId }) =>
            id === action.payload.id && marketId === action.payload.marketId
        ),
      };

    default:
      return state;
  }
};
