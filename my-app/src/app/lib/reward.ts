import { Battle } from "./battle";

type Reward = {
  name: string;
  action: (battle: Battle) => void;
};

export default Reward;
