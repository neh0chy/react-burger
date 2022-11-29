import styles from './header-button.module.css';

export default function HeaderButton({icon, classes, ...props}) {
  return (
    <button className={styles.headerButton}>
      {icon}
      <p className={classes}>{props.children}</p>
    </button>
  );
}