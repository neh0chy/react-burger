import { useMemo, useState, useContext } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';

import { DataContext } from '../../utils/data-context';

export default function BurgerIngredients() {
  const {ingredientsData} = useContext(DataContext);
  const [ingredient, setIngredient] = useState(null);

  const [current, setCurrent] = useState('one');

  const bunFilter = useMemo(() => ingredientsData.filter((item) => item.type === "bun"), [ingredientsData]);
  const sauceFilter = useMemo(() => ingredientsData.filter((item) => item.type === "sauce"), [ingredientsData]);
  const mainFilter = useMemo(() => ingredientsData.filter((item) => item.type === "main"), [ingredientsData]);

  const [isOpened, setIsOpened] = useState(false);

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
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>Булки</Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>Соусы</Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>Начинки</Tab>
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
