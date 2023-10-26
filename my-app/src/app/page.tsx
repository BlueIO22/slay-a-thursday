import flaskOfPerfection from "./cards/flaskOfPerfection";
import Home from "./home/page";
import { Battle } from "./lib/battle";
import State from "./lib/state";

export let state: State = {};

export default function () {
  const exampleBattle: Battle = {
    name: "example battle",
    rewards: [],
    enemies: [],
  };

  return (
    <>
      <Home />
    </>
  );
}
