import Card from "../lib/card";
import State from "../lib/state";
import { increaseCharacterHealth } from "../utils";

export default {
  name: "Timeout",
  description:
    "The battle is getting intense, but you plug in your cheap chinese airpods rippoff, and heal for 5 hp",
  action: (state: State) => {
    state.character = increaseCharacterHealth(state.character, 5);
    return state;
  },
    imageUrl: "Potion";
} as Card;
