from django.contrib import admin
from .models import Experience


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'category', 'price', 'rating')
    search_fields = ('title', 'location', 'category')
    list_filter = ('category',)
