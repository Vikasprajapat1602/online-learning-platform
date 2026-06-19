import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    getCourseById,
    enrollCourse,
    completeLesson,
    getCourseProgress
} from "../services/courseService";

function CourseDetails() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [course, setCourse] = useState(null);
    const [progress, setProgress] = useState(0);
    const [completedLessons, setCompletedLessons] = useState([]);

    // ---------------- Fetch Course ----------------
    useEffect(() => {

        const fetchCourse = async () => {
            try {
                const data = await getCourseById(id);
                console.log("Course Detail:", data);
                setCourse(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCourse();

    }, [id]);

    // ---------------- Fetch Progress ----------------
    const fetchProgress = useCallback(async () => {

        try {
            const data = await getCourseProgress(id);

            setProgress(data.progress);
            setCompletedLessons(data.completed_lesson_ids);

        } catch (error) {
            console.log(error);
        }

    }, [id]);

    useEffect(() => {
        fetchProgress();
    }, [fetchProgress]);

    // ---------------- Enroll ----------------
    const handleEnroll = async () => {

        try {
            const res = await enrollCourse(id);
            alert(res.message);
            navigate("/my-courses");
            fetchProgress();
        } catch (error) {
            alert(error.response?.data?.message || "Enrollment Failed");
        }

    };

    // ---------------- Complete Lesson ----------------
    const handleComplete = async (lessonId) => {

        try {
            const res = await completeLesson(lessonId);
            alert(res.message);
            fetchProgress();
        } catch (error) {
            console.log(error);
        }

    };

    if (!course) {
        return (
            <div className="p-10 text-gray-500">
                Loading course...
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">

            {/* HERO SECTION */}
            <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">

                <div className="h-72 bg-gray-100">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-8">

                    <h1 className="text-4xl font-bold text-gray-800 mb-3">
                        {course.title}
                    </h1>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {course.description}
                    </p>

                    {!course.is_enrolled && (
                        <button
                            onClick={handleEnroll}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition "
                        >
                            Enroll Now
                        </button>
                    )}

                </div>

            </div>

            {/* PROGRESS SECTION */}
            {course.is_enrolled && (
                <div className="mt-8 bg-white border rounded-2xl p-6 shadow-sm">

                    <div className="flex justify-between items-center mb-3">

                        <h2 className="text-lg font-semibold text-gray-800">
                            Your Progress
                        </h2>

                        <span className="text-blue-600 font-semibold">
                            {progress}%
                        </span>

                    </div>

                    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                        <div
                            className="bg-blue-600 h-3 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                </div>
            )}



            {/* LESSONS SECTION */}

            <div className="mt-10">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Lessons
                </h2>

                <div className="space-y-4">

                    {course.lessons.map((lesson) => {

                        const isDone = completedLessons.includes(lesson.id);

                        return (
                            <div
                                key={lesson.id}
                                className="bg-white border rounded-xl p-5 flex justify-between items-center shadow-sm hover:shadow-md transition"
                            >

                                {/* Left */}
                                <div>

                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {lesson.title}
                                    </h3>

                                    <a
                                        href={lesson.video_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        Watch Video
                                    </a>

                                </div>

                                {/* Right */}
                                {/* Right */}
                                <div>

                                    {!course.is_enrolled ? (

                                        <span className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg text-sm">
                                            Enroll to Access
                                        </span>

                                    ) : isDone ? (

                                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm">
                                            Completed
                                        </span>

                                    ) : (

                                        <button
                                            onClick={() => handleComplete(lesson.id)}
                                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                                        >
                                            Mark Complete
                                        </button>

                                    )}

                                </div>

                            </div>
                        );

                    })}

                </div>

            </div>


        </div>
    );
}

export default CourseDetails;