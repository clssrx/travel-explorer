from django.urls import path

from .views import ExperienceDetailView, ExperienceListView

urlpatterns = [
  path('experiences/', ExperienceListView.as_view(), name='experience-list'),
  path('experiences/<int:pk>/', ExperienceDetailView.as_view(), name='experience-detail')
]