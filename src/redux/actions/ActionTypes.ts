import { BET_SLIP_ACTIONS } from "./Actions";
import { IBetSlipItem } from "../../interfaces";

interface IAddBetActionType {
  type: typeof BET_SLIP_ACTIONS.ADD_BET;
  payload: IBetSlipItem;
}

interface IRemoveBetActionType {
  type: typeof BET_SLIP_ACTIONS.REMOVE_BET;
  payload: number;
}

interface IRemoveAllBetsActionType {
  type: typeof BET_SLIP_ACTIONS.REMOVE_ALL_BETS;
}

interface IChangeBetBuilderWagerActionType {
  type: typeof BET_SLIP_ACTIONS.CHANGE_BET_BUILDER_WAGER;
  payload: number;
}

export type BetActionTypes =
  | IAddBetActionType
  | IRemoveBetActionType
  | IRemoveAllBetsActionType
  | IChangeBetBuilderWagerActionType;
