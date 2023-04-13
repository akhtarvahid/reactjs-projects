import styled from "styled-components";


export const BookWrapper = styled.div`
    display: ${props => props.display || 'flex'};
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin};
`
export const BookTitle = styled.div`
    font-size: 50px;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
`
export const Card = styled.div`
    display: flex;
    padding: 18px;
    margin: 30px;
    background: white;
`
export const CardImage = styled.img`
 height: 200px;
 margin-right: 8px;
`
export const CardTitle = styled.div`
    font-size: 30px;
    font-family: sans-serif;
    font-weight: 600;
`
export const CardDescription = styled.div`
   margin-top: 8px;
   font-family: sans-serif;
   font-size: 18px;
`
export const AuthorText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #25a1ef;
  margin: 5px 0;
`