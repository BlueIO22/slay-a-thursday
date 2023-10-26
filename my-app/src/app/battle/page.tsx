import { state } from "../layout";
import styles from "./page.module.css";
import CardComp from "../components/card";
import Card from "../components/card";

function classStr(...classes: string[]) {
  return classes.join(" ");
}

const Battle = () => {
  const enemies = state.getCurrentBattle().enemies;
  let hand = state.character.deck;

  const enemyDivs = enemies.map((enemy) => {
    return <div className={styles.character}> </div>;
  });

  const onPlayedCard = () => {};

  const cardDivs = hand.map((card, index) => {
    return (
      <Card key={index} card={card} onPlayed={onPlayedCard}>
        {" "}
      </Card>
    );
  });

  return (
    <div className={styles.main}>
      <div className={styles.characters}>
        <div className={classStr(styles.left, styles.character)}> </div>
        <div className={styles.space}> </div>
        <div className={styles.right}>{enemyDivs}</div>
      </div>

      <div className={styles.cards}>
        <div className={styles.stack}> </div>
        <div className={styles.hand}>{cardDivs}</div>
        <div className={styles.discard}> </div>
      </div>
    </div>
  );
};

export default Battle;
