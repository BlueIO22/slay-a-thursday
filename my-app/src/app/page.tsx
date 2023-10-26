import flaskOfPerfection from "./cards/flaskOfPerfection";
import fred from "./characters/fred";
import myFirstSlime from "./characters/myFirstSlime";
import Home from "./home/page";
import { Battle } from "./lib/battle";
import State from "./lib/state";
import flaskOfPerfectionReward from "./rewards/flaskOfPerfectionReward";

export let state: State = {
  character: fred,
  battles: [],
  currentPosition: 0,
};

export default function () {
  const exampleBattle: Battle = {
    name: "example battle",
    rewards: [flaskOfPerfectionReward],
    enemies: [myFirstSlime],
    position: 0,
    currentTurn: 0,
  };

  state.battles = [...state.battles, exampleBattle];

  return (
    <>
      <Home />
    </>
  );
}
