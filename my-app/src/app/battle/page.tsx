"use client";

import { state } from "../layout";
import styles from "./page.module.css";
import CardComp from "../components/card";
import Card from "../components/card";

function classStr(...classes: string[]) {
  return classes.join(" ");
}

const Battle = () => {
  const currentBattle = state.getCurrentBattle();

  let { enemies, hand, stack, discard } = currentBattle;

  const enemyDivs = enemies.map((enemy) => {
    return <div className={styles.character}> </div>;
  });

  const onPlayedCard = (playedCard: Card) => {
    // first do the stack, discard, hand
    hand = hand.filter((x) => x !== playedCard);
    // update the current turn round
  };

  const cardDivs = hand.map((card, index) => {
    return <Card key={index} card={card} onPlayed={onPlayedCard} />;
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
