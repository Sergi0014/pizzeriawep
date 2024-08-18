import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import "../styles/Cart.css";

const Cart = ({ cartItems, calcularTotal, handleQuantityChange, handleRemoveItem }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const formatPrice = (price) => {
    return price.toFixed(2);
  };

  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setItemCount(count);
  }, [cartItems]);

  return (
    <div>
      <button className="cart-icon-button" onClick={toggleCart}>
        <FaShoppingCart size={32} />
        {itemCount > 0 && <span className="cart-item-count">{itemCount}</span>}
      </button>
      {isCartOpen && (
        <div className="cart-popup">
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${formatPrice(item.price)}</span>
                <div className="cart-item-quantity">
                  <button onClick={() => handleQuantityChange(item, false)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item, true)}>+</button>
                </div>
                <button className="remove-item-button" onClick={() => handleRemoveItem(item)}>X</button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ${formatPrice(calcularTotal())}</p>
          <button className="cart-close-button" onClick={toggleCart}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;