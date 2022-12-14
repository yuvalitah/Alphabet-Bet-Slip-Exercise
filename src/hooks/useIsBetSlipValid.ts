import { useBets } from "./useBets";
import { useBuilderWager } from "./useBuilderWager";

export const useIsBetSlipValid = (): boolean => {
  const bets = useBets();
  const builderWager = useBuilderWager();
  const betMarketIds: number[] = bets.map((bet) => bet.marketId);
  const isMultipleBetsFromSameMarketSelected: boolean =
    new Set(betMarketIds).size !== bets.length;

  return (
    !isMultipleBetsFromSameMarketSelected &&
    (!!builderWager || bets.some((bet) => bet.wager > 0))
  );
};
