from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Course, Enrollment,Progress, Lesson
from .serializers import CourseSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.db.models import Count

class DashboardStatsView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):

        total_courses = Course.objects.count()

        enrolled_courses = Enrollment.objects.filter(
            student=request.user
        ).count()

        completed_lessons = Progress.objects.filter(
            student=request.user,
            completed=True
        ).count()

        total_lessons = Lesson.objects.filter(
            course__enrollment__student=request.user
        ).count()

        progress_percentage = 0

        if total_lessons > 0:
            progress_percentage = int(
                (completed_lessons / total_lessons) * 100
            )

        return Response({
            "total_courses": total_courses,
            "enrolled_courses": enrolled_courses,
            "completed_lessons": completed_lessons,
            "progress": progress_percentage
        })

class CourseProgressView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):

        course = Course.objects.get(id=pk)

        total_lessons = course.lessons.count()

        completed_progress = Progress.objects.filter(
            student=request.user,
            lesson__course=course,
            completed=True
        )

        completed_lessons = completed_progress.count()

        completed_lesson_ids = list(
            completed_progress.values_list("lesson_id", flat=True)
        )

        percentage = 0

        if total_lessons > 0:
            percentage = int(
                (completed_lessons / total_lessons) * 100
            )

        return Response({
            "total_lessons": total_lessons,
            "completed_lessons": completed_lessons,
            "completed_lesson_ids": completed_lesson_ids,
            "progress": percentage
        })

class CourseListView(ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CourseDetailView(RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class EnrollCourseView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):

        course = Course.objects.get(id=pk)

        enrollment, created = Enrollment.objects.get_or_create(
            student=request.user,
            course=course
        )

        if not created:
            return Response(
                {"message": "Already Enrolled"},
                status=status.HTTP_400_BAD_REQUEST
            )

        return Response(
            {"message": "Enrollment Successful"},
            status=status.HTTP_201_CREATED
        )

class CompleteLessonView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):

        lesson = Lesson.objects.get(id=pk)

        Progress.objects.update_or_create(
            student=request.user,
            lesson=lesson,
            defaults={"completed": True}
        )

        return Response(
            {"message": "Lesson Completed"},
            status=status.HTTP_200_OK
        )

class MyCoursesView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):

        enrollments = Enrollment.objects.filter(
            student=request.user
        )

        courses = [
            enrollment.course
            for enrollment in enrollments
        ]

        serializer = CourseSerializer(
            courses,
            many=True
        )

        return Response(serializer.data)