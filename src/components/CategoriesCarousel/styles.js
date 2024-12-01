import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`    
    .carousel-item{
        padding-right: 20px;
        height: 250px;
        padding-top: 30px;
        padding-left: 20px;
        margin-bottom: 15px;
    }
    .react-multiple-carousel__arrow--left {
        left: 10px;
   
    }
    .react-multiple-carousel__arrow--right {
        right: 10px;
        
    }

`
export const ContainerItens = styled.div`
    background: url('${(props) => props.imageUrl}'), no-repeat;
    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 90%;
    margin-left: 15px;
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    border: solid 2px #fff;
    box-shadow: rgba(0,0,0, 0.35) 0px 5px 15px;
    cursor: pointer;

    &:hover{
        scale: 1.1;
        transition: 0.8s;
    }

    &:active{
        opacity: 0.6;
        transition: 0.8s;
    }

  
`

export const Title = styled.h2`
    font-size: 35px;
    color: #FF6D00;
    padding-bottom: 15px;
    position: relative;
    text-align: center;
    font-weight: 800;
    margin-bottom: 40px;
    padding-top: 40px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color:#FF6D00 ;
        left: calc(50% - 28px);
    }
`;

export const CategoryButton = styled(Link)`
        
        color: #fff;
        background-color: rgba(0,0,0, 0.5);
        padding: 10px 30px;
        border-radius: 25px;
        font-size: 23px;
        font-weight: bold;
        margin-top: 50px;
        text-decoration: none;


        &:hover{
        color: #FF6D00;
        transition: 0.8s;
    }

        &:active{
        opacity: 0.6;
        transition: 0.8s;
    }

    
`

