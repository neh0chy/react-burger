import styles from './burger-constructor-elements.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import { propTypesList } from '../../utils/data';

export default function BurgerConstructorElements(props) {
  const bun = props.data.find(item => item.type === 'bun');

  return (
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
        {props.data.map((elem) => {
          if (elem.type !== "bun") {
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
          } else {return null}
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
  );
}

BurgerConstructorElements.propTypes = {
  data: PropTypes.arrayOf(propTypesList.isRequired).isRequired
};
