import React, { useContext } from 'react';
import Product from '../Product/Product';
import { CartContext } from '../Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';

const Products = ({ products }) => {
  const { incrementClickCount } = useContext(CartContext);

  const handleAddToCart = () => {
    incrementClickCount();
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
