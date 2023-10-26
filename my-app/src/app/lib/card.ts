import State from "./state";

type Card = {
  id?: number;
  name: string;
  action: (state: State) => State;
  description: string;
  imageUrl?: string;
};

export const createCard = (card: Card, number: number) => {
  return { ...card, id: number };
};

export default Card;
