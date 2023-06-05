import React from 'react';
import products from '../products';
import './Products.css';

const HairProducts = () => {
    const hairProducts = products.filter(product => product.type === "العناية بالشعر");

    return (
        <div className="product-container">
            <h1>منتجات العناية بالشعر</h1>
            {hairProducts.map(product => (
                <div className="product-card" key={product.id}>
                    <h2 className="product-name" >{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="product-price" >السعر: {product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default HairProducts;
