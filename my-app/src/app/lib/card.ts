import State from "./state";

type Card = {
  name: string;
  action: (state: State) => State;
  description: string;
  imageUrl?: string;
};

export default Card;
