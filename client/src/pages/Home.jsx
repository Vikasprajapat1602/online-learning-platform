import { Link } from "react-router-dom";

function Home() {
    return (
        <div>

            {/* Hero Section */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="max-w-3xl">

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
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Get Started
                            </Link>

                            <Link
                                to="/courses"
                                className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
                            >
                                Explore Courses
                            </Link>

                        </div>

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

            {/* Stats */}
            <section className="py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-3 gap-6 text-center">

                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">
                                5+
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Courses
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">
                                20+
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