from django.http import HttpResponse
from django.shortcuts import render
from django.http.response import JsonResponse
from appserver.models import Courses
from django.core import serializers
# Create your views here.


def health(request):
    return HttpResponse('OK')


def courses_list(request):
    if request.method == 'GET':
        #courses = serializers.serialize('json', Courses.objects.all())
        #courses = Courses.objects.all()
        title = request.GET.get('title', None)
        print(title)
        return JsonResponse({'title': title})
        # return HttpResponse(courses)
        #title = request.query_params.get('title', None)
        # if title is not None:
        #    courses = courses.filter(title_icontains=title)
        # return JsonResponse({'title': courses})
