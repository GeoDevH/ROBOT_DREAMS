import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { incrementClickCount, incrementCartItemCount } from '../redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector(state => state.cart.cartItemCount);

  const firstImage = product.images && product.images.length > 0 ? product.images[0] : '';

  const handleAddToCartClick = () => {
    dispatch(incrementClickCount());
    dispatch(incrementCartItemCount());
    console.log('Product added to cart:', product);
  };

  return (
    <div className="product product-item">
      <img src={firstImage} alt="Product" className="product-image" />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <button
          className="btn btn-primary add-to-cart-btn"
          onClick={handleAddToCartClick}
        >
          Додати до кошика
        </button>
        <div className="cart-count">
          <FaShoppingCart className="cart-icon" />
          <span>{cartItemCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
