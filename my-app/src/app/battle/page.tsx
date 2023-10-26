"use client";

import { useRouter } from 'next/navigation'
import { state } from "../layout";
import styles from "./page.module.css";
import Character from "../components/character";
import { useEffect, useState } from "react";
import { Battle } from "../lib/battle";
import Card from "../lib/card";
import PlayerCard, { CardPosition } from "../components/PlayerCard";
import { shuffel } from "../utils";

// 1. enum
// 2. add character css

function classStr(...classes: string[]) {
  return classes.join(" ");
}

const Battle = () => {
  const router = useRouter();

  const [currentBattle, setCurrentBattle] = useState<Battle>(
    state.getCurrentBattle()
  );

  const [hand, setHand] = useState<Card[]>([]);
  const [stack, setStack] = useState<Card[]>([]);
  const [discard, setDiscard] = useState<Card[]>([]);

  const enemies = currentBattle.enemies;

  useEffect(() => {
    setCurrentBattle({ ...currentBattle, hand, stack, discard });
  }, [hand, stack, discard]);

  useEffect(() => {
    if (state.getCurrentBattle().currentTurn == 0) {
      const shuffeledCards = shuffel<Card>(state.character.deck);
      setStack(shuffeledCards);
      populateHand(shuffeledCards);
    }
  }, []);

  const populateHand = (cards: Card[]) => {
    const numberOfCardsDrawnFromStackPile = 3;
    setHand([...cards.filter((x, i) => i < numberOfCardsDrawnFromStackPile)]);
    setStack([...cards.filter((x, i) => i >= numberOfCardsDrawnFromStackPile)]);
  };

  const onPlayedCard = (playedCard: Card) => {
    // first do the stack, discard, hand
    setHand(hand.filter((x) => x !== playedCard));
    setDiscard([...currentBattle.discard, playedCard]);

    const count = currentBattle.enemies.reduce(
        (acc, enemy) => {return acc + (enemy.health > 0 ? 1 : 0);}, 0
    );
    console.log(count);
    if ( count === 0 ) {
        router.push('/victory');
    }

    // update the current turn round
    state.battles[state.currentPosition] = currentBattle;
  };

  const discardHand = () => {
    setDiscard([...discard.concat(hand)]);
    setHand([]);
  };

  const endTurn = () => {
    discardHand();
    populateHand(stack);

    for( const enemy in currentBattle ) {
        enemyTurn(enemy);
    }
  };

  const enemyTurn(enemy) {
    if ( enemy.health === 0 ) {
        return;
    }
    const index = getRandomNumber(0, enemy.deck.length);
    const card = enemy.deck[index];
  }

  return (
    <div className={styles.main}>
      <div className={styles.characters}>
        <div className={classStr(styles.left)}>
          <Character character={state.character} />
        </div>
        <div className={styles.space}> </div>
        <div className={styles.right}>
          {enemies.filter((enemy) => enemy.health>0).map((enemy, index) => {
            return <Character key={index} character={enemy} />;
          })}
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.stack}>
          {currentBattle.stack.map((card, index) => {
            return (
              <PlayerCard
                cardPosition={CardPosition.STACK}
                key={index}
                card={card}
                onPlayed={() => {}}
              />
            );
          })}
        </div>
        <div className={styles.hand}>
          {currentBattle.hand.map((card, index) => {
            return (
              <PlayerCard
                cardPosition={CardPosition.HAND}
                key={index}
                card={card}
                onPlayed={onPlayedCard}
              />
            );
          })}
        </div>
        <div className={styles.discard}>
          {currentBattle.discard.map((card, index) => {
            return (
              <PlayerCard
                cardPosition={CardPosition.DISCARD}
                key={index}
                card={card}
                onPlayed={endTurn}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Battle;
