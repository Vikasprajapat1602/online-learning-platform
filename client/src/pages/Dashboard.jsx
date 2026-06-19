import { useEffect, useState } from "react";
import { getDashboardStats, getMyCourses } from "../services/courseService";
import { Link } from "react-router-dom";

function Dashboard() {

    const [stats, setStats] = useState(null);
    const [myCourses, setMyCourses] = useState([]);
    const username =
    localStorage.getItem("username");

    useEffect(() => {

        const fetchStats = async () => {

            try {
                const data = await getDashboardStats();
                setStats(data);

                const courses = await getMyCourses();
                setMyCourses(courses);
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
            <div className="bg-white border rounded-2xl p-8 mb-8 shadow-sm">

                <h1 className="text-3xl font-bold text-gray-800">
                    Welcome, {username}
                </h1>

                <p className="text-gray-500 mt-2">
                    Continue your learning journey and build new skills.
                </p>

                <Link
                    to="/my-courses"
                    className="inline-block mt-5 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Continue Learning
                </Link>

            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">

                    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <h3 className="text-black-500 first-letter:uppercase font-bold text-base">Total Courses</h3>
                        <p className="text-2xl font-bold text-black-600 mt-2">
                            {stats.total_courses}
                        </p>
                    </div>

                <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-black-500 first-letter:uppercase font-bold text-base">Enrolled Courses</h3>
                    <p className="text-2xl font-bold text-black-600 mt-2">
                        {stats.enrolled_courses}
                    </p>
                </div>

                <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-black-500 first-letter:uppercase font-bold text-base">Completed lessons</h3>
                    <p className="text-2xl font-bold text-black-600 mt-2">
                        {stats.completed_lessons}
                    </p>
                </div>

                <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-black-500 first-letter:uppercase font-bold text-base">Progress</h3>
                    <p className="text-2xl font-bold text-black-500 mt-2">
                        {stats.progress}%
                    </p>
                </div>

            </div>

            <div className="mt-10">

                <h2 className="text-2xl font-bold text-gray-800 mb-5">
                    My Learning
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {myCourses.slice(0, 4).map((course) => (

                        <div
                            key={course.id}
                            className="
                bg-white
                border
                rounded-xl
                p-5
                shadow-sm
                hover:shadow-md
                transition-all
                "
                        >

                            <h3 className="font-semibold text-lg text-gray-800">
                                {course.title}
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                Continue where you left off.
                            </p>

                            <Link
                                to={`/courses/${course.id}`}
                                className="
                    inline-block
                    mt-4
                    text-blue-600
                    font-medium
                    hover:underline
                    "
                            >
                                Resume Course →
                            </Link>

                        </div>

                    ))}

                </div>

            </div>

            <div className="mt-10">

                <h2 className="text-2xl font-bold text-gray-800 mb-5">
                    Achievements
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    <div className="bg-white border rounded-xl p-5 shadow-sm">
                        🏆 First Course Enrolled
                    </div>

                    <div className="bg-white border rounded-xl p-5 shadow-sm">
                        📚 Active Learner
                    </div>

                    <div className="bg-white border rounded-xl p-5 shadow-sm">
                        🚀 Keep Learning
                    </div>

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