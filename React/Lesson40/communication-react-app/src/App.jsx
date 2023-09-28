import React, { useState, useEffect } from 'react';
import { CartProvider } from './Cart/Cart';
import Header from './Header/Header';
import Products from './Products/Products';
import CreateProduct from './CreateProduct/CreateProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.products)) {
          const formattedData = data.products.map(({ title, images, price }) => ({
            title,
            images,
            price
          }));
          setProductsData(formattedData);
        } else {
          console.error('Products data from API is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddProduct = (newProduct) => {
    setProductsData([...productsData, newProduct]);
    setShowCreateForm(false);
  };

  return (
    <CartProvider>
      <div>
        <Header />
        <div className="products-container">
          <Products products={productsData} />
        </div>
        {showCreateForm ? (
          <CreateProduct onAddProduct={handleAddProduct} />
        ) : (
          <button onClick={() => setShowCreateForm(true)}>Додати товар</button>
        )}
      </div>
    </CartProvider>
  );
};

export default App;