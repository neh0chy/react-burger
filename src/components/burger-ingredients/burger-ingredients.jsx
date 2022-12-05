import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { propTypesList } from '../../utils/data';

export default function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one')
  const bunFilter = props.data.filter((item) => item.type === "bun");
  const sauceFilter = props.data.filter((item) => item.type === "sauce");
  const mainFilter = props.data.filter((item) => item.type === "main");

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
        <li className={styles.li} key={1}>
          <h2 className='text text_type_main-medium'>Булки</h2>
          <ul className={styles.cards}>
            {bunFilter.map((item) => (
              <li key={item._id}>
                <article className={styles.card}>
                  {item.counter && (
                    <Counter count={1} size="default" extraClass="" />
                  )}
                  <img
                    className={styles.image}
                    src={item.image}
                    alt={item.name}
                  />
                  <div className={styles.price}>
                    <p className={`text text_type_digits-default ${styles.price}`}>{item.price}</p>
                    <CurrencyIcon />
                  </div>
                  <p className={`text text_type_main-default ${styles.name}`}>{item.name}</p>
                </article>
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.li} key={2}>
          <h2 className='text text_type_main-medium'>Соусы</h2>
          <ul className={styles.cards}>
            {sauceFilter.map((item) => (
              <li key={item._id}>
                <article className={styles.card}>
                  {item.counter && (
                    <Counter count={1} size="default" extraClass="" />
                  )}
                  <img
                    className={styles.image}
                    src={item.image}
                    alt={item.name}
                  />
                  <div className={styles.price}>
                    <p className={`text text_type_digits-default ${styles.price}`}>{item.price}</p>
                    <CurrencyIcon />
                  </div>
                  <p className={`text text_type_main-default ${styles.name}`}>{item.name}</p>
                </article>
              </li>
            ))}
          </ul>
        </li>
        <li className={styles.li} key={3}>
          <h2 className='text text_type_main-medium'>Начинки</h2>
          <ul className={styles.cards}>
            {mainFilter.map((item) => (
              <li key={item._id}>
                <article className={styles.card}>
                  {item.counter && (
                    <Counter count={1} size="default" extraClass="" />
                  )}
                  <img
                    className={styles.image}
                    src={item.image}
                    alt={item.name}
                  />
                  <div className={styles.price}>
                    <p className={`text text_type_digits-default ${styles.price}`}>{item.price}</p>
                    <CurrencyIcon />
                  </div>
                  <p className={`text text_type_main-default ${styles.name}`}>{item.name}</p>
                </article>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(propTypesList.isRequired).isRequired
};
