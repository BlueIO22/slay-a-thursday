import { Card } from "../lib/card";
import styles from "./comp.module.css";


const CardComp = (props: {card:Card}) => {
    const card = props.card;
    return <div className={styles.card}> 
    <h4> card.name</h4>
    <image className={styles.image} src={"/images/"+card.imageUrl+".png"}> </image>
    <div className={styles.description}>
    {card.description}
    </div>
    </div>;
};

export default CardComp;
