import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCreateForm, setProductsData } from './redux/actions';
import Header from './Header/Header';
import Products from './Products/Products';
import CreateProduct from './CreateProduct/CreateProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(state => state.cart.productsData);
  const showCreateForm = useSelector(state => state.cart.showCreateForm);

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
          dispatch(setProductsData(formattedData));
        } else {
          console.error('Products data from API is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [dispatch]);

  const handleAddProduct = (newProduct) => {
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
    dispatch(toggleCreateForm());
  };

  return (
    <div>
      <Header />
      <div className="products-container">
        <Products products={productsData} />
      </div>
      {showCreateForm ? (
        <CreateProduct onAddProduct={handleAddProduct} />
      ) : (
        <button onClick={() => dispatch(toggleCreateForm())}>Додати товар</button>
      )}
    </div>
  );
};

export default App;
