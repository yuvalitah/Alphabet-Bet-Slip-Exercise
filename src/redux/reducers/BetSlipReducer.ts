import { AnyAction } from "@reduxjs/toolkit";
import { BET_SLIP_ACTIONS } from "../actions";
import { IBetSlipItem } from "../../interfaces";

interface IBetSlipState {
  bets: IBetSlipItem[];
  betBuilderWager: number;
}

const initialState: IBetSlipState = {
  bets: [],
  betBuilderWager: 0,
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

    case BET_SLIP_ACTIONS.REMOVE_ALL_BETS:
      return {
        ...state,
        bets: [],
      };

    case BET_SLIP_ACTIONS.CHANGE_BET_BUILDER_WAGER:
      return { ...state, betBuilderWager: action.payload };

    case BET_SLIP_ACTIONS.CHANGE_SINGLE_BET_WAGER:
      return {
        ...state,
        bets: state.bets.map((bet) =>
          bet.id === action.payload.id
            ? { ...bet, wager: action.payload.wager }
            : bet
        ),
      };

    default:
      return state;
  }
};
