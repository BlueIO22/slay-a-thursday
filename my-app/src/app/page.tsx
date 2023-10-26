import flaskOfPerfection from "./cards/flaskOfPerfection";
import Home from "./home/page";
import { Battle } from "./lib/battle";

export default function () {
  const exampleBattle: Battle = {
    name: "example battle",
    rewards: [flaskOfPerfection],
    enemies: [],
  };

  return (
    <>
      <Home />
    </>
  );
}
