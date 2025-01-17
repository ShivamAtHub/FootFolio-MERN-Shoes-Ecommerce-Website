import React, { useState, useEffect } from "react";
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import logo from './assets/logo1.png';

function Register() {
     useEffect(() => {
        AOS.init({
          duration: 1000,
          offset: 200,
          once: true,
        });
      }, []);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const registerData = { username, email, password };

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registerData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(data.message);
                setError("");
            } else {
                setSuccess("");
                setError(data.message);
            }
        } catch (err) {
            setSuccess("");
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white" data-aos="fade-up" data-aos-delay="500">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img alt="Your Company" src={logo} className="mx-auto h-10 w-auto"/>
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-[#141619]">
                    Create your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-[#141619]">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                autoComplete="username"
                                className="block w-full rounded-md bg-white text-gray-900 px-3 py-1.5 text-base placeholder:text-gray-400 border border-[#141619] outline-none focus:ring-0 focus:border-[#141619] sm:text-sm"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#141619]">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white text-gray-900 px-3 py-1.5 text-base placeholder:text-gray-400 border border-[#141619] outline-none focus:ring-0 focus:border-[#141619] sm:text-sm"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-[#141619]">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white text-gray-900 px-3 py-1.5 text-base placeholder:text-gray-400 border border-[#141619] outline-none focus:ring-0 focus:border-[#141619] sm:text-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    {success && <div className="text-green-500 text-sm">{success}</div>}

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-full bg-[#141619] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#292f35] focus:outline-none focus:ring-2 focus:ring-[#141619] mt-4"
                        >
                            Create an account
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-[#141619]">
                    Already a member?{" "}
                    <a href="/login" className="font-semibold text-[#141619] hover:text-[#292f35]">
                        Login here
                    </a>
                </p>
            </div>
            {/* Footer */}
            <div class="animate__animated animate__fadeInUp">
                <footer className="bg-transparent-100 text-gray-700 pb-2 pt-10 text-center animate__delay-4s">
                    <p>&copy; 2025 <a href="https://www.linkedin.com/in/shivamdarekar2206/" target="_blank" rel="noopener noreferrer">Shivam Darekar</a>. All rights reserved.</p> 
                    <p className="mt-2 text-sm"> Images by <a href="https://www.nike.com" target="_blank" rel="noopener noreferrer" className="underline">Nike</a>.</p>
                </footer>
            </div>
        </div>
    );
}

export default Register;
