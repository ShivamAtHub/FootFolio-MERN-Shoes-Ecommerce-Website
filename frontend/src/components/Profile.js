import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if token exists in localStorage
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirect to login if not logged in
        } else {
            // Fetch user data using token if logged in
            const fetchUserData = async () => {
                try {
                    const response = await fetch("http://localhost:5000/api/auth/user", {
                        method: "GET",
                        headers: {
                            "Authorization": `Bearer ${token}`,
                        },
                    });
                    const data = await response.json();
                    if (response.ok) {
                        setUser(data);
                    } else {
                        navigate("/login");
                    }
                } catch (err) {
                    console.log("Error fetching user data", err);
                }
            };
            fetchUserData();
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token on logout
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="profile-container">
            {user ? (
                <div>
                    <h2>Welcome, {user.username}!</h2>
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default Profile;
