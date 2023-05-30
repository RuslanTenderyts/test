import { ContainerList } from "./ShoppingList.styled";
import { ShoppingCard } from "../ShoppingList/ShoppingItem/ShoppingItem";


export const ShoppingList = ({ foods, onChange, removeFood }) => {
    return (
      <ContainerList>
        {foods.map((food) => (
          <ShoppingCard key={food.id} food={food} onChange={onChange} removeFood={removeFood} />
        ))}
      </ContainerList>
    );
  };
