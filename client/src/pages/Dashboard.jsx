import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/courseService";
import { Link } from "react-router-dom";

function Dashboard() {

    const [stats, setStats] = useState(null);

    useEffect(() => {

        const fetchStats = async () => {

            try {
                const data = await getDashboardStats();
                setStats(data);
            } catch (error) {
                console.log("Dashboard Error:", error);
            }

        };

        fetchStats();

    }, []);

    if (!stats) {
        return (
            <div className="p-8 text-gray-500">
                Loading dashboard...
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Welcome Back 👋
                </h1>
                <p className="text-gray-500 mt-2">
                    Here is your learning progress overview
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <h3 className="text-gray-500 text-sm">Total Courses</h3>
                    <p className="text-2xl font-bold text-blue-600 mt-2">
                        {stats.total_courses}
                    </p>
                </div>

                <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <h3 className="text-gray-500 text-sm">Enrolled</h3>
                    <p className="text-2xl font-bold text-green-600 mt-2">
                        {stats.enrolled_courses}
                    </p>
                </div>

                <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <h3 className="text-gray-500 text-sm">Completed</h3>
                    <p className="text-2xl font-bold text-purple-600 mt-2">
                        {stats.completed_courses}
                    </p>
                </div>

                <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                    <h3 className="text-gray-500 text-sm">Progress</h3>
                    <p className="text-2xl font-bold text-orange-500 mt-2">
                        {stats.progress}%
                    </p>
                </div>

            </div>

            {/* Quick Action Section */}
            <div className="mt-10 bg-white border rounded-xl p-6 shadow-sm">

                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Continue Learning
                </h2>

                <p className="text-gray-500 mb-4">
                    Jump back into your enrolled courses.
                </p>

                <Link
                    to="/my-courses"
                    className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Go to My Courses
                </Link>

            </div>

        </div>
    );
}

export default Dashboard;