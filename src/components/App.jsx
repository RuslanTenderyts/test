import { useState, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../page/Home"));
const ShoppingCart = lazy(() => import("../page/ShoppingCart"));

const getInitialFoods = () => {
  const foods = localStorage.getItem('foods');
  if(foods !== null) {
    const parsetFoods = JSON.parse(foods);
    return parsetFoods;
  };
  return [];
};

export const App = () => {
  const [selectedFoods, setSelectedFoods] = useState(getInitialFoods);

  useEffect(() => {
    localStorage.setItem('foods', JSON.stringify(selectedFoods))
  }, [selectedFoods]);
  
  const addToCart = (food) => {
    const existingFood = selectedFoods.find((item) => item.id === food.id);

    if (existingFood) {
       setSelectedFoods((prevState) =>
          prevState.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    } else {
      setSelectedFoods(prevState => [...prevState , {...food, quantity: 1 }])
    }; 
  }

  const handlerQuantityChanch = (foodId, newQuantity) => {
    setSelectedFoods((prevSelectedFoods) =>
      prevSelectedFoods.map((item) =>
        item.id === foodId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const handleRemoveFood = (foodId) => {
    setSelectedFoods(prevState => prevState.filter(food => food.id !== foodId));
  }

  return (
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home addToCart={addToCart} isFoods={selectedFoods} />} />       
          <Route path="shopping-cart" element={<ShoppingCart selectedFoods={selectedFoods} onChange={handlerQuantityChanch} removeFood = {handleRemoveFood}  />} />
        </Route>
      </Routes>
    );
};