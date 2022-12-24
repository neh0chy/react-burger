import { useEffect, useState } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import getIngredients from '../../utils/burger-api';
import { DataContext } from '../../utils/data-context';

export default function App() {
  const [ingredientsData, setIngredientsData] = useState([]);

  useEffect(() => {
    getIngredients()
      .then(res => setIngredientsData(res.data))
      .catch(err => console.log(`Ошибка: ${err}`));
  }, []);

  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.main}>
        <DataContext.Provider value={{ ingredientsData, setIngredientsData }}>
          {ingredientsData.length && <BurgerIngredients />}
          {ingredientsData.length && <BurgerConstructor />}
        </DataContext.Provider>
      </main>
    </div>
  );
}
