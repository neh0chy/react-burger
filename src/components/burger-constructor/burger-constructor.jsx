import React, { useMemo, useState } from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import { ingredientType } from '../../utils/types';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';


export default function BurgerConstructor(props) {
  // const bun = useMemo(() => props.data.filter((item) => item.type === 'bun'), [props.data]);
  const ingredients = useMemo(() => props.data.filter((item) => item.type !== 'bun'), [props.data]);

  const [isOpened, setIsOpened] = useState(false);

  const modalClose = () => {
    setIsOpened(false);
  }

  const getModalData = () => {
    setIsOpened(true);
  }

  return (
    <section className={styles.constructorSection}>
      <div className={styles.container}>
        <div className={styles.element}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text='Краторная булка N-200i (верх)'
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
        <ul className={styles.list}>
          {ingredients.map((elem) => {
            return (
              <li key={elem._id} className={styles.listElement}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={elem.name}
                  price={elem.price}
                  thumbnail={elem.image}
                />
              </li>
            );
          })}
        </ul>
        <div className={styles.element}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text='Краторная булка N-200i (верх)'
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
      </div>
      <div className={`${styles.total} mt-10`}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium mr-3">610</p>
          <CurrencyIcon className={styles.icon} />
        </div>
        <Button htmlType="button" type="primary" size="large" onClickCapture={getModalData}>
          Оформить заказ
        </Button>
      </div>
      {isOpened &&
      <Modal close={modalClose}>
        <OrderDetails />
      </Modal>}
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired
};
