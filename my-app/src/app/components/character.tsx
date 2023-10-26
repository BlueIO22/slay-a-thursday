import Character from "../lib/character";
import styles from "./comp.module.css";

const Character = (props: { character: Character }) => {
  const { character } = props;
  const leftHealth = (1 - character.health / character.maxHealth) * 100;
  const rightHealth = (character.health / character.maxHealth) * 100;
  return (
    <div className={styles.character}>
      <div className={styles.characterHealth}>
        <p
          className={styles.characterHealthLeft}
          style={{
            width: `${leftHealth}%`,
          }}
        />
        <p
          className={styles.characterHealthRight}
          style={{
            width: `${rightHealth}%`,
          }}
        />
      </div>
      <p className={styles.header}> {character.name}</p>
      <img
        className={styles.image}
        src={"/images/" + character.imageUrl + ".png"}
      />
      <div className={styles.description}>{character.biography}</div>
    </div>
  );
};

export default Character;
