import { Card } from "../lib/card";
import styles from "./comp.module.css";


const CardComp = (props: {card:Card}) => {
    const card = props.card;
    return <div className={styles.card}> 
    <p className={styles.cardHeader}> {card.name}</p>
    <img className={styles.image} src={"/images/"+card.imageUrl+".png"}/>
    <div className={styles.description}>
    {card.description}
    </div>
    </div>;
};

export default CardComp;
