import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleOrder = () => {
    alert('Order placed successfully!');
    // Here you could handle order submission to a server, etc.
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Checkout</h2>
        <p>Your cart is empty. <a href="/">Go back to shopping</a></p>
      </div>
    );
  }

  return (
    <>
    <div
        className="bg-cover bg-center text-white mb-4"
        style={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjtgxTJnQ6ZP3Y6N1Y5yST24KGL6JoTuRBXTyv0frWX2f8EeUU5Y0MRzIusJNTUsF2Obg&usqp=CAU')`,
          height: '40vh',
        }}
      >
        <div className="container mx-auto p-4 flex flex-col items-center justify-center h-full">
          <h2 className="text-5xl font-bold mb-4 text-center">Sports Store</h2>
          <p className="text-lg">Saleem Talha</p>
        </div>
      </div>
    

      <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button onClick={handleOrder} className="bg-blue-500 text-white p-2 rounded">
        Place Order (Cash on Delivery)
      </button>
    </div>
    </>
 
  );
};

export default Checkout;
