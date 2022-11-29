import styles from './burger-constructor-elements.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";
import { propTypesList } from '../../utils/data';

// function renderTopElement(item) {
//   return (
//     <li key={item._id} className={styles.element}>
//       <ConstructorElement
//         type="top"
//         isLocked={true}
//         text={`${item.name} (верх)`}
//         price={item.price}
//         thumbnail={item.image}
//       />
//     </li>
//   );
// }

// function renderListElement(item) {
//   return (
//     <li key={item._id} className={styles.elementSlider}>
//       <DragIcon type="primary" />
//       <ConstructorElement
//         text={item.name}
//         price={item.price}
//         thumbnail={item.image}
//       />
//     </li>
//   );
// }

// function renderButtomElement(item) {
//   return (
//     <li key={item._id} className={styles.element}>
//       <ConstructorElement
//         type="bottom"
//         isLocked={true}
//         text={`${item.name} (низ)`}
//         price={item.price}
//         thumbnail={item.image}
//       />
//     </li>
//   );
// }

// export default function BurgerConstructorElements(props) {
//   return (
//     <ul className={styles.list}>
//       {props.data.map((item, index) => {
//         if (index === 0) {
//           return renderTopElement(item);
//         } else {return null}})}
//       <li>
//         <ul className={styles.listSlider}>
//           {props.data.map((item, index) => {
//             if (index !== 0 && index !== props.data.length - 1) {
//               return renderListElement(item);
//             } else {return null}})}
//         </ul>
//       </li>
//       {props.data.map((item, index) => {
//         if (index === props.data.length - 1) {
//           return renderButtomElement(item);
//         } else {return null}})}
//     </ul>
//   );
// }



export default function BurgerConstructorElements(props) {
  const bun = props.data.find(item => item.type === 'bun');
  // const ingredient = props.data.find(item => item.type !== 'bun');

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
