import { state } from "../layout";
import styles from "./page.module.css";

console.log(state);

function classStr(...classes: string[]) {
  return classes.join(" ");
}

const Battle = () => {
  // let enimies = state.battles[state.currentPosition].enimies;
  let enimies = ["a", "b", "c"];
  let hand = ["a", "b", "c"];

  const enimyDivs = enimies.map((enimy) => {
    return <div className={styles.character}> </div>;
  });

  const cardDivs = hand.map((card) => {
    return <div className={styles.card}> </div>;
  });

  return (
    <div className={styles.main}>
      <div className={styles.characters}>
        <div className={classStr(styles.left, styles.character)}> </div>
        <div className={styles.space}> </div>
        <div className={styles.right}>{enimyDivs}</div>
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
