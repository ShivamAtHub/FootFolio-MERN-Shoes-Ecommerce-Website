import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductOverview() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Fetch the product by ID (which corresponds to MongoDB's _id)
                const response = await fetch(`http://localhost:5000/api/casual/${id}`);
                const data = await response.json();
                console.log("Fetched Product:", data); // Debugging
                setProduct(data); // Set the fetched product data
                setSelectedSize(data.sizes ? data.sizes[0] : ""); // Handle sizes
            } catch (err) {
                console.error("Error fetching product:", err);
            }
        };

        fetchProduct(); // Fetch product data on component mount
    }, [id]);

    if (!product) {
        return <div>Loading...</div>; // Show loading message while data is being fetched
    }

    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Product Image */}
                <div className="mx-auto mt-6 max-w-xl sm:px-6 lg:px-8">
                    <img
                        alt={product.name}
                        src={product.imageSrc}
                        className="w-full max-h-80 rounded-lg object-cover"
                    />
                </div>

                {/* Product Info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        {product.name}
                    </h1>
                    <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
                    <p className="mt-4 text-gray-700">{product.description}</p>

                    {/* Size Dropdown */}
                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                        <select
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="mt-2 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
                        >
                            {product.sizes && product.sizes.length > 0 ? (
                                product.sizes.map((size) => (
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
                        type="button"
                        className="mt-10 w-full rounded-md bg-gray-900 px-8 py-3 text-white font-medium hover:bg-gray-800"
                    >
                        Add to Bag
                    </button>
                </div>
            </div>
        </div>
    );
}
