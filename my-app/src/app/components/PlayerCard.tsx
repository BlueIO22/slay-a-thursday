import { state } from "../layout";
import Card from "../lib/card";
import styles from "./comp.module.css";

export enum CardPosition {
  STACK,
  HAND,
  DISCARD,
}

interface CardProps {
  card: Card;
  onPlayed: (card: Card) => void;
  cardPosition: CardPosition;
}

const PlayerCard = (props: CardProps) => {
  const { card, onPlayed, cardPosition } = props;
  return (
    <div
      className={styles.card}
      onClick={() => {
        if (cardPosition === CardPosition.HAND) {
          card.action(state);
        }
        onPlayed(card);
      }}
    >
      <p className={styles.header}> {card.name}</p>
      <img className={styles.image} src={"/images/" + card.imageUrl + ".png"} />
      <div className={styles.description}>{card.description}</div>
    </div>
  );
};

export default PlayerCard;
