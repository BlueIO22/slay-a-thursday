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
  let className =
    styles.card +
    (cardPosition != CardPosition.HAND ? " " + styles.stackedCard : "");
  return (
    <div
      className={className}
      onClick={() => {
        if (cardPosition === CardPosition.HAND) {
          card.action(state);
        }
        onPlayed(card);
      }}
    >
      {cardPosition !== CardPosition.STACK ? (
        <>
          <p className={styles.header}> {card.name}</p>
          <img
            className={styles.image}
            src={"/images/" + card.imageUrl + ".png"}
          />
          <div className={styles.description}>{card.description}</div>
        </>
      ) : (
        <img className={styles.backdrop} src={"/images/W_Bishop.png"} />
      )}
    </div>
  );
};

export default PlayerCard;
