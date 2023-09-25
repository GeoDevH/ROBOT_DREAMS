import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Products from './Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [productsData, setProductsData] = useState([]);

  const handleAddToCart = () => {
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
      console.log('Data from API:', data);

        if (Array.isArray(data.products)) {
          const formattedData = data.products.map(item => ({
            title: item.title,
            images: item.images,
            price: item.price
          }));
          setProductsData(formattedData);
        } else {
          console.error('Products data from API is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
