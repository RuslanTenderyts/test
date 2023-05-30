import React, { useState, useEffect } from 'react';
import { Container, ShopsWrapper, Foods } from './Shops.styled';
import { FoodList} from '../FoodList/FoodList';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ShopsList } from '../ShopsList/ShopsList';
import { fetchShops } from 'service/api';

export const Shops = ({addToCart, isFoods}) => {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  
  useEffect(() => {
    const getFethc = async () => {
    try {
        const data = await fetchShops();
        setShops(data);
    } catch (error) {
        console.log(error);
    }
 };
    getFethc();    
 }, []);
 
  useEffect(() => {
    setSelectedShop(selectedShop || shops[0]);
    }, [selectedShop, shops]);


  const handleShopClick = (shop) => {
    setSelectedShop(shop);
  };

  return (
    <Container>
        <ShopsWrapper>
        <h3>Shops:</h3> 
        <ShopsList shops={shops} selectedShop={selectedShop} isFoods={isFoods} onClick={handleShopClick} />
        </ShopsWrapper>
        <Foods>
            <Scrollbars style={{ width: "100%", height: "100%" }}>
              {selectedShop && (
                <>
                  <h3>{selectedShop.name}:</h3>   
                  <FoodList foods={selectedShop.products} addToCart={addToCart} />
                </>
              )}
            </Scrollbars>
        </Foods>
          
    
    </Container>
  );
};

