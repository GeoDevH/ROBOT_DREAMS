import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;