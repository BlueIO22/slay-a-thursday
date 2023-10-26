import Character from "./character";

export type Battle = {
  name: string;
  rewards: Reward[];
  enemies: Character[];
  position: number;
  currentTurn: number;
};
