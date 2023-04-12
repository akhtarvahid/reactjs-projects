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