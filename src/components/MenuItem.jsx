import React from 'react';
import "../styles/MenuItem.css";
import Button from '@mui/material/Button'; 

function MenuItem({ image, name, price, onAddToCart, showCart }) {
  const handleClick = () => {
    onAddToCart({ image, name, price }); 
  };

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <Button variant="contained"  onClick={handleClick} className="special-button">
        Agregar al carrito
      </Button>
      {showCart && <div className="special-cart"><Carrito /></div>}
      
    </div>
  );
}

export default MenuItem;