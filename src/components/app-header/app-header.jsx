
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.navBar}>
          <a className={styles.link} href="!#">
            <button className={styles.headerButton}>
              <BurgerIcon type="primary" />
              <p className={'text text_type_main-default'}>Конструктор</p>
            </button>
          </a>
          <a className={styles.link} href="!#">
            <button className={styles.headerButton}>
              <ListIcon type="secondary" />
              <p className={'text text_type_main-default text_color_inactive'}>Лента заказов</p>
            </button>
          </a>
        </nav>
        <div className={styles.logo}><Logo /></div>
        <a className={styles.link} href="!#">
          <button className={styles.headerButton}>
            <ProfileIcon type="secondary" />
            <p className={'text text_type_main-default text_color_inactive'}>Личный кабинет</p>
          </button>
        </a>
      </div>
    </header>
  );
}
