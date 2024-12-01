import styled from "styled-components";
import { Button } from "../../../components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    form{
        display: flex;
        flex-direction: column;
        gap: 25px;
        background: #363636;
        border-radius: 10px;
        padding: 30px;
        box-shadow: rgba(0,0,0, 0.35) 0px 10px 15px;

        .p{
        text-align: center;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
    }

    }
`;

export const Label = styled.p`
    font-size: 14px;
    color: #fff;
    margin-bottom: 3px ;

`;
export const InputProduct = styled.input`
    height: 40px;
    border-radius: 8px;
    box-shadow: rgba(0,0,0, 0.35) 0px 10px 15px;
    background: #fff;
    border: none;
    width: 100%;
    min-width: 280px;
    padding: 10px;

`;

export const ButtonStyle = styled(Button)`
    width: 100%;
    margin-top: 40px;
    background: #FF6D00;
    font-weight: 300;
`;
export const LabelUpload = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    border: 1px dashed #fff;
    gap: 10px;


    input{
        width: 1px;
        opacity: 0;
        z-index: -2;
    }
`;

export const ContainerInput = styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;

    input{
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
`;