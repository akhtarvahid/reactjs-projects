import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function Hooks() {
  const [state, setState] = useState({
    techName: "",
    techType: ""
  });
  const [todos, setTodos] = useState([
    { techName: "Reactjs", techType: "library" },
    { techName: "Vuejs", techType: "framework" },
    { techName: "Angularjs", techType: "framework" }
  ]);
  const handleChange = e => {
    const val = e.target.value;
    setState({
      ...state,
      [e.target.name]: val
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    const newArr = [
      ...todos,
      { techName: state.techName, techType: state.techType }
    ];
    setTodos(newArr);
    setState("");
  };

  return (
    <div>
      <h2>Hooks Todo</h2>
      <div>
        <TodoList todos={todos} />
        <TodoForm
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <hr />
      <h4>Hooks effect</h4>
    </div>
  );
}

export default Hooks;
