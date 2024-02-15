// import React from 'react';

// const Cart = ({ location }) => {
//   const cart = location?.state?.cart || []; 

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cart.length > 0 ? (
//         <div>
//           {cart.map(item => (
//             <div key={item.id}>
//               <h3>{item.name}</h3>
//               <p>Quantity: {item.quantity}</p>
//               <p>Price: ${item.price}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No items in cart</p>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from 'react';

const Cart = ({ location }) => {
  const cart = location?.state?.cart || []; // Use optional chaining to safely access nested properties

  return (
    <div className="bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map(item => (
            <div key={item.id} className="mb-4">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-300">Quantity: {item.quantity}</p>
              <p className="text-gray-300">Price: ${item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-300">No items in cart</p>
      )}
    </div>
  );
};

export default Cart;
