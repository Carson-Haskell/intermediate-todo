import React from "react";
import useLocalStorage from "./useLocalStorage";

export const TodoContext = React.createContext();

function reducer(state, { type, payload }) {
  switch (type) {
    case "add":
      return [
        ...state,
        {
          title: payload.title,
          date: payload.date,
          completed: false,
          id: crypto.randomUUID(),
        },
      ];

    case "complete":
      return state.map(todo => {
        if (todo.id === payload.id) {
          return { ...todo, completed: payload.completed };
        }

        return todo;
      });

    case "delete":
      return state.filter(todo => todo.id !== payload.id);

    default:
      throw new Error(`No such action found for ${type}.`);
  }
}

const date = new Date();
const INITIAL_TODOS = [
  {
    title: "Take out the trash",
    completed: false,
    id: crypto.randomUUID(),
    date: date.toJSON().slice(0, 10),
  },
];

export default function TodoProvider({ children }) {
  const [storedTodos, setStoredTodos] = useLocalStorage("todos", []);
  const [todos, dispatch] = React.useReducer(
    reducer,
    storedTodos || INITIAL_TODOS
  );

  React.useEffect(() => setStoredTodos(todos), [todos]);

  function addNewTodo(title, date) {
    dispatch({ type: "add", payload: { title, date } });
  }

  function completeTodo(id, completed) {
    dispatch({ type: "complete", payload: { id, completed } });
  }

  function deleteTodo(id) {
    dispatch({ type: "delete", payload: { id } });
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addNewTodo,
        completeTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
