import { RootState } from "../store";

export const builderWagerSelector = (state: RootState): number =>
  state.builderWager;
