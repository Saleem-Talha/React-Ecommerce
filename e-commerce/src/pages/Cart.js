import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="flex justify-between items-center mb-4">
                <div>
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4"/>
                  <span>{product.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">${product.price}</span>
                  <button
                    onClick={() => removeFromCart(product)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
            <Link to="/checkout">
              <button className="bg-green-500 text-white p-2 rounded mt-2">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
