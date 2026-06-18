import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="bg-white border-b shadow-sm px-6 py-4">

            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="text-xl font-bold text-blue-600">
                    LearnHub
                </Link>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {/* IF NOT LOGGED IN */}
                    {!token && (
                        <>
                            <Link
                                to="/login"
                                className="text-gray-700 hover:text-blue-600 transition"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Register
                            </Link>
                        </>
                    )}

                    {/* IF LOGGED IN */}
                    {token && (
                        <>
                            <Link
                                to="/dashboard"
                                className="text-gray-700 hover:text-blue-600"
                            >
                                Dashboard
                            </Link>

                            <Link
                                to="/courses"
                                className="text-gray-700 hover:text-blue-600"
                            >
                                Courses
                            </Link>

                            <Link
                                to="/my-courses"
                                className="text-gray-700 hover:text-blue-600"
                            >
                                My Courses
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    )}

                </div>

            </div>
        </nav>
    );
}

export default Navbar;