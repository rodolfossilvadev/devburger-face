import styled from "styled-components";
import BannerHamburger from '../../assets/banner-menu.svg';
import Background from '../../assets/background.svg';
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
    background: linear-gradient(rgba(255,255,255, 0.9), rgba(255,255,255, 0.9)), url('${Background}');
    background-size: center;


`;
export const Banner = styled.div`
        justify-content: center;
        align-items: center;
        height: 450px;
        display: flex;
        position: relative;
        
        background: url('${BannerHamburger}') no-repeat;
        background-color: #1f1f1f;
        background-position: center;
        background-size: cover;
        width: 100%;

        h1{
            font-family: 'Road Rage', sans-serif;
            font-size: 80px;
            line-height: 65px;
            color: #fff;
            position: absolute;

            right: 20%;
            top: 30%;
        }

        span{
            display: block;
            font-size: 20px ;
            color: #fff;
            font-weight: 400;
        }
    
`;
export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActiveCategory ? '#FF6D00' : '#696969'};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border-bottom: ${props => props.$isActiveCategory && '3px solid #FF6D00'};
   
`;


export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns:repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto;
`;
