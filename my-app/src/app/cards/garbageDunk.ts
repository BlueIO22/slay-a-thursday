import Card from "../lib/card";
import State from "../lib/state";
import { decreaseCharacterHealth } from "../utils";

export default {
  name: "Garbage dunk",
  description:
    "Garbage man moves over, and dunks you in one of his trashes, this stinks and your blood pressure rises causing you to womit, you loose 5hp",
  action: (state: State) => {
    state.character = decreaseCharacterHealth(state.character, 5);
    return state;
  },
} as Card;
