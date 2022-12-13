import { BET_SLIP_ACTIONS } from "./Actions";
import { BetActionTypes } from "./ActionTypes";
import { IBet } from "../../interfaces";

export const addNewBetSlipAction = (bet: IBet): BetActionTypes => ({
  type: BET_SLIP_ACTIONS.ADD_BET,
  payload: bet,
});

export const removeBetSlip = (bet: IBet): BetActionTypes => ({
  type: BET_SLIP_ACTIONS.REMOVE_BET,
  payload: bet,
});
