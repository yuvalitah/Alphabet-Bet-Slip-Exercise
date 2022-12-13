import { BET_SLIP_ACTIONS } from "./Actions";
import { BetActionTypes } from "./ActionTypes";
import { IBetSlipItem } from "../../interfaces";

export const addNewBetSlipAction = (bet: IBetSlipItem): BetActionTypes => ({
  type: BET_SLIP_ACTIONS.ADD_BET,
  payload: bet,
});

export const removeBetSlip = (id: number): BetActionTypes => ({
  type: BET_SLIP_ACTIONS.REMOVE_BET,
  payload: id,
});
