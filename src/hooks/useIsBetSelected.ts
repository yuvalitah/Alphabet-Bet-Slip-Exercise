import { useBets } from "./useBets";

export const useIsBetSelected = (betId: number): boolean => {
  const bets = useBets();
  return !!bets.find((bet) => bet.id === betId);
};
