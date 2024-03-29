// ProductCard.jsx
import React from 'react';
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <img src ={product.image} alt={product.name} />
      <button className= "ignore">Add to Cart</button>
    </div>
  );
};

export default ProductCard;