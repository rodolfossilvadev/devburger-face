import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';
import { Link as ReactLink } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;

  img {
    width: 65%;
  }
`;
export const RigthContainer = styled.div`
  background: url('${Background}');
  background-color: #1e1e1e;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 50%;
  min-width: 50%;

  p {
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
  }

  
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  color: #ffffff;
  font-weight: 300;

  span {
    font-family: 'Road Rage', sans-serif;
    color: #9758A6;
  }
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  width: 100%;
  max-width: 400px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    border: none;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    padding: 0 15px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }
  p{
    font-size: 14px;
    line-height: 80%;
    color:  #cf3057;
    font-weight: 600;
    height: 10px;
  }

`;

export const Link = styled(ReactLink)`
 text-decoration: underline;
    cursor: pointer;
    transition: 0.8s;
    color:#ff8c05;
    
    &:hover{
        scale: 1.5;
        color:#ff8c05;
      
    }
    &:active{
        color: #FF6D00;
    }
`