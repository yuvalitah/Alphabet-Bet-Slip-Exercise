import { BET_SLIP_ACTIONS } from "./Actions";
import { IBet } from "../../interfaces";

interface IAddBetActionType {
  type: typeof BET_SLIP_ACTIONS.ADD_BET;
  payload: IBet;
}

interface IRemoveBetActionType {
  type: typeof BET_SLIP_ACTIONS.REMOVE_BET;
  payload: IBet;
}

export type BetActionTypes = IAddBetActionType | IRemoveBetActionType;
