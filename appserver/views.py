from django.http import HttpResponse
from django.shortcuts import render
# Create your views here.


def help(request):
    return HttpResponse('OK')


def courses(request):
    return HttpResponse('course title')
