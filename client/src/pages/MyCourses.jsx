import { useEffect, useState } from "react";
import { getMyCourses } from "../services/courseService";
import { Link } from "react-router-dom";

function MyCourses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        const fetchCourses = async () => {

            try {

                const data = await getMyCourses();

                console.log("My Courses:", data);

                setCourses(data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchCourses();

    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">

            <div className="mb-8">

                <h1 className="text-3xl font-bold text-gray-800">
                    My Learning
                </h1>

                <p className="text-gray-500 mt-2">
                    Continue your enrolled courses.
                </p>

            </div>

            {courses.length === 0 ? (

                <div className="bg-white border rounded-xl p-8 text-center">

                    <h2 className="text-xl font-semibold text-gray-700">
                        No Enrolled Courses
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Enroll in a course to start learning.
                    </p>

                </div>

            ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {courses.map((course) => (

                        <div
                            key={course.id}
                            className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
                        >

                            <div className="h-44 bg-gray-100">

                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                />

                            </div>

                            <div className="p-5">

                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {course.title}
                                </h2>

                                <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                                    {course.description}
                                </p>

                                <Link
                                    to={`/courses/${course.id}`}
                                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Continue Learning
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default MyCourses;