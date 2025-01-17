import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // For Checkout Button Navigation

function Cart() {
  // Get cart items from localStorage or set empty array if not present
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  // Function to remove item from the cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Save cart to local storage
  };

  // Function to modify the quantity of an item
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return;
  
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
  
    setCartItems([...updatedCart]);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Calculate total cost and number of items in the cart
  const totalCost = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Save cart items to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="bg-white p-6 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="mt-4 text-gray-500">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="mt-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>Price: {item.price}</p>
              <div className="flex items-center mt-2">
                {/* Quantity Input */}
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value) || 1; // Ensure valid input
                    updateQuantity(item.id, newQuantity);
                  }}
                  className="mx-2 w-14 text-center border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium text-gray-900">₹{parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity}</p>
              <button
                className="add-to-cart-button hover:text-red-800 px-4 py-2 rounded-md border border-gray-300"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {/* Total summary */}
      {cartItems.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between">
            <p className="font-semibold text-lg">Total Items: {totalItems}</p>
            <p className="font-semibold text-lg">Total Cost: ₹{totalCost.toFixed(2)}</p>
          </div>

          {/* Checkout Button */}
          <div className="mt-4 flex justify-end">
            <Link
              to="/checkout"
              className="buy-now-button text-white px-4 py-2 rounded-md hover:bg-indigo-500"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
