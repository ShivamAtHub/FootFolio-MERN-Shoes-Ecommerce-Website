import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate

function Checkout() {
  const navigate = useNavigate(); // Initialize navigate inside the component

  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false); // Track form validity

  // State to manage visibility of CVV
  const [showCvv, setShowCvv] = useState(false);

  // Validate the form inputs
  const validateForm = () => {
    const validationErrors = {};
    // Remove dashes to validate the card number
    const cardNumberWithoutDashes = cardNumber.replace(/-/g, "");

    if (!address) {
      validationErrors.address = "Shipping address is required.";
    }
    if (!cardNumber || cardNumberWithoutDashes.length !== 16) {
      validationErrors.cardNumber = "Please enter a valid 16-digit card number.";
    }
    if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      validationErrors.expiryDate = "Please enter a valid expiry date (MM/YY).";
    }
    if (!cvv || cvv.length !== 3) {
      validationErrors.cvv = "CVV must be 3 digits.";
    }
    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Save shipping info to localStorage
      const shippingInfo = {
        address: address, // Shipping address from the form
        cardNumber: cardNumber, // Card number
        expiryDate: expiryDate, // Expiry date
        cvv: cvv, // CVV
      };

      localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));

      // Send the form data to the backend to store in the database
      try {
        const response = await fetch("http://localhost:5000/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(shippingInfo),
        });

        if (response.ok) {
          // Navigate to Order Confirmation
          navigate("/order-confirmation");
        } else {
          console.error("Failed to submit checkout data");
        }
      } catch (err) {
        console.error("Error submitting checkout data:", err);
      }
    } else {
      setErrors(validationErrors); // Show errors if form validation fails
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Checkout</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={cardNumber}
            onChange={(e) => {
              const formatted = e.target.value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1-");
              setCardNumber(formatted);
            }}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            maxLength="19" // Maximum length for the format "1234-5678-1234-5678"
            required
          />
          {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Expiry Date (MM/YY)</label>
            <input
              type="text"
              name="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="MM/YY"
              required
            />
            {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">CVV</label>
            <input
              type={showCvv ? "text" : "password"}
              name="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              maxLength="3"
              required
            />
            <button
              type="button"
              onClick={() => setShowCvv((prev) => !prev)} // Toggle CVV visibility
              className="absolute right-3 top-2 text-gray-500 bg-transparent border-none p-0"
            >
              <i className={showCvv ? "fas fa-eye-slash" : "fas fa-eye"}></i>
            </button>
            {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 px-4 buy-now-button text-white font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            Complete Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
