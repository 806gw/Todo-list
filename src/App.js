import { useState } from "react";
import TodoInput from "./TodoInput";
import "./App.css";
import TodoItem from "./TodoItem/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (content) => {
    const id = Date.now();

    setTodos((prev) => [
      ...prev,
      {
        id,
        content,
        completed: false,
      },
    ]);
  };

  console.log(todos);

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todos) => todos.id !== id));
    alert("정상적으로 삭제되었습니다.");
  };

  const togleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todos) => {
        return todos.id === id
          ? {
              ...todos,
              completed: !todos.completed,
            }
          : todos;
      })
    );
  };
  return (
    <div className="App">
      <h1>todos</h1>
      <TodoInput onAdd={addTodo} />

      {todos.map((todos) => {
        return (
          <TodoItem
            key={todos.id}
            id={todos.id}
            content={todos.content}
            completed={todos.completed}
            onToggle={togleTodo}
            onDelete={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default App;
