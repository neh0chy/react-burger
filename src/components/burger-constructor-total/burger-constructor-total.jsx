import styles from './burger-constructor-total.module.css';
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { propTypesList } from '../../utils/data';

export default function ConstructorTotal(props) {
  return (
    <div className={`${styles.total} mt-10`}>
      <div className={styles.price}>
        <p className="text text_type_digits-medium mr-3">610</p>
        <CurrencyIcon className={styles.icon}/>
      </div>
      <Button htmlType="button" type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
}

ConstructorTotal.propTypes = {
  data: PropTypes.arrayOf(propTypesList.isRequired).isRequired
};
