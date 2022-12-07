import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { serverDataConstructor } from '../../utils/data';
import getIngredients from '../../utils/burger-api';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getIngredients()
      .then(res => setData(res.data))
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={serverDataConstructor}/>
      </main>
    </div>
  );
}
