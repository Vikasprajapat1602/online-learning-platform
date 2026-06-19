from rest_framework import serializers
from .models import Course, Enrollment, Lesson, Progress


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = "__all__"


class CourseSerializer(serializers.ModelSerializer):

    lessons = LessonSerializer(
        many=True,
        read_only=True
    )

    is_enrolled = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = "__all__"

    def get_is_enrolled(self, obj):

        request = self.context.get("request")

        if not request or not request.user.is_authenticated:
            return False

        return Enrollment.objects.filter(
            student=request.user,
            course=obj
        ).exists()