import React from 'react';
import Product from '../Product/Product';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';

const Products = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({ type: 'INCREMENT_CLICK_COUNT' });
  };

  return (
    <div className="container products">
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <Product product={product} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
