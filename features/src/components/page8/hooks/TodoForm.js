import React from "react";

function TodoForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="techName"
        onChange={props.handleChange}
        value={props.state.techName || ""}
        placeholder="name"
      />
      <input
        type="text"
        name="techType"
        onChange={props.handleChange}
        value={props.state.techType || ""}
        placeholder="type of technology"
      />
      <input type="submit" value="submit" />
    </form>
  );
}

export default TodoForm;
