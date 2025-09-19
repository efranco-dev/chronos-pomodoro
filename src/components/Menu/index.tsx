import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <div className={styles.menu}>
      <a className={styles.menuLink} href="#">
        <TimerIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <TimerIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <TimerIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <TimerIcon />
      </a>
    </div>
  );
}
