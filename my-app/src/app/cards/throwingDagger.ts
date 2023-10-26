import Card from "../lib/card";
import State from "../lib/state";

export default {
  name: "Throwing dagger",
  description: "Throws a dagger, slightly misses the face, but does 3 damage",
  action: (state: State) => {
    const enemies = state.getCurrentBattle().enemies;
    const chosenEnemy = enemies[Math.random() * (enemies.length - 0) + 0];
    chosenEnemy.health -= 3;
    return state;
  },
} as Card;
