import React from 'react';
import products from '../products';
import './Products.css';

const HairProducts = () => {
    const hairProducts = products.filter(product => product.type === "العناية بالشعر");

    return (
        <div className="product-container">
            <h1>منتجات العناية بالشعر</h1>
            {hairProducts.map(product => (
                <div className={`product-card ${product.imageUrl ? '' : 'no-image'}`} key={product.id} style={{order: product.id}}>
                    {product.imageUrl && <img className="product-image" src={product.imageUrl} alt={product.name} />}
                    <h2 className="product-name" >{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="product-price" >السعر: {product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default HairProducts;
