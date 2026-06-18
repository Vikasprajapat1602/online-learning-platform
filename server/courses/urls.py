from django.urls import path
from .views import (
    CompleteLessonView,
    CourseListView,
    CourseDetailView,
    DashboardStatsView,
    EnrollCourseView,
    CourseProgressView,
    MyCoursesView,
)

urlpatterns = [
    path("", CourseListView.as_view(), name="course-list"),
    path("<int:pk>/", CourseDetailView.as_view(), name="course-detail"),
    path("<int:pk>/enroll/", EnrollCourseView.as_view(), name="course-enroll"),
    path(
        "lesson/<int:pk>/complete/",
        CompleteLessonView.as_view(),
        name="complete-lesson",
    ),
    path("<int:pk>/progress/", CourseProgressView.as_view(), name="course-progress"),
    path("my-courses/", MyCoursesView.as_view(), name="my-courses"),
    path("dashboard/", DashboardStatsView.as_view(), name="dashboard"),
]
