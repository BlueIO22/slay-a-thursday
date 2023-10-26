import Card from "../lib/card";
import State from "../lib/state";
import { increaseCharacterHealth } from "../utils";

export default {
  name: "Flask of perfection",
  description:
    "You find perfection, outside of McDonald's after drinking a lovely McFrappe with Salty Caramel and you get healed you for 30 hp",
  action: (state: State) => {
    state.character = increaseCharacterHealth(state.character, 30);
    return state;
  },
} as Card;
