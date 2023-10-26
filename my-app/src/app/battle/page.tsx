import styles from "./page.module.css";
import {state} from "../layout";

function classStr(...classes:string[])
{
    return classes.join(' ');
}

const Battle = () => {

console.log(' 00000 ');
console.log(state);
console.log(' 11111 ');
console.log(state.battles[state.currentPosition]);
console.log(' 22222 ');
    const enemies = state.battles[state.currentPosition].enemies;
console.log(enemies);
console.log(' 33333 ');
    // let enemies = ['a','b','c'];
    let hand = ['a','b','c'];

    const enemyDivs = enemies.map(
            (enemy) =>  {
            return (<div className={styles.character}> </div>);
            });

    const cardDivs = hand.map(
            (card) =>  {
            return (<div className={styles.card}> </div>);
            });

    return (<div className={styles.main}>

            <div className={styles.characters}>
                <div className={classStr(styles.left, styles.character)}> </div>
                <div className={styles.space}> </div>
                <div className={styles.right}>
                {enemyDivs}
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.stack}> </div>
                <div className={styles.hand}> 
                {cardDivs}
                </div>
                <div className={styles.discard}> </div>
            </div>

        </div>);
};

export default Battle;
