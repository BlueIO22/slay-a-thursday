import { Battle } from "./battle";
import Character from "./character";

type State = {
  character: Character;
  battles: Battle[];
  currentPosition: number;
  getCurrentBattle: () => Battle;
  currentCharacter?: Character;
  showInformation: boolean;
};

export default State;
