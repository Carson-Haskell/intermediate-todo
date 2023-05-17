import React from "react";
import Header from "./Header";
import "./styles.css";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import TodoProvider from "./TodoProvider";

function App() {
  const [selectedTodos, setSelectedTodos] = React.useState("All");

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Navbar setSelectedTodos={setSelectedTodos} />
        <TodoProvider>
          <TodoList selected={selectedTodos} />
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
