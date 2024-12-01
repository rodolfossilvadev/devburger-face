import styled from "styled-components";
import ReactSelect from 'react-select'



export const Container = styled.div`
    background: #efefef;
    min-height: 100vh;

`;

export const ProductsImg = styled.img`
    width: 60px;

`;

export const ReactSelectStyle = styled(ReactSelect)`
    width: 250px;
    .css-b62m3t-container{
             cursor: pointer;
    }
`;



export const Menu = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    margin: 20px 0;
    
`;
export const LinkMenu = styled.a`
    cursor: pointer;
    color: ${props => props.isActiveStatus ? '#000' : '#333232'};
    font-weight: ${props => props.isActiveStatus ? '600' : '400'};
    padding-bottom: 5px;
    border: ${props => props.isActiveStatus ? '1px solid #FF6D00' : 'none'};
    scale:${props => props.isActiveStatus ? '1.2' : '1'};
    text-decoration: none;
    transition: 0.8s;
    border-radius: 20px;
    padding: 10px;

  

`;