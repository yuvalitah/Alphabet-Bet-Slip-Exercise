import { IBetMarket } from "../interfaces";

export const BET_MARKETS: IBetMarket[] = [
  {
    id: 1,
    title: "To Qualify for the Next Round",
    options: [
      {
        id: 1,
        title: "France",
        odd: -460,
      },
      {
        id: 2,
        title: "Morocco",
        odd: +330,
      },
    ],
  },
  {
    id: 2,
    title: "Moneyline",
    options: [
      {
        id: 3,
        title: "Home",
        odd: -195,
      },
      {
        id: 4,
        title: "Draw",
        odd: +280,
      },
      {
        id: 5,
        title: "Away",
        odd: +650,
      },
    ],
  },
  {
    id: 3,
    title: "Tie No Bet",
    options: [
      {
        id: 6,
        title: "France",
        odd: -700,
      },
      {
        id: 7,
        title: "Morocco",
        odd: +440,
      },
    ],
  },
  {
    id: 4,
    title: "Anytime Goalscorer",
    options: [
      {
        id: 8,
        title: "Kylian Mbappe",
        odd: +130,
      },
      {
        id: 9,
        title: "Olivier Giroud",
        odd: +190,
      },
      {
        id: 10,
        title: "Marcus Thuram",
        odd: +210,
      },
      {
        id: 11,
        title: "Randal Kolo Muani",
        odd: +250,
      },
      {
        id: 12,
        title: "Antoine Griezmann",
        odd: +260,
      },
      {
        id: 13,
        title: "Kingsley Coman",
        odd: +310,
      },
    ],
  },
  {
    id: 5,
    title: "Over/Under 0.5 Goals",
    options: [
      {
        id: 14,
        title: "Over",
        odd: -1300,
      },
      {
        id: 15,
        title: "Under",
        odd: +820,
      },
    ],
  },
  {
    id: 6,
    title: "Over/Under 1.5 Goals",
    options: [
      {
        id: 16,
        title: "Over",
        odd: -250,
      },
      {
        id: 17,
        title: "Under",
        odd: +200,
      },
    ],
  },
  {
    id: 7,
    title: "Over/Under 2.5 Goals",
    options: [
      {
        id: 18,
        title: "Over",
        odd: +126,
      },
      {
        id: 19,
        title: "Under",
        odd: -152,
      },
    ],
  },
];
