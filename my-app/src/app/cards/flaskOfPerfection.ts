import Card from "../lib/card";
import State from "../lib/state";

export default {
  name: "Flask of perfection",
  description: "Heals you for 30 health",
  action: (state: State) => {
    state.character.health += 30;
    if (state.character.health > state.character.maxHealth) {
      state.character.health = state.character.maxHealth;
    }
    return state;
  },
} as Card;
