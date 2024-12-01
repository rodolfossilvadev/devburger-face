import styled from 'styled-components';

export const ContainerButton = styled.button`
    width: 100%;
    height: 52px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background-color: #9758A6;
    ;
    font-family: 'Road Rage', sans-serif;
    font-size: 30px;
    color: #ffffff;
    transition: 0.8s;

    &:hover{
        scale: 1.1;
        color: #000;
        background: #FF6D00;
        border: 1px solid #fff;
        box-shadow: 3px 3px 3px #fff;
    }
    &:active{
        color: black;
    }
`;