import { Battle } from "./battle";
import State from "./state";

type Reward = {
  name: string;
  action: (state: State) => void;
};

export default Reward;
