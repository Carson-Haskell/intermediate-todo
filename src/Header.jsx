import styles from './Header.module.css';

export default function Header() {
  return (
    <div
      className={styles.container}
    >
      <h1 className={styles.title}>✓ Todo</h1>
    </div>
  );
}
