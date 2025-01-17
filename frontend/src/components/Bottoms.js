import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
    {
        id: 1,
        name: 'Straight-Leg Jeans',
        href: '#',
        imageSrc: 'https://static.zara.net/assets/public/1414/1c6e/a8464bea8776/3e733339617d/04048300800-e1/04048300800-e1.jpg?ts=1730711203184&w=449',
        price: '₹4,950.00',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Tapered Slim Fit Jeans',
        href: '#',
        imageSrc: 'https://static.zara.net/assets/public/f22f/2018/49bc4e13a9ce/0a637c1c5171/04048415427-e1/04048415427-e1.jpg?ts=1722593604835&w=449',
        price: '₹3,550.00',
        color: 'Light Blue',
    },
    {
        id: 3,
        name: 'St]raight-Leg Jeans',
        href: '#',
        imageSrc: 'https://static.zara.net/assets/public/b033/be26/08b247ee97b5/3cc94905301b/01538312250-e1/01538312250-e1.jpg?ts=1722593579456&w=449',
        price: '₹3,550.00',
        color: 'Off-White',
    },
    {
        id: 4,
        name: 'Cargo Trouser',
        href: '#',
        imageSrc: 'https://static.zara.net/assets/public/d6d2/4f90/261c47429119/8bd01e2c04e1/00108412800-e1/00108412800-e1.jpg?ts=1725893318657&w=449',
        price: '₹2,950.00',
        color: 'Black',
    },
]

export default function Tops() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); // Used to navigate to Cart
  
    const openModal = (product) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedProduct(null);
      setIsModalOpen(false);
    };
  
    const addToCart = () => {
      const cartItem = { ...selectedProduct, quantity: 1 };
  
      // Get cart items from localStorage (if any)
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
      // Add new item to the cart
      cartItems.push(cartItem);
  
      // Save updated cart items to localStorage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
      closeModal(); // Close the modal
      navigate("/cart"); // Navigate to the Cart page after adding to the cart
    };
  
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Bottoms</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative cursor-pointer"
                onClick={() => openModal(product)}
              >
                <img
                  alt={product.name}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Modal */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
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
              <div className="mt-6 flex space-x-4">
                <button
                  className="add-to-cart-button flex-1 py-2 px-4 text-white"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  