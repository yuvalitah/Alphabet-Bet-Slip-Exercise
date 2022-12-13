import { RootState } from "../store";
import { IBet } from "../../interfaces";

export const betSlipSelector = (state: RootState): IBet[] => state.bets;
