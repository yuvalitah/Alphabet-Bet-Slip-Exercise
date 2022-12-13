export interface IBetMarketOption {
  id: number;
  title: string;
  odd: number;
}

export interface IBetMarket {
  id: number;
  title: string;
  options: IBetMarketOption[];
}
