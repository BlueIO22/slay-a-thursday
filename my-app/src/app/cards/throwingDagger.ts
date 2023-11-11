import Card from "../lib/card";
import State from "../lib/state";
import {
  decreaseCharacterHealth,
  decreaseRandomEnemyHealth,
  getRandomNumber,
} from "../utils";

export default {
  name: "Throwing dagger",
  description: "Throws a dagger, slightly misses the face, but does 3 damage",
  action: (state: State) => {
    return decreaseRandomEnemyHealth(state, 5);
  },
  imageUrl: "Dagger",
} as Card;
