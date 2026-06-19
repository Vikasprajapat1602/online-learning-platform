import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/courses/";

export const getCourses = async () => {
  const response = await axios.get(API_URL);
  console.log("Courses API:", response.data);
  return response.data;
};

export const getCourseById = async (id) => {

  const token = localStorage.getItem("token");

  console.log("Fetching URL:", `${API_URL}${id}/`);

  const response = await axios.get(
    `${API_URL}${id}/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
// export const getCourseById = async (id) => {
//   const response = await axios.get(`${API_URL}/${id}/`);
//   return response.data;
// };

export const enrollCourse = async (courseId) => {
  const token = localStorage.getItem("token");

  const response = await axios.post(
    `http://127.0.0.1:8000/api/courses/${courseId}/enroll/`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const completeLesson = async (lessonId) => {

  const token = localStorage.getItem("token");

  const response = await axios.post(
    `http://127.0.0.1:8000/api/courses/lesson/${lessonId}/complete/`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
export const getCourseProgress = async (courseId) => {

  const token = localStorage.getItem("token");

  const response = await axios.get(
    `http://127.0.0.1:8000/api/courses/${courseId}/progress/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


export const getMyCourses = async () => {

  const token = localStorage.getItem("token");

  const response = await axios.get(
    "http://127.0.0.1:8000/api/courses/my-courses/",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getDashboardStats = async () => {

  const token = localStorage.getItem("token");

  const response = await axios.get(
    "http://127.0.0.1:8000/api/courses/dashboard/",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};