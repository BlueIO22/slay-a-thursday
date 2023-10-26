
import { Character } from "../lib/character";
import styles from "./comp.module.css";


const CharacterComp = (props: {character:Character}) => {
    const character = props.character;
    return <div className={styles.character}> 
    <p className={styles.characterHealth}> 
    <p className={styles.characterHealthLeft} width={(1-(character.health/character.totalHealth))*100)+'%'> 
    <p className={styles.characterHealthRight} width={((character.health/character.totalHealth))*100)+'%'> 

    </p>
    <p className={styles.header}> {character.name}</p>
    <img className={styles.image} src={"/images/"+character.imageUrl+".png"}/>
    <div className={styles.description}>
    {character.biography}
    </div>
    </div>;
};

export default CharacterComp;
