import Card from "./card";

type Character = {
  name: string;
  bigraphy: string;
  health: number;
  maxHealth: number;
  imageUrl?: string;
  deck: Card[];
};

export default Character;
