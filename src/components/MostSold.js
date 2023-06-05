import React from 'react';
import products from '../products';
import './Products.css';

const MostSold = () => {
  const mostSoldProducts = products.filter(product => [1, 2, 7].includes(product.id));

  return (
    <div className="product-container">
      <h1>أكثر المنتجات مبيعًا</h1>
      {mostSoldProducts.map(product => (
        <div className="product-card" key={product.id}>
        {product.imageUrl && <img className="product-image" src={product.imageUrl} alt={product.name} />}
          <h2 className="product-name">{product.name}</h2>
          <p>{product.description}</p>
          <p className="product-price">Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MostSold;
