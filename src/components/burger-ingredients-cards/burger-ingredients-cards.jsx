import styles from './burger-ingredients-cards.module.css';
import BurgerCard from '../burger-ingredients-card/burger-ingredients-card';

export default function BurgerIngredientsCards(props) {
  return (
    <ul className={styles.cards}>
      {props.data.map((item) => (
        <li key={item._id}>
          <BurgerCard data={item} />
        </li>
      ))}
    </ul>
  );
}