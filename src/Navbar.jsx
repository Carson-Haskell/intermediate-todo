import React from "react";
import Button from "./Button";
import styles from "./Navbar.module.css";
import { TodoContext } from "./TodoProvider";

export default function Navbar() {
  const { updateSelectedTodos } = React.useContext(TodoContext);

  function handleClick(value) {
    updateSelectedTodos(value);
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleClick}>All</Button>
      <Button onClick={handleClick}>Today</Button>
      <Button onClick={handleClick}>Month</Button>
    </div>
  );
}
