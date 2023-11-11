import Character from "./character";
import State from "./state";

type Card = {
  id?: number;
  name: string;
  action: (state: State, character?: Character) => State;
  description: string;
  imageUrl?: string;
};

export const createCard = (card: Card, number: number) => {
  return { ...card, id: number };
};

export default Card;
