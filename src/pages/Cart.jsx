import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Import your CartContext

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="fixed top-16 right-16 bg-white p-4 rounded-lg shadow-md z-50"> {/* Added z-index */}
      <h2 className="text-lg font-bold mb-2">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.src} className="flex items-center mb-2"> {/* Use a unique key */}
              <img src={item.src} alt={item.title} className="w-16 h-16 mr-2" />
              <div>
                <p>{item.title}</p>
                <p>Price: ₹{item.price}/-</p>
              </div>
              <button
                onClick={() => removeFromCart(item.src)} // Pass the item or its ID
                className="text-red-500 hover:text-red-700 ml-2"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;