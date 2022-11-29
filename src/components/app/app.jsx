import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { serverData } from '../../utils/data';
import { serverData_list } from '../../utils/data';

import styles from './app.module.css';
export default function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={serverData}/>
        <BurgerConstructor data={serverData_list}/>
      </main>
    </div>
  );
}
