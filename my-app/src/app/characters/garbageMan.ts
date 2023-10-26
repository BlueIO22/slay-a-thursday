import flaskOfPerfection from "../cards/flaskOfPerfection";
import throwingDagger from "../cards/throwingDagger";
import { createCard } from "../lib/card";
import Character from "../lib/character";

export default {
  name: "Garbage Man",
  biography:
    "So, yea, this is the badest man and the stinkiest man there is. He works collecting garbage, but in secret he breeds stinky stuff, like the slimes",
  health: 50,
  maxHealth: 80,
  deck: [
    createCard(throwingDagger, 1),
    createCard(throwingDagger, 2),
    createCard(throwingDagger, 3),
    createCard(throwingDagger, 4),
    createCard(flaskOfPerfection, 5),
    createCard(throwingDagger, 6),
    createCard(flaskOfPerfection, 7),
    createCard(throwingDagger, 3),
  ],
  imageUrl: "W_Queen",
} as Character;
