import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color: #1f1f1f;
    width: 100%;
    height: 65px;
    padding: 0 55px;
`;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    
`;
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;

    hr{
        height: 24px;
        border: 2px solid #625e5e;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
`;
export const HeaderLink = styled(Link)`
    color: ${props => props.isActive ? '#FF6D00' : '#fff'};
    border-bottom: ${props => props.isActive ? '1px solid #FF6D00' : 'none'};
    scale:${props => props.isActive ? '1.2' : '1'};
    text-decoration: none;
    font-size: 16px;
    transition: 0.8s;
   

    &:hover{
         scale: 1.2;
         color: #484848;
         transition: 0.8s;
    }
`;
export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 45px;
`;
export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

    p{
        color: #fff;
        font-weight: 300;
        line-height: 90%;

        span{
            font-weight: 700;
            color: #FF6D00;
        }
    }
`;
export const LogoutButton = styled.button`
    color: #ff3205;
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover{
        transition: 0.8s;
        scale: 1.2;
    }
    &:active{
        transition: 0.8s;
        color: #61a120;
    }
`;
export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  
`;
