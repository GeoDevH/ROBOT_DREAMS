import React from 'react';

import './Header.css';

const Header = () => {
    return (
      <div className="header">
        <div className="left-text">T</div>
        <img
          src="./img/logo-scheduler.png"
          alt="Logo-scheduler" 
          className="logo-scheduler"
        />
        <div className="right-text">ask_Sheduler</div>
      </div>
       
    );
  };
  
  export default Header;