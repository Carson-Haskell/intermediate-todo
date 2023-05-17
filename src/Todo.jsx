import React from "react";
import { TodoContext } from "./TodoProvider";

import styles from "./Todo.module.css";

export default function Todo({ todo }) {
  const completedRef = React.useRef();
  const { completeTodo, deleteTodo } = React.useContext(TodoContext);

  return (
    <div className={styles.todoSection} key={todo.id}>
      <div className={styles.todo}>
        <label htmlFor="completed">
          <input
            className={styles.completed}
            type="checkbox"
            name="completed"
            ref={completedRef}
            checked={todo.completed}
            onChange={() => completeTodo(todo.id, completedRef.current.checked)}
          />{" "}
          <span className={todo.completed ? styles.todoComplete : ""}>
            {todo.title}
          </span>
        </label>
      </div>
      <div className={styles.todo}>
        {todo.date}
        <button className={styles.btn} onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
