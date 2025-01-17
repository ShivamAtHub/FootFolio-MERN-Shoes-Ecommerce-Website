import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Casual() {
  const [products, setProducts] = useState([]); // Store products data
  const [selectedProduct, setSelectedProduct] = useState(null); // Store selected product for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility
  const [selectedSize, setSelectedSize] = useState(""); // Store selected size for the modal
  const [showAddToCartAlert, setShowAddToCartAlert] = useState(false); // State for add to cart alert
  const navigate = useNavigate(); // For navigation to Cart

  // Fetch all products for the 'Casual' category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products/casual");
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        setProducts(data); // Set products data
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts(); // Fetch products when component mounts
  }, []);

  // Open the modal with selected product
  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0] || ""); // Set default size
    setIsModalOpen(true); // Show modal
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setSelectedSize(""); // Clear selected size
  };

  // Add to cart functionality
  const addToCart = () => {
    const cartItem = { ...selectedProduct, quantity: 1, size: selectedSize };

    // Get cart items from localStorage (if any)
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add new item to the cart
    cartItems.push(cartItem);

    // Save updated cart items to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Show the "Item Added to Cart" alert
    setShowAddToCartAlert(true);

    // Close modal
    closeModal();
  };

  // Close the "Item Added to Cart" alert
  const closeAlert = () => {
    setShowAddToCartAlert(false);
  };

  // Go to the cart page
  const goToCart = () => {
    setShowAddToCartAlert(false); // Hide the alert
    navigate("/cart"); // Navigate to Cart page
  };

  useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 200,
          once: true,
        });
      }, []);

  return (
    <div className="bg-white" data-aos="fade-up">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Casual Shoes</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="group relative cursor-pointer"
              onClick={() => openModal(product)} // Open modal on click
            >
              <img
                alt={product.name}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="bg-transparent-100 text-gray-700 py-4 pt-10 text-right">
          <a href="/products" rel="noopener noreferrer">&larr; Back to Products</a>
        </p>
      </div>

      {/* Modal to show product details */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md relative z-[10000]">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={selectedProduct.imageSrc}
              alt={selectedProduct.name}
              className="rounded-md w-full h-80 object-cover"
            />
            <h3 className="mt-4 text-lg font-bold text-gray-900">{selectedProduct.name}</h3>
            <p className="text-sm text-gray-500">{selectedProduct.color}</p>
            <p className="mt-2 text-lg font-medium text-gray-900">{selectedProduct.price}</p>
            <p className="mt-4 text-gray-700">{selectedProduct.description}</p>

            {/* Size Dropdown */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="mt-2 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
              >
                {selectedProduct.sizes && selectedProduct.sizes.length > 0 ? (
                  selectedProduct.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))
                ) : (
                  <option>-</option>
                )}
              </select>
            </div>

            {/* Add to Cart Button */}
            <button
              className="add-to-cart-button mt-6 w-full rounded-md bg-gray-900 px-8 py-3 text-white font-medium hover:bg-gray-800"
              onClick={addToCart} // Call addToCart function on button click
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Add to Cart Alert */}
      {showAddToCartAlert && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md relative z-[10000]">
            <h3 className="text-lg font-bold text-gray-900">Item Added to Cart</h3>
            <div className="mt-4 flex space-x-4">
              <button
                className="py-1.5 px-6 text-white bg-gray-900 rounded-full hover:bg-gray-800"
                onClick={goToCart} // Go to Cart page
              >
                Go to Cart
              </button>
              <button
                className="py-1.5 px-6 border-2 border-gray-800 text-gray-900 rounded-full hover:bg-gray-800 hover:text-white"
                onClick={closeAlert} // Close the alert and continue shopping
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-transparent-100 text-gray-700 py-4 text-center">
          <p>&copy; 2025 <a href="https://www.linkedin.com/in/shivamdarekar2206/" target="_blank" rel="noopener noreferrer">Shivam Darekar</a>. All rights reserved.</p>
          <p className="mt-2 text-sm"> Images by <a href="https://www.nike.com" target="_blank" rel="noopener noreferrer" className="underline">Nike</a>.</p>
      </footer>
    </div>
  );
}
