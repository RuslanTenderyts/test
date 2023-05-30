import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const ShopsWrapper = styled.div`
    border: 1px solid rgb(0 0 0);
    border-radius: 10px;
    width: 220px;
    padding: 10px 40px;
    height: 800px;
;
    
`;

export const ShopList = styled.ul`
    list-style: none;
    padding: 0;
    
`;

export const ShopItem = styled.li`
  text-align: center;
  margin-top: 20px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? 'lightblue' : 'transparent')};
`;

export const Foods = styled.div`
border: 1px solid rgb(0 0 0);
border-radius: 10px;
width: 800px;
padding: 10px 50px;

`;