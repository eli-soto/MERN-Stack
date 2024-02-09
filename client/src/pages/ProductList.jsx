import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';

const ProductList = () => {
  // Fetch products data using useQuery hook
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-container padding-y">
      <h2 className="text-2xl font-bold text-center mb-8">All Products</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.getAllProduct.map(product => (
          <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold">{product.price} USD</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;