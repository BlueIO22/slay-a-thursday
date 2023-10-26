import flaskOfPerfection from "./cards/flaskOfPerfection";
import myFirstSlime from "./characters/myFirstSlime";
import Home from "./home/page";
import { Battle } from "./lib/battle";
import State from "./lib/state";
import flaskOfPerfectionReward from "./rewards/flaskOfPerfectionReward";

export let state: State = {
  character: {
    name: "",
    bigraphy: "",
    health: 0,
    maxHealth: 0,
    imageUrl: undefined,
    deck: [],
  },
  battles: [],
  currentPosition: 0,
};

export default function () {
  const exampleBattle: Battle = {
    name: "example battle",
    rewards: [flaskOfPerfectionReward],
    enemies: [myFirstSlime],
    position: 1,
    currentTurn: 0,
  };

  state.battles = [...state.battles, exampleBattle];

  return (
    <>
      <Home />
    </>
  );
}
