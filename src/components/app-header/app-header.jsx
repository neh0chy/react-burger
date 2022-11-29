
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButton from '../header-button/header-button';

import styles from './app-header.module.css';

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.navBar}>
          <HeaderButton
            icon={<BurgerIcon type="primary" />}
            classes={'text text_type_main-default'}>
            Конструктор
          </HeaderButton>
          <HeaderButton
            icon={<ListIcon type="secondary" />}
            classes={'text text_type_main-default text_color_inactive'}>
            Лента заказов
          </HeaderButton>
        </nav>
        <div className={styles.logo}><Logo /></div>
        <HeaderButton
          icon={<ProfileIcon type="secondary" />}
          classes={'text text_type_main-default text_color_inactive'}>
          Личный кабинет
        </HeaderButton>
      </div>
    </header>
  );
}
