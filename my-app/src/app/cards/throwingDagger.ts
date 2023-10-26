import Card from "../lib/card";
import State from "../lib/state";
import { decreaseCharacterHealth, getRandomNumber } from "../utils";

export default {
  name: "Throwing dagger",
  description: "Throws a dagger, slightly misses the face, but does 3 damage",
  action: (state: State) => {
    const enemies = state.getCurrentBattle().enemies;
    let chosenEnemy = enemies[getRandomNumber(0, enemies.length) - 1];
    chosenEnemy = decreaseCharacterHealth(chosenEnemy, 3);
    return state;
  },
    imageUrl: "Dagger";
} as Card;
