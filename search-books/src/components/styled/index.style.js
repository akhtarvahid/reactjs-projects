import styled from "styled-components";

export const StyledButton = styled.button`
   padding: 10px 30px;
   border: 1px solid coral;
   background-color: coral;
   color: white;
   &:hover {
    cursor: pointer;
   }
`

export const StyledInput = styled.input`
  padding: 12px 20px;
  flex: 1;
  font-size: 1rem;
  border: none;
  &:focus {
    outline: 1px solid coral;
  }
`
export const StyledForm = styled.form`
  width: 35%;
  display: flex;
  justify-content: center;
`