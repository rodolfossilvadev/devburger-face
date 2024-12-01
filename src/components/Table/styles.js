import styled from "styled-components";

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #000;
    border-radius: 20px;

    box-shadow: rgba(0,0,0, 0.35) 0px 10px 15px;
    
`;
export const Header = styled.thead`

`;

export const Tr = styled.tr`

`;

export const Th = styled.th`
    padding: 16px;
    text-align: left;
    color: #fff;
    border-bottom: 1px solid #484848;
    border-radius: 20px;
 
`;
export const Td = styled.td`
    padding: 16px;
    font-weight: 500;
    line-height: 115%;
    color: #484848;
    
   
`;

export const Body = styled.tbody`
     background-color: #fff;
     border-radius: 20px;
`;