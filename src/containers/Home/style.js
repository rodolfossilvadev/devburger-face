import styled from 'styled-components';
import BannerHome from '../../assets/banner-home.svg';
import Background from '../../assets/background.svg';


export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 220px;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 100px;
        color: #ffffff;
        font-weight: 500;
        position: absolute;
        right: 20%;
        top: 20%;
    }
`

export const Container = styled.section`
    background: linear-gradient(rgba(255,255,255, 0.9), rgba(255,255,255, 0.9)), url('${Background}');
    background-size: center;

`

