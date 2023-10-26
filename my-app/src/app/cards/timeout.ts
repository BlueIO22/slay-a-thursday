import Card from "../lib/card";
import State from "../lib/state";

export default {
  name: "Timeout",
  description:
    "The battle is getting intense, but you plug in your cheap chinese airpods rippoff, and heal for 5 hp",
  action: (state: State) => {
    state.character.health = state.character.health += 5;
    if (state.character.health > state.character.maxHealth) {
      state.character.health = state.character.maxHealth;
    }
    return state;
  },
} as Card;
