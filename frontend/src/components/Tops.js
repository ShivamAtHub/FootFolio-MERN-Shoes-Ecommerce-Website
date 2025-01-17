import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Washed Leather Effect Biker Jacket",
    href: "#",
    imageSrc:
      "https://static.zara.net/assets/public/ab35/814b/a1684621ad99/cbc8c130dd3b/03715428700-e1/03715428700-e1.jpg?ts=1725954773436&w=449",
    price: "₹7,550.00",
    color: "Black",
  },
  {
    id: 2,
    name: "Combined Patch Hoodie",
    href: "#",
    imageSrc:
      "https://static.zara.net/assets/public/1d56/f651/69f84c6e88b5/4c0fe29a9fae/03665333712-e1/03665333712-e1.jpg?ts=1726567121441&w=449",
    price: "₹4,950.00",
    color: "Beige",
  },
  {
    id: 3,
    name: "Boxy Fit Padded Jacket",
    href: "#",
    imageSrc:
      "https://static.zara.net/assets/public/368b/3fac/910843c0a645/9766f4072157/00155312710-e1/00155312710-e1.jpg?ts=1727963660854&w=449",
    price: "₹7,550.00",
    color: "Creme",
  },
  {
    id: 4,
    name: "Wool Blend Overshirt",
    href: "#",
    imageSrc:
      "https://static.zara.net/assets/public/9ea6/c4b2/bdde4d188382/e49a39f0b46b/05854388401-e1/05854388401-e1.jpg?ts=1729158837105&w=449",
    price: "₹7,550.00",
    color: "Dark Blue",
  },
];

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
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Tops</h2>

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
