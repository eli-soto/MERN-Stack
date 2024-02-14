import React, { useState } from 'react';

const Product = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Air Jordan 4 "Bred"', price: 249.99 }, 
    { id: 2, name: 'Yeezys 350', price: 410.99 },
    { id: 3, name: 'Off White SB "University Red"', price: 121.99 },
    { id: 4, name: 'Kobe 6 "Pronto"', price: 221.99 },
    { id: 5, name: 'Adidas Samba', price: 109.99 },
    { id: 6, name: 'Yeezys "Zebra"', price: 221.99 },
    // Add more product data as needed
  ];

  const handleSearch = () => {
    const [minPrice, maxPrice] = searchQuery.split('-').map(parseFloat);
    const filtered = products.filter(product => {
      return product.price >= minPrice && product.price <= maxPrice;
    });
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="product">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter price range (e.g., 10-20)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      ) : (
        products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default Product;