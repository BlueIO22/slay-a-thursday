import throwingDagger from "../cards/throwingDagger";
import timeout from "../cards/timeout";
import { createCard } from "../lib/card";
import Character from "../lib/character";

export default {
  name: "Fred",
  biography:
    "Fred is an outgoing, helpful, kind spirit, that loves helping grown men to cry",
  health: 20,
  maxHealth: 20,
  deck: [
    createCard(throwingDagger, 1),
    createCard(timeout, 2),
    createCard(throwingDagger, 3),
    createCard(timeout, 4),
    createCard(throwingDagger, 5),
    createCard(throwingDagger, 6),
    createCard(timeout, 7),
    createCard(throwingDagger, 8),
  ],
  imageUrl: "B_Queen",
} as Character;
