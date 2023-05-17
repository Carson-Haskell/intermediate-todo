import React from "react";
import styles from "./TodoForm.module.css";

import { TodoContext } from "./TodoProvider";

export default function TodoForm({ setShowForm }) {
  const { addNewTodo } = React.useContext(TodoContext);

  const titleRef = React.useRef();
  const dateRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    if (titleRef.current.value === "") return;

    setShowForm(false);

    addNewTodo(titleRef.current.value, dateRef.current.value || "No due date");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <br />
        <input
          className={styles.input}
          type="text"
          name="title"
          ref={titleRef}
        />
      </label>
      <label htmlFor="dueDate">
        Due Date:
        <br />
        <input
          className={styles.input}
          type="date"
          name="dueDate"
          ref={dateRef}
        />
      </label>
      <button className={styles.btn}>
        Add
      </button>
    </form>
  );
}
