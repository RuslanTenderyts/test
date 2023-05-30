import { ContainerList } from "./FoodList.stayled";
import { FoodCard } from "./FoodItem/FoodItem";


export const FoodList = ({ foods, addToCart }) => {
    return (
      <ContainerList>
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} addToCart={addToCart} />
        ))}
      </ContainerList>
    );
  };
