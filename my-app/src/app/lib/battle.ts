import Card from "./card";
import Character from "./character";
import Reward from "./reward";

export type Battle = {
  name: string;
  rewards: Reward[];
  enemies: Character[];
  position: number;
  currentTurn: number;
  stack: Card[];
  hand: Card[];
  discard: Card[];
};
