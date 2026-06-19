import { useState } from "react";
import { loginUser } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(formData);
            localStorage.setItem("token", data.access);
            localStorage.setItem(
                "username",
                formData.username
            );

            alert("Login Successful");
            navigate("/dashboard");

        } catch (error) {
            alert("Invalid Credentials");
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">

            <div className="w-full max-w-md bg-white border rounded-2xl shadow-sm p-8">

                <h2 className="text-3xl font-bold text-gray-800 text-center">
                    Welcome Back
                </h2>

                <p className="text-gray-500 text-center mt-2 mb-6">
                    Login to continue learning
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Login
                    </button>

                </form>

                <p className="text-sm text-center mt-4 text-gray-500">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-blue-600 hover:underline">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Login;