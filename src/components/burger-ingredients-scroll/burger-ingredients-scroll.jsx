import styles from './burger-ingredients-scroll.module.css';
import BurgerIngredientsCards from '../burger-ingredients-cards/burger-ingredients-cards';
import PropTypes from "prop-types";
import { propTypesList } from '../../utils/data';

export default function BurgerIngredientsScroll(props) {
  const bunFilter = props.data.filter((item) => item.type === "bun");
  const sauceFilter = props.data.filter((item) => item.type === "sauce");
  const mainFilter = props.data.filter((item) => item.type === "main");

  return (
    <ul className={styles.list}>
      <li className={styles.li} key={1}>
        <h2 className='text text_type_main-medium'>Булки</h2>
        <BurgerIngredientsCards data={bunFilter}/>
      </li>
      <li className={styles.li} key={2}>
        <h2 className='text text_type_main-medium'>Соусы</h2>
        <BurgerIngredientsCards data={sauceFilter}/>
      </li>
      <li className={styles.li} key={3}>
        <h2 className='text text_type_main-medium'>Начинки</h2>
        <BurgerIngredientsCards data={mainFilter}/>
      </li>
    </ul>
  );
}

BurgerIngredientsScroll.propTypes = {
  data: PropTypes.arrayOf(propTypesList.isRequired).isRequired
};
