import { useState } from "react";
import { registerUser } from "../services/authService";
import { Link } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await registerUser(formData);
            alert("Registration Successful");

        } catch (error) {
            console.log("ERROR OBJECT:", error);

            if (error.response) {
                console.log("STATUS:", error.response.status);
                console.log("DATA:", error.response.data);
            }

            alert("Registration Failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">

            <div className="w-full max-w-md bg-white border rounded-2xl shadow-sm p-8">

                <h2 className="text-3xl font-bold text-gray-800 text-center">
                    Create Account
                </h2>

                <p className="text-gray-500 text-center mt-2 mb-6">
                    Start your learning journey
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
                        type="email"
                        name="email"
                        placeholder="Email"
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
                        Create Account
                    </button>

                </form>

                <p className="text-sm text-center mt-4 text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Register;