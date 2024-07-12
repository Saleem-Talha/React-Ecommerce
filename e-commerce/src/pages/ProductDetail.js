import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, dispatch } = useCart();

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find(
          (product) => product.id === parseInt(productId)
        );
        setProduct(selectedProduct);
      });
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Product Details */}
      <div className="container mx-auto p-4 flex-grow">
        <div className="flex">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-96 h-auto object-contain mr-8"
          />
          {/* Product Details */}
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-gray-900 font-bold mb-2">${product.price}</p>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Detailed Description</h3>
              <p className="text-gray-700">{product.detailedDescription}</p>
            </div>
            <button
              onClick={addToCart}
              className="bg-blue-500 text-white p-2 rounded mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4">
        &copy; 2024 Sports Store. All rights reserved.
      </footer>
    </div>
  );
};

export default ProductDetail;
