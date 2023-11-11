"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Character from "../components/character";
import { useEffect, useState } from "react";
import { Battle } from "../lib/battle";
import Card from "../lib/card";
import PlayerCard, { CardPosition } from "../components/PlayerCard";
import { shuffel, getRandomNumber } from "../utils";
import { state } from "../layout";
import State from "../lib/state";

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
  const [enemyPlayedCards, setEnemyPlayedCards] = useState<Card[]>([]);

  const [showInformation, setShowInformation] = useState<Boolean>(false);
  const [currentCharacter, setCurrentCharacter] = useState<
    Character | undefined
  >(undefined);
  const enemies = currentBattle.enemies;

  useEffect(() => {
    setCurrentBattle({ ...currentBattle, hand, stack, discard });
  }, [hand, stack, discard]);

  useEffect(() => {
    if (state.getCurrentBattle().currentTurn == 0) {
      const shuffeledCards = shuffel<Card>(state.character.deck);
      setStack(shuffeledCards);
      setDiscard([]);
      populateHand(shuffeledCards);
    }
  }, []);

  const populateHand = (cards: Card[]) => {
    const numberOfCardsDrawnFromStackPile = 3;

    if (stack.length < numberOfCardsDrawnFromStackPile) {
      cards = shuffel<Card>(state.character.deck);
    }
    setHand([...cards.filter((x, i) => i < numberOfCardsDrawnFromStackPile)]);
    setStack([...cards.filter((x, i) => i >= numberOfCardsDrawnFromStackPile)]);
  };

  const onPlayedCard = (playedCard: Card) => {
    // first do the stack, discard, hand
    setHand(hand.filter((x) => x !== playedCard));
    setDiscard([...currentBattle.discard, playedCard]);

    const count = currentBattle.enemies.reduce((acc, enemy) => {
      return acc + (enemy.health > 0 ? 1 : 0);
    }, 0);
    if (count === 0) {
      router.push("/victory");
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
    let enemyCards = [];
    for (const enemy in currentBattle.enemies) {
      const enemyCard = enemyTurn(currentBattle.enemies[enemy]);
      if (enemyCard === null) {
        continue;
      }
      enemyCards.push(enemyCard);
    }
    setEnemyPlayedCards(enemyCards);
  };

  const enemyTurn = (enemy) => {
    if (enemy.health === 0) {
      return null;
    }
    const index = getRandomNumber(0, enemy.deck.length - 1);
    const card = enemy.deck[index];
    card.action(state, enemy);
    if (state.character.health <= 0) {
      router.push("/defeat");
    }
    return card;
  };

  const showCharacterInformation = (character: any) => {
    setCurrentCharacter(character);
    setShowInformation(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.characters}>
        <div className={classStr(styles.left)}>
          <Character
            character={state.character}
            showCharacterInformation={showCharacterInformation}
          />
        </div>
        <div className={styles.space}> </div>
        <div className={styles.right}>
          {enemies
            .filter((enemy) => enemy.health > 0)
            .map((enemy, index) => {
              return (
                <Character
                  showCharacterInformation={showCharacterInformation}
                  key={index}
                  character={enemy}
                />
              );
            })}
          <div className={styles.enemyStack}>
            {enemyPlayedCards !== undefined && (
              <div className={styles.stack}>
                {enemyPlayedCards.map((card, index) => {
                  return (
                    <PlayerCard
                      cardPosition={CardPosition.DISCARD}
                      card={card}
                      onPlayed={() => {}}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      {showInformation && currentCharacter && (
        <div className={styles.cardInformation}>
          <img
            className={styles.image}
            src={"/images/" + currentCharacter.imageUrl + ".png"}
          />

          <h4>{currentCharacter.name}</h4>
          <p>{currentCharacter.biography}</p>
          <div className={styles.cardInformationDescriptionWrapper}>
            {currentCharacter.deck.map((card: Card) => {
              return (
                <div className={styles.cardInformationDescription}>
                  <p>{card.name}</p>
                  <p>{card.description}</p>
                </div>
              );
            })}
          </div>
          <div
            className={styles.closeButton}
            onClick={() => {
              setShowInformation(false);
            }}
          >
            Close
          </div>
        </div>
      )}
      <div onClick={endTurn} className={styles.nextTurnButton}>
        <p>End turn</p>
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
                onPlayed={() => {}}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Battle;
