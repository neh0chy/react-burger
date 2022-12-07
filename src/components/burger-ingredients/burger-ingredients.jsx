import React, { useMemo, useState } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from '../../utils/types';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';

export default function BurgerIngredients(props) {
  const [current, setCurrent] = useState('one');

  const bunFilter = useMemo(() => props.data.filter((item) => item.type === "bun"), [props.data]);
  const sauceFilter = useMemo(() => props.data.filter((item) => item.type === "sauce"), [props.data]);
  const mainFilter = useMemo(() => props.data.filter((item) => item.type === "main"), [props.data]);

  const [isOpened, setIsOpened] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  const modalClose = () => {
    setIsOpened(false);
  }

  const getModalData = (item) => {
    setIngredient(item)
    setIsOpened(true);
  }

  return (
    <section className={styles.section}>
      <h1 className={`text text_type_main-large ${styles.title}`}>Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <ul className={styles.list}>
        <li className={styles.li}>
          <h2 className='text text_type_main-medium'>Булки</h2>
          <ul className={styles.cards}>
            {bunFilter.map((item) => (
              <BurgerIngredient key={item._id} item={item} getModalData={getModalData}/>
            ))}
          </ul>
        </li>
        <li className={styles.li}>
          <h2 className='text text_type_main-medium'>Соусы</h2>
          <ul className={styles.cards}>
            {sauceFilter.map((item) => (
              <BurgerIngredient key={item._id} item={item} getModalData={getModalData}/>
            ))}
          </ul>
        </li>
        <li className={styles.li}>
          <h2 className='text text_type_main-medium'>Начинки</h2>
          <ul className={styles.cards}>
            {mainFilter.map((item) => (
              <BurgerIngredient key={item._id} item={item} getModalData={getModalData}/>
            ))}
          </ul>
        </li>
      </ul>
      {isOpened &&
      <Modal close={modalClose}>
        <IngredientDetails data={ingredient} />
      </Modal>}
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired
};
