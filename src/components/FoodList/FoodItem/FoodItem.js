import { CardWrapper, FoodImage, FoodName, Button, FoodContainer} from "./FoodItem.stayled";

export const FoodCard = ({ food, addToCart}) => {
    return (
      <CardWrapper>
        <FoodImage src={food.image} alt={food.name} />
        <FoodContainer>
            <FoodName>{food.name}</FoodName>
            <p>{food.price} uah</p>
        </FoodContainer>
        <Button onClick={() => addToCart(food)}>Add to Cart</Button>
      </CardWrapper>
    );
  };
  
