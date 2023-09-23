import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt="Product" className="product-image"/>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default Product;