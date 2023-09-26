import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';

const Product = ({ product, onAddToCart }) => {
  const handleAddToCartClick = () => {
    console.log('Product add to Cart:', product);
    onAddToCart(product);
  };

  return (
    <div className="product product-item">
      <img src={product.image} alt="Product" className="product-image" />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <button
          className="btn btn-primary add-to-cart-btn"
          onClick={handleAddToCartClick}
        >
          Додати до кошика
        </button>
      </div>
    </div>
  );
};

export default Product;
