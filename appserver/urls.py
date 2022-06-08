from django.urls import path
from . import views

urlpatterns = [
    path('help', views.help, name='help'),
    path('courses', views.courses, name='courses_title'),
]
