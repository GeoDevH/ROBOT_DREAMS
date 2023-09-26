import React, { useState } from 'react';
import Product from '../Product/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="container products">
      <div className="row position-products">
        {products.map((product, index) => (
          <div key={index} className="col-md-4 col-lg-3 col-sm-6 mb-4">
            <Product product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
