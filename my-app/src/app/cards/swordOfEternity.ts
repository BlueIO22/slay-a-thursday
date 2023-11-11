import Card from "../lib/card";
import State from "../lib/state";
import {
  decreaseCharacterHealth,
  decreaseRandomEnemyHealth,
  getRandomNumber,
} from "../utils";

export default {
  name: "Sword of Eternity",
  description:
    "You find a sword in your grandfather's attic, its red and it glows, you decide to sell it on ebay, but suddently u feel the need to use it. You deal 30hp",
  action: (state: State) => {
    return decreaseRandomEnemyHealth(state, 30);
  },
  imageUrl: "Sword",
} as Card;
