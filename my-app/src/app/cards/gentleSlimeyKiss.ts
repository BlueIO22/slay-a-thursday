import Card from "../lib/card";
import State from "../lib/state";
import { decreaseCharacterHealth } from "../utils";

export default {
  name: "Gentle Slimey Kiss",
  description:
    "Slime moves over and gives a beutiful slimey stinky kiss, it hurts as you loose 2hp",
  action: (state: State) => {
    state.character = decreaseCharacterHealth(state.character, 2);
    return state;
  },
} as Card;
