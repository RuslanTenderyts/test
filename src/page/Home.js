import { Shops } from "../components/Shops/Shops"

const Home = ({addToCart, isFoods}) => {    
    return (
        <>
            <Shops addToCart={addToCart} isFoods={isFoods} />
        </>
        
    )
}
export default Home;