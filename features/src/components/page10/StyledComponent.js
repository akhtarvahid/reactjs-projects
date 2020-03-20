import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: lightblue;
  border: none;
  border-radius: 3px;
`;
const Input2 = styled(Input)`
  background: lightcyan;
`;

const StyledComponent = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: ""
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <div>
        <label>first name</label>
        <Input
          inputColor="rebeccapurple"
          name="firstName"
          onChange={handleChange}
          placeholder={state.firstName}
        />
        {state.firstName}
      </div>
      <div>
        <label>last name</label>
        <Input2
          inputColor="rebeccapurple"
          name="lastName"
          onChange={handleChange}
          placeholder={state.lastName}
        />
        {state.lastName}
        {console.log(state)}
      </div>
    </div>
  );
};

export default StyledComponent;
