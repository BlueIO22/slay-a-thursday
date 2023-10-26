"use client";

import { state } from "../layout";
import Card from "../lib/card";
import styles from "./comp.module.css";

interface CardProps {
  card: Card;
  onPlayed: () => void;
}

const Card = (props: CardProps) => {
  const { card, onPlayed } = props;
  return (
    <div
      className={styles.card}
      onClick={() => {
        card.action(state);
        onPlayed();
      }}
    >
      <p className={styles.cardHeader}> {card.name}</p>
      <img className={styles.image} src={"/images/" + card.imageUrl + ".png"} />
      <div className={styles.description}>{card.description}</div>
    </div>
  );
};

export default Card;
