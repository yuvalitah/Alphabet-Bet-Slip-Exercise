import { IBetMarket } from "../interfaces";

export const BET_MARKETS: IBetMarket[] = [
  {
    id: 1,
    title: "To Qualify for the Next Round",
    options: [
      {
        id: 1,
        title: "France",
        odds: -460,
      },
      {
        id: 2,
        title: "Morocco",
        odds: +330,
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
        odds: -195,
      },
      {
        id: 4,
        title: "Draw",
        odds: +280,
      },
      {
        id: 5,
        title: "Away",
        odds: +650,
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
        odds: -700,
      },
      {
        id: 7,
        title: "Morocco",
        odds: +440,
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
        odds: +130,
      },
      {
        id: 9,
        title: "Olivier Giroud",
        odds: +190,
      },
      {
        id: 10,
        title: "Marcus Thuram",
        odds: +210,
      },
      {
        id: 11,
        title: "Randal Kolo Muani",
        odds: +250,
      },
      {
        id: 12,
        title: "Antoine Griezmann",
        odds: +260,
      },
      {
        id: 13,
        title: "Kingsley Coman",
        odds: +310,
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
        odds: -1300,
      },
      {
        id: 15,
        title: "Under",
        odds: +820,
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
        odds: -250,
      },
      {
        id: 17,
        title: "Under",
        odds: +200,
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
        odds: +126,
      },
      {
        id: 19,
        title: "Under",
        odds: -152,
      },
    ],
  },
];
