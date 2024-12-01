import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 15px;
`;


export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #fff;
        border-radius: 5px;
        background-color: #ff8c05;
        transition: all 0.8s;
        border: none;

        &:hover{
        scale: 1.2;
        background-color:#FF6D00;
      
         }
        &:active{
       opacity: 0.6;
          }
    }
`;

export const EmptyCart = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    width: 100%;
`;

export const TotalPrice = styled.p`
    font-weight: bold;
`;

export const LinkMenu = styled(Link)`
    color: #fff;
   display: flex;
  align-items: end;
  justify-content: end;
  font-size: 14px;
  font-weight: 200;
  &:hover{
         scale: 1.1;
         transition: 0.8s;
    }
`;

export const TrashImage = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
    transition: all 0.8s;
    &:hover{
        scale: 1.2;
      
      
         }
        &:active{
       opacity: 0.6;
          }
`;
