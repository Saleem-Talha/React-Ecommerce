import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Sports Store</h2>
            <p className="text-sm">Your one-stop shop for all sports equipment.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-bold mb-2">Quote of the Day</h3>
            <p className="text-white italic">"The only way to prove that you're a good sport is to lose."</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: contact@sportsstore.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
