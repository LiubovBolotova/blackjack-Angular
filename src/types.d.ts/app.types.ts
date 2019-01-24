type TCard = {
  score: number;
  name: string;
  suit: string;
};

type TPlayers = {
   bankerCards: TCard[],
   gamerCards: TCard[],
   bankerResult: number,
   gamerResult: number
  };