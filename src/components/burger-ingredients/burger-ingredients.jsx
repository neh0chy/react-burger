import BurgerIngredientsTabs from '../burger-ingredients-tabs/burger-ingredients-tabs';
import BurgerIngredientsScroll from '../burger-ingredients-scroll/burger-ingredients-scroll';
import styles from './burger-ingredients.module.css';
import PropTypes from "prop-types";
import { propTypesList } from '../../utils/data';

export default function BurgerIngredients(props) {
  return (
    <section className={styles.section}>
      <h1 className={`text text_type_main-large ${styles.title}`}>Соберите бургер</h1>
      <BurgerIngredientsTabs />
      <BurgerIngredientsScroll data={props.data}/>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(propTypesList.isRequired).isRequired
};
