import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import getIngredients from '../../utils/burger-api';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getIngredients()
      .then(res => setData(res.data))
      .catch(err => console.log(`Ошибка: ${err}`));
  }, []);

  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.main}>
        {data.length && <BurgerIngredients data={data}/>}
        {data.length && <BurgerConstructor data={data}/>}
      </main>
    </div>
  );
}
