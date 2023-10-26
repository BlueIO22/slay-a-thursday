import State from "./state";

type Card = {
  name: string;
  action: (state: State) => State;
};

export default Card;
