import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Cart.css';

const Cart = ({ clickCount, onAddToCart }) => {
  return (
    <div className="cart" onClick={onAddToCart}>
      <FaShoppingCart className="cart-icon" />
      {clickCount > 0 && <span className="cart-count">{clickCount}</span>}
    </div>
  );
};

export default Cart;
 