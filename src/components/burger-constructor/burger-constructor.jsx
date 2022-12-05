import styles from './burger-constructor.module.css';

import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from "prop-types";
import { propTypesList } from '../../utils/data';


export default function BurgerConstructor(props) {
  const bun = props.data.find(item => item.type === 'bun');
  const nonbun = props.data.filter(item => item.type !== 'bun');
  
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
          {nonbun.map((elem) => {
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
          <p className="text text_type_digits-medium mr-3">610</p>
          <CurrencyIcon className={styles.icon} />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(propTypesList.isRequired).isRequired
};
