import styled from "styled-components";
import { Edit } from "@mui/icons-material";


export const Container = styled.div`
    margin-top: 40px;
    padding: 30px;
`;

export const ImgProduct = styled.img`
    width: 70px;
`;

export const Editar = styled(Edit)`
    cursor: pointer;

    &:hover{
        scale: 1.1;
        transition: 0.8s;
    }
`;
export const DeleteImage = styled.img`
  height: 20px;
    width: 20px;
    cursor: pointer;
    transition: all 0.8s;
    &:hover{
        scale: 1.2;
      
      
         }
        &:active{
       opacity: 0.6;
          }
`;
