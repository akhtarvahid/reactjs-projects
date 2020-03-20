import React from "react";

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo, i) => (
        <div key={i.toString()}>
          {todo.techName} ----> {todo.techType}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
