import { BET_SLIP_ACTIONS } from "./Actions";
import { BetActionTypes } from "./ActionTypes";
import { IBetSlipItem } from "../../interfaces";

export const addNewBet = (bet: IBetSlipItem): BetActionTypes => ({
  type: BET_SLIP_ACTIONS.ADD_BET,
  payload: bet,
});

export const removeBet = (id: number): BetActionTypes => ({
  type: BET_SLIP_ACTIONS.REMOVE_BET,
  payload: id,
});

export const removeAllBets = (): BetActionTypes => ({
  type: BET_SLIP_ACTIONS.REMOVE_ALL_BETS,
});

export const changeBetBuilderWager = (wager: number): BetActionTypes => ({
  type: BET_SLIP_ACTIONS.CHANGE_BET_BUILDER_WAGER,
  payload: wager,
});
