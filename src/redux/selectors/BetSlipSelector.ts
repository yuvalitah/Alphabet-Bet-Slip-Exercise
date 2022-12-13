import { RootState } from "../store";
import { IBetSlipItem } from "../../interfaces";

export const betSlipSelector = (state: RootState): IBetSlipItem[] => state.bets;
