import styles from './burger-ingredients-card.module.css';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerCard(props) {
  return (
    <article className={styles.card}>
      {props.data.counter && (
        <Counter count={1} size="default" extraClass="" />
      )}
      <img
        className={styles.image}
        src={props.data.image}
        alt={props.data.name}
      />
      <div className={styles.price}>
        <p className={`text text_type_digits-default ${styles.price}`}>{props.data.price}</p>
        <CurrencyIcon />
      </div>
      <p className={`text text_type_main-default ${styles.name}`}>{props.data.name}</p>
    </article>
  );
}