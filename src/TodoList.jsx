import React from "react";
import styles from "./TodoList.module.css";
import { TodoContext } from "./TodoProvider";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoList({ selected }) {
  const [showForm, setShowForm] = React.useState(false);

  const { todos } = React.useContext(TodoContext);

  const getFilteredTodos = React.useCallback(
    todos => {
      let newTodos = [];
      if (selected === "All") newTodos = todos;

      if (selected === "Today") {
        const today = new Date().toJSON().slice(0, 10);

        newTodos = todos.filter(todo => {
          if (todo.date === today) return todo;
        });
      }

      if (selected === "Month") {
        newTodos = todos.filter(todo => {
          const month = new Date().toJSON().slice(5, 7);
          if (todo.date.slice(5, 7) === month) return todo;
        });
      }

      return newTodos;
    },
    [selected]
  );

  const filteredTodos = getFilteredTodos(todos);
  const remainingTodos = filteredTodos.filter(todo => !todo.completed);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{selected}</h1>
      <h2 className={styles.heading}>Tasks ({remainingTodos.length})</h2>
      {filteredTodos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}

      <button className={showForm ? styles.cancelBtn : styles.addBtn} onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Create New Todo"}
      </button>
      {showForm && <TodoForm setShowForm={setShowForm} />}
    </div>
  );
}
