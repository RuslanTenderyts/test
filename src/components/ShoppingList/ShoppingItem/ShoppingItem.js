import { CardWrapper, FoodImage, FoodName, FoodContainer, Input, BtnDelete} from "./ShoppingItem.stayled";

export const ShoppingCard = ({ food, onChange, removeFood }) => {

    return (
      <CardWrapper>
        <FoodImage src={food.image} alt={food.name} />
        <FoodContainer>
            <FoodName>{food.name}</FoodName>
            <p>Price: {food.price} uah</p>
            <Input 
            type="number" 
            name="quantityOfPortions" 
            value={food.quantity} 
            onChange={(e) => onChange(food.id, parseInt(e.target.value, 10))} 
            min="1" />
            <BtnDelete onClick={() => removeFood(food.id)}>Delete </BtnDelete>
        </FoodContainer>

        
        
      </CardWrapper>
    );
  };
  
