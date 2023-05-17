import Button from "./Button";
import styles from "./Navbar.module.css";

export default function Navbar({ setSelectedTodos }) {
  function handleClick(value) {
    setSelectedTodos(value);
  }
  return (
    <div className={styles.container}>
      <Button onClick={handleClick}>All</Button>
      <Button onClick={handleClick}>Today</Button>
      <Button onClick={handleClick}>Month</Button>
    </div>
  );
}
