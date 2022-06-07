from http.client import HTTPResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpRequest
# Create your views here.


def healtCheck(request):
    if request.path == "/health":
        return HTTPResponse("OK")

    return HttpResponse.status_code
