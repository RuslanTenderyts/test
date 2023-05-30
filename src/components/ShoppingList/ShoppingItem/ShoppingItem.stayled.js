import styled from 'styled-components';

export const CardWrapper = styled.li`
    display: flex;
    height: 160px;
    list-style: none;
    background-color: rgb(242, 242, 242);
    border-radius: 8px;
    padding: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
`;

export const FoodImage = styled.img`
    width: 250px;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
`;

export const FoodName = styled.h3`
  margin: 8px;
  
`;

export const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
`;

export const Input = styled.input`
  width: 100px;
  padding: 8px;
  font-size: 16px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: none;
    &:focus {
      outline: none;
      border-color: blue;
      box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
    }
`
export const BtnDelete = styled.button`
  background-color: #ff0000;
  margin-left: auto;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
    
    &:hover {
      background-color: #cc0000;
    }
}
`