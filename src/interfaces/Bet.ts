interface IBetOption {
  id: number;
  title: string;
  odd: number;
}

export interface IBet {
  id: number;
  title: string;
  options: IBetOption[];
}
