import myFirstSlime from "../characters/myFirstSlime";
import { Battle } from "../lib/battle";
import flaskOfPerfectionReward from "../rewards/flaskOfPerfectionReward";

export default {
  name: "example battle",
  rewards: [flaskOfPerfectionReward],
  enemies: [myFirstSlime],
  position: 0,
  currentTurn: 0,
} as Battle;
