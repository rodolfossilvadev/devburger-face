import styled from "styled-components";

export const ContainerButton = styled.button`
    background-color: #FF6D00;
    width: 100%;
    height: 52px;
    border-radius: 5px;
    border: 0;
    margin-top: 10px;

    &:hover{
        transition: 0.8s;
        
        scale: 1.1;
    }
    &:active{
        transition: 0.8s;
        background-color: #61a120;
    }
`