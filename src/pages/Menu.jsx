import React, { useState } from 'react';
import Cart from './Cart'; 
import MenuItem from '../components/MenuItem'; 
import { MenuList } from '../helpers/MenuList'; 
import "../styles/Menu.css";

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleQuantityChange = (menuItem, increment) => {
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.name === menuItem.name) {
        const newQuantity = increment ? cartItem.quantity + 1 : cartItem.quantity - 1;
        if (newQuantity < 1 || newQuantity > 5) {
          return cartItem; 
        }
        return {
          ...cartItem,
          quantity: newQuantity
        };
      }
      return cartItem;
    }).filter(cartItem => cartItem.quantity > 0);
    setCartItems(updatedCartItems);
  };

  const handleAddToCart = (menuItem) => {
    const existingItem = cartItems.find(item => item.name === menuItem.name);
    if (existingItem) {
      handleQuantityChange(menuItem, true);
    } else {
      setCartItems([...cartItems, { ...menuItem, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (menuItem) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.name !== menuItem.name);
    setCartItems(updatedCartItems);
  };

  const calcularTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="menu">
      <Cart 
        cartItems={cartItems} 
        calcularTotal={calcularTotal} 
        toggleCart={toggleCart} 
        handleQuantityChange={handleQuantityChange}
        handleRemoveItem={handleRemoveItem}
        isCartVisible={isCartVisible}
      />
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            onAddToCart={() => handleAddToCart(menuItem)}
            onQuantityChange={handleQuantityChange} 
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;