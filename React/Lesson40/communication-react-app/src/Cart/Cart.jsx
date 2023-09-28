import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);

  const incrementClickCount = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <CartContext.Provider value={{ clickCount, incrementClickCount }}>
      {children}
    </CartContext.Provider>
  );
};
