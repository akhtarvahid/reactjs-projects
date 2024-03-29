import styled from "styled-components";
import { LoaderCircle } from '@styled-icons/boxicons-regular'

export const StyledButton = styled.button`
   padding: 10px 30px;
   border: 1px solid coral;
   background-color: coral;
   color: white;
   font-size: 1rem;
   &:disabled{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    &:hover {
      cursor: not-allowed;
    }
  }
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

export const StyledLoader = styled.div`
  background: #242424;
  height: 100vh;
  position: absolute;
  width: 100%;
  top: 0;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledLoaderCircle = styled(LoaderCircle)`
 fill: coral;
`
export const StyledText = styled.div`
   font-size: ${props => props.fontSize || '1rem'};
   margin: ${props => props.margin || ''};
   padding: ${props => props.padding || ''};
   color: ${props => props.color || 'coral'};;
`