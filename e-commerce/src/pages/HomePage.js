import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Hero from "../components/Hero";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const { cart } = useCart();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  }, [category, products]);

  return (
    <div>
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome to the Sports Store!</h1>
          <p>Your one-stop shop for all sports equipment.</p>
        </div>
        {/* Cart Icon */}
        <Link to="/cart" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
          </svg>
          Cart ({cart.length})
        </Link>
      </header>

      {/* Hero Section */}
      <Hero></Hero>

      {/* Product Section */}
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-semibold">Products</h2>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded-lg bg-gray-100"
          >
            <option value="All">All</option>
            <option value="Soccer">Soccer</option>
            <option value="Basketball">Basketball</option>
            <option value="Tennis">Tennis</option>
            <option value="Running">Running</option>
            <option value="Baseball">Baseball</option>
            <option value="Swimming">Swimming</option>
            <option value="Golf">Golf</option>
            <option value="Boxing">Boxing</option>
            <option value="Cycling">Cycling</option>
            <option value="Yoga">Yoga</option>
            <option value="Hiking">Hiking</option>
            <option value="Snowboarding">Snowboarding</option>
            <option value="Surfing">Surfing</option>
            <option value="Cricket">Cricket</option>
            <option value="Weightlifting">Weightlifting</option>
            <option value="Skateboarding">Skateboarding</option>
            <option value="Trekking">Trekking</option>
            <option value="Gymnastics">Gymnastics</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-gray-900 font-bold mb-2">${product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button className="bg-blue-500 text-white p-2 rounded">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
