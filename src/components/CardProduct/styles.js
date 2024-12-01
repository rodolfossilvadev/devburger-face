import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: rgba(0,0,0, 0.35) 0px 10px 15px;
    cursor: pointer;
    height: 220px;
    position: relative;
    
    

    div{
        width: 100%;
        max-height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;

        p{
            font-size: 18px;
            color: #ff8c05;
            line-height: 20px;
            font-weight: 700;
            margin-top: 40px;
        }
        strong{
           
            font-size: 22px;
            color: #363636;
            font-weight: 800;
            line-height: 20px;
        }
        #container-star{
            display: flex;
            flex-direction: row;
        }
    }
`
export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px; // Adjust this based on how much overlap you want
`;



