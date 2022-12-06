import React, { useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { serverDataConstructor } from '../../utils/data';

export default function App() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const api = 'https://norma.nomoreparties.space/api/ingredients';
    fetch(api)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then(data => setData(data['data']))
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
