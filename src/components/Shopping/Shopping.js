import React, { useState, useEffect, useRef  } from 'react';
import {  useLocation } from "react-router-dom";
import { Container, ShopsWrapper, Foods, TotalPrice, Link } from './Shopping.stayled';
import { ShoppingList} from '../ShoppingList/ShoppingList';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ShoppingFormik } from "../ShoppingForm/ShoppingForm"

const getInitialOrder = () => {
  const orders = localStorage.getItem('orders');
  if(orders !== null) {
    const parsetOrders = JSON.parse(orders);
    return parsetOrders;
  };
  return [];
};

export const Shopping = ({selectedFoods, onChange, removeFood}) => {
  const [orders, setOrders] = useState(getInitialOrder);
  
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
    console.log(orders);
  }, [orders]);
 
  const handleSubmitClick = (valueForm) => {
    setOrders(prevState => [...prevState , {...valueForm , foods: {...selectedFoods}}])
  }

  const calculateTotalPrice = (foods) => {
    const totalPrice = foods.reduce((accumulator, food) => {
      const foodPrice = food.price;
      const foodQuantity = food.quantity;
      const foodTotalPrice = foodPrice * foodQuantity;
      return accumulator + foodTotalPrice;
  }, 0);

    return totalPrice;
  };

  const isdisabled =  !(selectedFoods.length > 0);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");

  return (
    <>
    <Container>
        <ShopsWrapper>
            <ShoppingFormik onSubmit={handleSubmitClick} isdisabled={isdisabled}/>
        </ShopsWrapper>
        <Foods>
            <Scrollbars style={{ width: "100%", height: "100%" }}>
              {isdisabled ? (
                <Link to={backLinkHref.current} styled={{textDecoration: 'none'}}> &#8592; You haven't ordered anything yet. Return to the shops. </Link>
                ) : (
                  <>
                    <h3>Check the order:</h3>   
                    <ShoppingList foods={selectedFoods} onChange={onChange} removeFood={removeFood} />
                  </>
                )}
              
            </Scrollbars>
        </Foods>
    </Container>
    <TotalPrice>Total prise: {calculateTotalPrice(selectedFoods)} UAH</TotalPrice>
    </>
  );
};

