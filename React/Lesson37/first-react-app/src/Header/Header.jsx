import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="custom-header">
      <div className="work_hours">
        <p>Mon-Fri: 08:00 - 20:00</p>
        <p>Sat-Sun: 09:00 - 16:00</p>
      </div>
      <img src="/img/logo.ico.png" alt="logo.icon" className="logo"/>
      <div className="work_address">
        <p>St. 37 React, Kyiv, Ukraine 02000</p>
      </div>
    </header>
  );
};

export default Header;