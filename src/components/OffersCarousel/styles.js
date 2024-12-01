import styled from "styled-components";

export const Container = styled.div`    
    .carousel-item{
        padding-right: 40px;
        height: 220px;
        
    }
    .react-multi-carousel-list {
        overflow: visible;
    }
    .react-multiple-carousel__arrow--left {
        left: -20px;
  
    }
    .react-multiple-carousel__arrow--right {
        right: 15px;
  
    }

    padding-left: 40px;
    margin-right: -20px;
    overflow-x: hidden;
    padding-bottom: 50px;
    
   
    
`

export const Title = styled.h2`
    font-size: 35px;
    color: #61A120;
    padding-bottom: 15px;
    position: relative;
    text-align: center;
    font-weight: 800;
    margin: 50px 0;


    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color:#61A120 ;
        left: calc(50% - 28px);
    }
`