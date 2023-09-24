import React, { useState } from 'react';
import Header from './Header/Header';
import Products from './Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleAddToCart = () => {
    setClickCount(clickCount + 1);
  };

  const productsData = [
    { name: 'iPhone12', price: 950.00, image: '/img/iPhone12.png' },
    { name: 'iPhone13', price: 1100.00, image: '/img/iPhone13.png' },
    { name: 'iPhone14', price: 1250.00, image: '/img/iPhone14.png' },
  ];

  return (
    <div>
      <Header clickCount={clickCount} />
      <div className="products-container">
        <Products products={productsData} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default App;
