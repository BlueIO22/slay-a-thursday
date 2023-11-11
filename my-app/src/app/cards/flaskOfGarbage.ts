import Card from "../lib/card";
import Character from "../lib/character";
import State from "../lib/state";
import { increaseCharacterHealth } from "../utils";

export default {
  name: "Flask of garbage",
  description:
    "Garbage man moves over and picks up a chunk of garbage and eats it. Supprised that he didnt die, he gained 10hp",
  action: (state: State, character?: Character) => {
    if (character === undefined) return state;
    state.character = increaseCharacterHealth(character, 10);
    return state;
  },
} as Card;
