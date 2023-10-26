import flaskOfPerfection from "../cards/flaskOfPerfection";
import Reward from "../lib/reward";
import State from "../lib/state";

export default {
  name: "Get flask of perfection",
  action: (state: State) => {
    state.character.deck = [...state.character.deck, flaskOfPerfection];
    // some logic to determine if character can add more cards? ...
    return state;
  },
} as Reward;
