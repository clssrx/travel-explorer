from django.shortcuts import get_object_or_404

from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Experience
from .serializer import ExperienceSerializer


class ExperienceListView(APIView):
    def get(self, request):
        experiences = Experience.objects.all().order_by('id')
        serializer = ExperienceSerializer(experiences, many=True)
        return Response(serializer.data)


class ExperienceDetailView(APIView):
    def get(self, request, pk):
        experience = get_object_or_404(Experience, pk=pk)
        serializer = ExperienceSerializer(experience)
        return Response(serializer.data)
