import "./App.css";
import React from "react";

// Components import
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>to do list...</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
