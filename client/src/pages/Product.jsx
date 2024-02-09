// ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 20.99 },
    // Add more products here
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
