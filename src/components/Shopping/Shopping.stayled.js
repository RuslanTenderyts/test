import styled from 'styled-components';
import { Link as LocalLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const ShopsWrapper = styled.div`
    border: 1px solid rgb(0, 0, 0);
    border-radius: 10px;
    width: 360px;
    padding: 10px 40px;
    height: 500px; 
`;


export const Foods = styled.div`
  border: 1px solid rgb(0 0 0);
  border-radius: 10px;
  width: 650px;
  padding: 10px 50px;

`;
export const TotalPrice = styled.p`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-top: 0;
`
export const Link = styled(LocalLink)`
  text-decoration: none;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  
`