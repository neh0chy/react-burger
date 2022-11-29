import styles from './header-button.module.css';
import PropTypes from "prop-types";
import { propTypesList } from '../../utils/data';

export default function HeaderButton({icon, classes, ...props}) {
  return (
    <a className={styles.link} href="!#">
      <button className={styles.headerButton}>
        {icon}
        <p className={classes}>{props.children}</p>
      </button>
    </a>
  );
}

HeaderButton.propTypes = {
  data: PropTypes.arrayOf(propTypesList.isRequired).isRequired
};
