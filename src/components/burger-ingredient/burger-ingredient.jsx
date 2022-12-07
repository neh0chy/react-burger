import React from 'react';
import styles from './burger-ingredient.module.css';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default function BurgerIngredient({ item, getModalData }) {

  return (
    <>
      <li key={item._id}>
        <article {...item} className={styles.card} onClickCapture={() => { getModalData(item) }}>
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
    </>
  )
}

BurgerIngredient.propTypes = {
  close: PropTypes.func,
  children: PropTypes.node
};
