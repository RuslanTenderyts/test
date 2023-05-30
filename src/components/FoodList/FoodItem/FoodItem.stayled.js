import styled from 'styled-components';

export const CardWrapper = styled.li`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    list-style: none;
    background-color: rgb(242, 242, 242);
    border-radius: 8px;
    padding: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
`;

export const FoodImage = styled.img`
    width: 300px;
    height: 195px;
    object-fit: cover;
    border-radius: 8px;
`;

export const FoodName = styled.h3`
  margin-top: 12px;
  
`;

export const Button = styled.button`
  margin-left: auto;
  padding: 15px 40px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
    &:active{
        transform: scale(0.9);
        background-color: #f442211;
    }
`;

export const FoodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;