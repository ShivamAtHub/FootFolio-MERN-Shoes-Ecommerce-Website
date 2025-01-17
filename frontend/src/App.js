import React from "react";
import './components/styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

import Casual from "./components/Casual";
import Sports from "./components/Sports";
import Skateboarding from "./components/Skateboard";
import Designer from "./components/Designer";

import Login from "./components/Login";
import Register from "./components/Register";

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Profile from "./components/Profile";

import ProductOverview from './components/ProductOverview';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Product-Specific Routes */}
        <Route path="/casual" element={<Casual />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/skateboarding" element={<Skateboarding />} />
        <Route path="/designer" element={<Designer />} />

        {/* Product Overview Route */}
        <Route path="/product/:id" element={<ProductOverview />} />

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
