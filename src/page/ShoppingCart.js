import { Shopping } from "../components/Shopping/Shopping"

const ShoppingCart = ({selectedFoods, onChange, removeFood}) => {

    return (
        <div>
            <Shopping selectedFoods={ selectedFoods } onChange={onChange} removeFood={removeFood}/>
            
        </div>
    )
}

export default ShoppingCart;