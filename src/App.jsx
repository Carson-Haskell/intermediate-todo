import React from "react";
import Header from "./Header";
import "./styles.css";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import TodoProvider from "./TodoProvider";

function App() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <TodoProvider>
          <Navbar />
          <TodoList />
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
