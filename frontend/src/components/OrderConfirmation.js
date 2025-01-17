import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

function OrderConfirmation() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // Get cart items and shipping info from localStorage
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
    const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo")) || {};
    setCartItems(cartData);
    setShippingAddress(shippingInfo.address || "No address provided");
    setPaymentMethod(shippingInfo.paymentMethod || "No payment method");
  }, []);

  // Calculate total price
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity,
    0
  );

  return (
    <div className="bg-white p-6 rounded-md shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Order Confirmation</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Order Summary</h3>
        <div className="mt-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mt-2">
              <div>
                <h4 className="text-lg text-gray-700">{item.name}</h4>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <p className="text-lg text-gray-900">₹{parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Shipping Information</h3>
        <p className="mt-2 text-sm text-gray-700">{shippingAddress}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Payment Method</h3>
        <p className="mt-2 text-sm text-gray-700">Card</p>
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between">
          <p className="font-semibold text-lg">Total Amount</p>
          <p className="font-semibold text-lg">₹{totalAmount.toFixed(2)}</p>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="buy-now-button text-white px-4 py-2 rounded-md hover:bg-indigo-500"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
