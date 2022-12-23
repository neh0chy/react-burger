import styles from './ingredient-details.module.css';
import { ingredientType } from '../../utils/types';

export default function IngredientDetails({ data }) {
  return (
    <>
      <p className={`text text_type_main-large ml-10 mt-10 ${styles.title}`}>
        Детали ингредиента
      </p>
      <div className={styles.container}>
        <img src={data.image_large} alt={data.name} className="" />
        <p className="text text_type_main-default mt-4">{data.name}</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className="text text_type_main-default text_color_inactive">
              Калории, ккал
            </p>
            <p className="text text_type_digits-default mt-2">
              {data.calories}
            </p>
          </li>
          <li className={styles.listItem}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_digits-default mt-2">
              {data.proteins}
            </p>
          </li>
          <li className={styles.listItem}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_digits-default mt-2">{data.fat}</p>
          </li>
          <li className={styles.listItem}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_digits-default mt-2">
              {data.carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

IngredientDetails.propTypes = {
  // data: ingredientType.isRequired
};
