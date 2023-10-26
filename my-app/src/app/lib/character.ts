import Card from "./card";

type Character = {
  id?: number;
  name: string;
  biography: string;
  health: number;
  maxHealth: number;
  imageUrl?: string;
  deck: Card[];
};

export const createCharacter = (character: Character, id: number) => {
  return { ...character, id: id };
};

export default Character;
