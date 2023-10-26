import Character from "./lib/character";

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function shuffel<T>(array: T[]): T[] {
  let newArray: T[] = [];
  let oldArray: T[] = [...array];
  while (oldArray.length > 0) {
    const index = Math.floor(Math.random() * oldArray.length);
    newArray = [...newArray, oldArray[index]];
    oldArray.splice(index, 1);
  }
  return newArray;
}

const validateCharacterHealth = (character: Character) => {
  if (character.health <= 0) {
    character.health = 0;
  }
  if (character.health > character.maxHealth) {
    character.health = character.maxHealth;
  }
  return character;
};

export const decreaseCharacterHealth = (
  character: Character,
  amount: number
): Character => {
  character.health -= amount;
  return validateCharacterHealth(character);
};

export const increaseCharacterHealth = (
  character: Character,
  amount: number
): Character => {
  character.health += amount;
  return validateCharacterHealth(character);
};
