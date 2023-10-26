import { createCharacter } from "./../lib/character";
import garbageMan from "../characters/garbageMan";
import myFirstSlime from "../characters/myFirstSlime";
import { Battle } from "../lib/battle";
import flaskOfPerfectionReward from "../rewards/flaskOfPerfectionReward";

export default {
  name: "example battle",
  rewards: [flaskOfPerfectionReward],
  enemies: [
    createCharacter(myFirstSlime, 1),
    createCharacter(myFirstSlime, 2),
    createCharacter(garbageMan, 3),
  ],
  position: 0,
  currentTurn: 0,
  hand: [],
  stack: [],
  discard: [],
} as Battle;
