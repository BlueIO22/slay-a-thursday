import { state } from "../layout";
import Card from "../lib/card";
import styles from "./comp.module.css";

interface CardProps {
  card: Card;
  onPlayed: (card: Card) => void;
}

const Card = (props: CardProps) => {
  const { card, onPlayed } = props;
  return (
    <div
      className={styles.card}
      onClick={() => {
        card.action(state);
        onPlayed(card);
      }}
    >
      <p className={styles.header}> {card.name}</p>
      <img className={styles.image} src={"/images/" + card.imageUrl + ".png"} />
      <div className={styles.description}>{card.description}</div>
    </div>
  );
};

export default Card;
