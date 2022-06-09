from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path('health', views.health, name='health'),
    url(r'^courses$', views.courses_list, name='courses_list'),
]
