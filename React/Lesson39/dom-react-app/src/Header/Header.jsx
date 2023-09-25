import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Cart from '../Cart/Cart';

const Header = ({ clickCount, onAddToCart }) => {
  return (
    <header className="custom-header d-flex justify-content-between align-items-center">
      <div className="work_hours">
        <p>Mon-Fri: 08:00 - 20:00</p>
        <p>Sat-Sun: 09:00 - 16:00</p>
      </div>
      <img src="/img/logo.ico.png" alt="logo.icon" className="h-100 logo" />
      <div className="work_address">
        <p>St. 37 React, Kyiv, Ukraine 02000</p>
      </div>
      <div className="shopping-cart">
        <Cart clickCount={clickCount} onAddToCart={onAddToCart} />
      </div>
    </header>
  );
};

export default Header;
