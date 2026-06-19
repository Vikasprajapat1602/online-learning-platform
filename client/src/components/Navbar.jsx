import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
      

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-blue-600"
                >
                    LearnHub
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-5">

                    {!token ? (
                        <>
                            <Link
                                to="/"
                                className="text-gray-600 hover:text-blue-600 transition"
                            >
                                Home
                            </Link>
                            <Link
                                to="/login"
                                className="text-gray-600 hover:text-blue-600 transition"
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
                    ) : (
                        <>
                            <Link
                                to="/"
                                className="text-gray-600 hover:text-blue-600 transition"
                            >
                                Home
                            </Link>
                            <Link
                                to="/dashboard"
                                className="text-gray-600 hover:text-blue-600 transition"
                            >
                                Dashboard
                            </Link>

                            <Link
                                to="/courses"
                                className="text-gray-600 hover:text-blue-600 transition"
                            >
                                Courses
                            </Link>

                            <Link
                                to="/my-courses"
                                className="text-gray-600 hover:text-blue-600 transition"
                            >
                                My Courses
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
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