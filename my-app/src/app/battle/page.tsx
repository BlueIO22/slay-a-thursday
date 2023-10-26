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
  const [currentHand, setCurrentHand] = useState<Card[]>([]);
  const [currentBattle, setCurrentBattle] = useState<Battle>(
    state.getCurrentBattle()
  );

  const enemies = currentBattle.enemies;

  useEffect(() => {
    if (state.getCurrentBattle().currentTurn == 0) {
      setCurrentHand(state.character.deck);
    }
  }, []);

  useEffect(() => {
    state.battles[state.currentPosition] = currentBattle;
  }, [currentBattle]);

  const enemyDivs = enemies.map((enemy, index) => {
    return <Character key={index} character={enemy} />;
  });

  const onPlayedCard = (playedCard: Card) => {
    // first do the stack, discard, hand
    currentBattle.hand = currentBattle.hand.filter((x) => x !== playedCard);
    currentBattle.discard = [...currentBattle.discard, playedCard];
    setCurrentBattle(currentBattle);
    // update the current turn round
  };

  const cardDivs = currentHand.map((card, index) => {
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
