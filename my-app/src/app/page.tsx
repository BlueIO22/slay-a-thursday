import Home from "./home/page";
import { Battle } from "./lib/battle";

export default function () {
  const exampleBattle: Battle = {
    name: "example battle",
  };

  return (
    <>
      <Home />
    </>
  );
}
