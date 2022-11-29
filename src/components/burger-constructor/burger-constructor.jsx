import styles from './burger-constructor.module.css';
import BurgerConstructorElements from '../burger-constructor-elements/burger-constructor-elements';
import ConstructorTotal from '../burger-constructor-total/burger-constructor-total';
import PropTypes from "prop-types";
import { propTypesList } from '../../utils/data';


export default function BurgerConstructor(props) {
  return (
    <section className={styles.constructorSection}>
      <BurgerConstructorElements data={props.data} />
      <ConstructorTotal />
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(propTypesList).isRequired
};