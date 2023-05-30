import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ShopItem = styled.button`
  width: 200px;
  text-align: center;
  margin-top: 20px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? 'lightblue' : 'transparent')};
`;
