import { Battle } from "./battle";
import Character from "./character";

type State = {
  character: Character;
  battles: Battle[];
  currentPosition: number;
};

export default State;
