"use client";

import { state } from "../layout";
import styles from "./page.module.css";
import Card from "../components/card";
import Character from "../components/character";
import { useEffect, useState } from "react";
import { Battle } from "../lib/battle";

function classStr(...classes: string[]) {
  return classes.join(" ");
}

const Battle = () => {
  const [currentBattle, setCurrentBattle] = useState<Battle>(
    state.getCurrentBattle()
  );

  const [hand, setHand] = useState(state.character.deck);
  const [stack, setStack] = useState(state.getCurrentBattle().stack);
  const [discard, setDiscard] = useState(state.getCurrentBattle().discard);

  const enemies = currentBattle.enemies;

  useEffect(() => {
    setCurrentBattle({ ...currentBattle, hand, stack, discard });
  }, [hand, stack, discard]);

  useEffect(() => {
    if (state.getCurrentBattle().currentTurn == 0) {
      setStack(state.character.deck);
    }
  }, []);

  const enemyDivs = enemies.map((enemy, index) => {
    return <Character key={index} character={enemy} />;
  });

  const onPlayedCard = (playedCard: Card) => {
    // first do the stack, discard, hand
    setHand(currentBattle.hand.filter((x) => x !== playedCard));
    setDiscard([...currentBattle.discard, playedCard]);
    // update the current turn round
    state.battles[state.currentPosition] = currentBattle;
  };

  const endTurn = () => {};

  return (
    <div className={styles.main}>
      <div className={styles.characters}>
        <div className={classStr(styles.left, styles.character)}> </div>
        <div className={styles.space}> </div>
        <div className={styles.right}>{enemyDivs}</div>
      </div>

      <div className={styles.cards}>
        <div className={styles.stack}>
          {currentBattle.stack.map((card, index) => {
            return <Card key={index} card={card} onPlayed={onPlayedCard} />;
          })}
        </div>
        <div className={styles.hand}>
          {currentBattle.hand.map((card, index) => {
            return <Card key={index} card={card} onPlayed={onPlayedCard} />;
          })}
        </div>
        <div className={styles.discard}>
          {currentBattle.discard.map((card, index) => {
            return <Card key={index} card={card} onPlayed={endTurn} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Battle;
