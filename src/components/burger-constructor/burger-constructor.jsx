import { useMemo, useState, useContext } from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { getOrder } from '../../utils/burger-api';
import { DataContext } from '../../utils/data-context';


export default function BurgerConstructor() {
  const [isOpened, setIsOpened] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);
  const {ingredientsData} = useContext(DataContext);

  const bun = useMemo(() => ingredientsData.find(item => item.type === 'bun'), [ingredientsData]);
  const ingredients = useMemo(() => ingredientsData.filter(item => item.type !== 'bun'), [ingredientsData]);
  
  const totalPrice = useMemo(() => {
    return (
      bun.price * 2 + ingredients.reduce((acc, elem) => acc + elem.price, 0)
    );
  }, [bun, ingredients]);

  function handleOrder() {
    const ingredientsIds = ingredients.map((item) => (item._id));
    getOrder(ingredientsIds, setOrderNumber)
    getModalData();
  }

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
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
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
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>
      <div className={`${styles.total} mt-10`}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium mr-3">{totalPrice}</p>
          <CurrencyIcon className={styles.icon} />
        </div>
        <Button htmlType="button" type="primary" size="large" onClickCapture={handleOrder}>
          Оформить заказ
        </Button>
      </div>
      {isOpened &&
      <Modal close={modalClose}>
        <OrderDetails orderNumber={orderNumber} />
      </Modal>}
    </section>
  );
}
