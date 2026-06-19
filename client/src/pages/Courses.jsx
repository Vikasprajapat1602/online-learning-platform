import { useEffect, useState } from "react";
import { getCourses } from "../services/courseService";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Courses() {
    const [searchTerm, setSearchTerm] = useState("");
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getCourses();
                console.log("Received: ", data);
                setCourses(data);
            } catch (error) {
                console.log("Error : ", error);
            }
        };

        fetchCourses();
    }, []);

    const filteredCourses = courses.filter((course) =>
        course.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );



    return (
        <div className="max-w-7xl mx-auto px-6 py-8">

            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Explore Courses
                </h1>

                <p className="text-gray-500 mt-2">
                    Choose a course and start learning today.
                </p>
            </div>
            <div className="mb-6">

                <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                    className="
        w-full
        md:w-96
        px-4
        py-3
        border
        rounded-xl
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        "
                />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {filteredCourses.map((course) => (

                    <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
                    >

                        {/* Course Banner */}
                        <div className="h-40 overflow-hidden">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5">

                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                {course.title}
                            </h2>

                            <p className="text-gray-600 text-sm mb-5">
                                {course.description}
                            </p>

                            <Link
                                to={`/courses/${course.id}`}
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                View Course
                            </Link>

                        </div>

                    </motion.div>

                ))}

            </div>
            {filteredCourses.length === 0 && (
                <div className="text-gray-500">
                    No courses found.
                </div>
            )}

        </div>
    );
}

export default Courses;