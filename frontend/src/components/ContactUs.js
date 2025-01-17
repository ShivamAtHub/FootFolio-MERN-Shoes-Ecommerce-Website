import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom"; // For home page navigation
import { Field, Label, Switch } from '@headlessui/react'

export default function ContactUs() {

    useEffect(() => {
            AOS.init({
              duration: 1000,
              offset: 200,
              once: true,
            });
          }, []);

    const [agreed, setAgreed] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });
    const [showConfirmation, setShowConfirmation] = useState(false); // For confirmation prompt
    const navigate = useNavigate(); // To navigate to the home page

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data
        if (!agreed) {
            alert("You must agree to the privacy policy.");
            return;
        }

        // Store data in the database (you can call your backend API here)
        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Show confirmation message if form is successfully submitted
                setShowConfirmation(true);
            } else {
                alert("Error submitting the form. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("Error submitting the form. Please try again.");
        }
    };

    // Navigate to the home page
    const handleContinueShopping = () => {
        setShowConfirmation(false); // Hide the confirmation prompt
        navigate("/"); // Navigate to the home page
    };

    return (
        <div>
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" data-aos="fade-up">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Have any questions or need assistance? We are here to help!</p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    {/* Grid for First and Last name */}
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">First name</label>
                            <div className="mt-2.5">
                                <input
                                    required
                                    id="first-name"
                                    name="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">Last name</label>
                            <div className="mt-2.5">
                                <input
                                    required
                                    id="last-name"
                                    name="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email</label>
                            <div className="mt-2.5">
                                <input
                                    required
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">Phone number</label>
                            <div className="mt-2.5">
                                <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                    <div className="flex items-center pl-3.5 py-2.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                        +91
                                    </div>
                                    <input
                                        required
                                        id="phone-number"
                                        name="phone"
                                        type="text"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="12345-67890"
                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 ml-2"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">Message</label>
                            <div className="mt-2.5">
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>

                        {/* Policy */}
                        <Field className="flex gap-x-4 sm:col-span-2">
                            <div className="flex h-6 items-center">
                                <Switch
                                    checked={agreed}
                                    onChange={setAgreed}
                                    className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-gray-900"
                                >
                                    <span className="sr-only">Agree to policies</span>
                                    <span
                                        aria-hidden="true"
                                        className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                    />
                                </Switch>
                            </div>
                            <Label className="text-sm/6 text-gray-600">
                                By selecting this, you agree to our{' '}
                                <a href="#" className="font-semibold text-gray-900">
                                    privacy&nbsp;policy
                                </a>
                                .
                            </Label>
                        </Field>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-10">
                        <button
                            type="submit"
                            style={{
                                backgroundColor: "#141619",
                                color: "white",
                                border: "none",
                                padding: "10px 24px",
                                borderRadius: "100px",
                                cursor: "pointer",
                                fontSize: "1rem",
                                transition: "background-color 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#292f35";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "#141619";
                            }}
                            onFocus={(e) => e.target.style.outline = "none"}
                        >
                            Let's talk
                        </button>
                    </div>
                </form>
            </div>

            {/* Confirmation Prompt */}
            {showConfirmation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md relative">
                        <h3 className="text-lg font-bold text-gray-900">
                            Thank you for contacting us! We will reach out to you on your provided email and phone number if they are correct.
                        </h3>
                        <div className="mt-4 flex space-x-4">
                            <button
                                className="py-1.5 px-6 text-white bg-gray-900 rounded-full hover:bg-gray-800"
                                onClick={handleContinueShopping} // Continue shopping button
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
