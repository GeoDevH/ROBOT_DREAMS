import React, { useState } from 'react';

const CreateProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    title: '',
    image: '',
    price: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCreateProduct = () => {
    onAddProduct(product);
  };

  return (
    <div className="container">
      <h2>Створення нового товару</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Назва товару</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Product Title"
          name="title"
          value={product.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Зображення товару</label>
        <input
          type="file"
          className="form-control"
          id="image"
          name="image"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Ціна товару</label>
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder="Product Price"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleCreateProduct}>Створити товар</button>
    </div>
  );
};

export default CreateProduct;
