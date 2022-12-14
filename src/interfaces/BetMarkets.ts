export interface IBetMarketOption {
  id: number;
  title: string;
  odds: number;
}

export interface IBetMarket {
  id: number;
  title: string;
  options: IBetMarketOption[];
}
