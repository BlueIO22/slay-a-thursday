import throwingDagger from "../cards/throwingDagger";
import timeout from "../cards/timeout";
import Character from "../lib/character";

export default {
  name: "Fred",
  bigraphy:
    "Fred is an outgoing, helpful, kind spirit, that loves helping grown men to cry",
  health: 20,
  maxHealth: 20,
  deck: [throwingDagger, timeout],
  imageUrl: "B_Queen",
} as Character;
