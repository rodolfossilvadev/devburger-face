import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    box-shadow: rgba(0,0,0, 0.35) 0px 10px 15px;

    *{
        color: #484848;
        font-weight: 500;
    }

    .container-top{
        display: grid;
        grid-gap: 10px 30%;
        grid-template-areas: 
        'title title'
        'items items-price'
        'tax tax-price'
        ;
    .title{
        grid-area: title;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        background-color: #000;
        color: #fff;
        padding: 15px;
        text-align: center;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .items{
        grid-area: items;
        padding-left: 20px;
    }
    .items-price{
        grid-area: items-price;
        padding-right: 20px;
    }
    .tax{
        grid-area: tax;
        padding-left: 20px;
    }
    .tax-price{
        grid-area: tax-price;
        padding-right: 20px;

    }
    }
    .container-bottom{
        background-color: #fff;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        font-weight: 700;
        font-size: 20px;
        *{
        
        font-weight: 700;
    }
    }
`;

