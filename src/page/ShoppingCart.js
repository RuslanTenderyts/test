import { useState, useEffect } from "react";
import { Shopping } from "../components/Shopping/Shopping"

const ShoppingCart = ({selectedFoods, onChange, removeFood}) => {
    const [movies, setMovies] = useState([]);
   
    // useEffect(() => { 
    //     if(!movieName){
    //         return;
    //     }         
    //     async function getFetch (movieName) {
    //         try {
    //             const data = await fetchMoviesWithQuery(movieName);
    //             setMovies( data.results );  
    //             console.log( data.results)           
    //         } catch (error) {
    //             console.log(error)
    //         } 
    //     };
    //     getFetch(movieName);
    //   }, [ movieName ] );

    const handleSubmit = () => {
        
       
    }

    return (
        <div>
            <Shopping selectedFoods={ selectedFoods } onChange={onChange} removeFood={removeFood}/>
            
        </div>
    )
}

export default ShoppingCart;