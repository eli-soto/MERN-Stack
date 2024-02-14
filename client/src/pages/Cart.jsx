import React from 'react';

const Cart = ({ location }) => {
  const cart = location?.state?.cart || []; // Use optional chaining to safely access nested properties

  return (
    <div>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default Cart;
