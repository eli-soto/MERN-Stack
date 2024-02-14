import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import ProductCard from './ProductCard'
const ProductList = () => {
  // Fetch products data using useQuery hook
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
console.log(data);
  return (
    <div className="max-container padding-y">
      <h2 className="text-2xl font-bold text-center mb-8">All Products</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.getAllProduct.map(product => (
          <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <ProductCard product= {product}></ProductCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;