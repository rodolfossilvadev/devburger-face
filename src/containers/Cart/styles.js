import styled from "styled-components";
import Texture from "../../assets/texture.svg"
import Background from '../../assets/background.svg';

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(rgba(255,255,255, 0.9), rgba(255,255,255, 0.9)), url('${Background}');
    min-height: 100vh;
`;

export const Banner = styled.div`
    background: url('${Texture}');
    background-size: cover;
    background-color: #1f1f1f;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 180px;

    img{
        height: 140px;
    }
`;

export const Title = styled.h1`
margin-top: 40px;
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: #FF6D00;
    text-align: center;
    position: relative;

    &::after{
        position: absolute;
        content: '';
        width: 56px;
        height: 5px;
        background-color: #FF6D00;
        bottom: 0;
        left: calc(50% + -28px);
    }
`;
export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    gap: 20px;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
`;
export const CartItems = styled.div`

`;

export const CartResume = styled.div`

`;