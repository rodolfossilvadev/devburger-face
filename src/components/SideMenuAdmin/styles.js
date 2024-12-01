import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    background: #363636;
    box-shadow: rgba(0,0,0, 0.35) 0px 10px 15px;
    width: 300px;
    top: 0;
    left: 0;
 
    img{
       width: 200px;
       margin: 50px 30px 50px 45px;
       align-items: center;
    }

`;

export const ItemContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    background:  ${props => props.isActive ? '#FF6D00' : 'none '};
    border-radius: 2px;
    padding-left: 10px;
    margin: 10px;
    color: ${props => props.isActive ? '#000' : '#fff'};

    .icon{
        color:  ${props => props.isActive ? '#000' : '#fff '};
    }
 
`;

export const LinkMenu = styled(Link)`
    color:  ${props => props.isActive ? '#000' : '#fff '};
    text-decoration: none;
    margin: 8px;
    line-height: 19px;
    font-size: 16px;
  
`;

