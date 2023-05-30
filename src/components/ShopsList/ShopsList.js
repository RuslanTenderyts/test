import { List, ShopItem } from "./ShopsList.stayled";
import PropTypes from 'prop-types';



export const ShopsList = ({ shops, selectedShop, isFoods, onClick }) => {
  const disabled = isFoods.length > 0;
   return (
    <List>
      {shops.map((shop) => (
        <li key={shop.id}>
          <ShopItem 
            selected={selectedShop && selectedShop.id === shop.id}
            disabled={disabled}
            onClick={() => onClick(shop)}
          >

              {shop.name}
          </ShopItem>
        </li>
      ))}
    </List>
  );
};


ShopsList.propTypes = {
  shops: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
}