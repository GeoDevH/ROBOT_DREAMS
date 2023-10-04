import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementClickCount } from './redux/actions';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const dispatch = useDispatch();
  const clickCount = useSelector(state => state.cart.clickCount);

  const incrementClick = () => {
    dispatch(incrementClickCount());
  };

  return (
    <CartContext.Provider value={{ clickCount, incrementClick }}>
      {children}
    </CartContext.Provider>
  );
};
