import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { getCourses } from "../services/courseService";
import learningImg from "../assets/undraw_online-learning_tgmv.svg";

function Home() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getCourses();
            setCourses(data);
        };

        fetchCourses();
    }, []);
    return (
        <div>

            {/* Hero Section */}
            <section className="bg-linear-to-r from-blue-50 to-white">
    <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Learn New Skills
                <span className="text-blue-600"> Online</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
                Access high-quality courses, track your progress,
                and improve your skills with a modern learning experience.
            </p>

            <div className="mt-8 flex gap-4">

                <Link
                    to="/register"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
                >
                    Get Started
                </Link>

                <Link
                    to="/courses"
                    className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                >
                    Explore Courses
                </Link>

            </div>

            {/* SMALL STATS (NEW ADDITION) */}
            <div className="mt-10 flex gap-10 text-gray-600">

                <div>
                    <p className="text-2xl font-bold text-gray-900">100+</p>
                    <p className="text-sm">Courses</p>
                </div>

                <div>
                    <p className="text-2xl font-bold text-gray-900">10k+</p>
                    <p className="text-sm">Students</p>
                </div>

                <div>
                    <p className="text-2xl font-bold text-gray-900">95%</p>
                    <p className="text-sm">Success</p>
                </div>

            </div>

        </div>

        {/* RIGHT SIDE (NEW VISUAL BLOCK) */}
        <div className="hidden lg:block">
            <img
                src={learningImg}
                alt="Learning"
                className="w-105"
            />
        </div>

    </div>
</section>

            {/* Features */}
            <section className="bg-gray-50 py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center mb-12">
                        Why Learn With Us?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-white p-6 rounded-xl border">
                            <h3 className="font-semibold text-lg mb-3">
                                Quality Courses
                            </h3>

                            <p className="text-gray-600">
                                Carefully structured courses designed for practical learning.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border">
                            <h3 className="font-semibold text-lg mb-3">
                                Track Progress
                            </h3>

                            <p className="text-gray-600">
                                Monitor your learning journey with progress tracking.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border">
                            <h3 className="font-semibold text-lg mb-3">
                                Learn Anywhere
                            </h3>

                            <p className="text-gray-600">
                                Access courses anytime from any device.
                            </p>
                        </div>

                    </div>

                </div>

            </section>
            <section className="max-w-7xl mx-auto px-6 py-16">

                <h2 className="text-3xl font-bold text-center mb-10">
                    Popular Courses
                </h2>

                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}                >

                    {courses.map((course) => (

                        <SwiperSlide key={course.id}>

                            <div className="bg-white border rounded-xl p-6 shadow-sm">

                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-40 object-cover rounded-lg"
                                />

                                <h3 className="font-semibold text-lg mt-4">
                                    {course.title}
                                </h3>

                                <p className="text-gray-500 text-sm mt-2">
                                    {course.instructor}
                                </p>

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </section>

            {/* Stats */}
            <section className="py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-3 gap-6 text-center">

                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">
                                15+
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Courses
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">
                                50+
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Lessons
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">
                                100%
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Progress Tracking
                            </p>
                        </div>

                    </div>

                </div>

            </section>
            

        </div>
    );
}

export default Home;