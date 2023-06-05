import React from 'react';
import products from '../products';

const SkinProducts = () => {

    const skinProducts = products.filter(product => product.type === "العناية بالبشرة");

    return (
        <div className="product-container">
            <h1>منتجات العناية بالبشرة</h1>
            {skinProducts.map(product => (
                <div className="product-card" key={product.id}>
                    <h2 className="product-name" >{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="product-price" >السعر: {product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default SkinProducts;
