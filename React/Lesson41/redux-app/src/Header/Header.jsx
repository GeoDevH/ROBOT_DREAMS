import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartItemCount = useSelector(state => state.cart.cartItemCount);

  return (
    <header className="custom-header d-flex justify-content-between align-items-center">
      <div className="work-hours">
        <p>Mon-Fri: 08:00 - 20:00</p>
        <p>Sat-Sun: 09:00 - 16:00</p>
      </div>
      <img src="/img/logo.ico.png" alt="logo.icon" className="h-100 logo" />
      <div className="work-address">
        <p>St. 37 React, Kyiv, Ukraine 02000</p>
      </div>
      <div className="shopping-cart">
        <div className="cart">
          <FaShoppingCart className="cart-icon" />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
