import styles from "./Button.module.css";

export default function Button({ onClick, children }) {
  return (
    <button onClick={() => onClick(children)} className={styles.btn}>
      {children}
    </button>
  );
}
