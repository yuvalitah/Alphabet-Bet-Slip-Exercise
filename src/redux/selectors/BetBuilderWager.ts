import { RootState } from "../store";

export const betBuilderWagerSelector = (state: RootState): number =>
  state.betBuilderWager;
