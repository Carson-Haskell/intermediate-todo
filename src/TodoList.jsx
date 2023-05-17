import React from "react";
import styles from "./TodoList.module.css";
import { TodoContext } from "./TodoProvider";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const [showForm, setShowForm] = React.useState(false);

  const { todos, selectedTodos, getFilteredTodos } = React.useContext(TodoContext);

  const filteredTodos = getFilteredTodos(todos);
  const remainingTodos = filteredTodos.filter(todo => !todo.completed);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{selectedTodos}</h1>
      <h2 className={styles.heading}>Tasks ({remainingTodos.length})</h2>
      {filteredTodos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}

      <button
        className={showForm ? styles.cancelBtn : styles.addBtn}
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cancel" : "Create New Todo"}
      </button>
      {showForm && <TodoForm setShowForm={setShowForm} />}
    </div>
  );
}
