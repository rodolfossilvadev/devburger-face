import styled from "styled-components";
import Background from '../../assets/background.svg';


export const Container = styled.div`
        width: 100%;
    min-height: 100%;
    background-color: #f0f0f0;
    background: linear-gradient(rgba(255,255,255, 0.9), rgba(255,255,255, 0.9)), url('${Background}');
    background-size: center;
    text-align: center;
    h2{
         margin: 20px 0 10px;
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
    }

`;