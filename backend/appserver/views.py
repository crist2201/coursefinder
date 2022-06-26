
from distutils.command.clean import clean
from turtle import title
from django.http import HttpResponse
from django.shortcuts import render
from django.http.response import JsonResponse
import requests

# Create your views here.


def health(request):
    return HttpResponse('OK')


def courses_list(request):
    if request.method == 'GET':
        title = request.GET.get('title', None)
        udemy = udemy_courses(search_title=title, page=1, page_size=12)
        edx = edx_courses(search_title=title, page=1, page_size=12)
        courses = {'data': udemy+edx}
        return JsonResponse(courses)


def udemy_courses(search_title, page, page_size):
    url = 'https://www.udemy.com/api-2.0/courses'
    client_id = 'Y5JE1ujYlCvHJtCwaUbMg2FS5a7IkUbbnMpttNZw'
    client_secret = 'tR4S9whpnnaUCJ93wf26OFlaYXgNobzDiox8IfLDonHuYUHotltl4xOAF5e071URoyJD3hokCnkQ49IvUwvnG6fphVPxLV75zLUB2ArcFQxM3w1DP2TnE6xkKZ0TqrCx'
    auth = (client_id, client_secret)
    headers = {
        'Content-Type': 'application/json;charset=utf-8'
    }
    params = {
        'page': page,
        'page_size': page_size,
        'search': search_title,
        'fields[course]': 'title,headline,avg_rating,price,url,num_subscribers,image_50x50,visible_instructors',
    }

    response = requests.get(url, auth=auth, headers=headers, params=params)
    courses = response.json()
    search_title = search_title.lower()
    data = []

    for item in courses['results']:
        if search_title in item['title'].lower():
            # print(sort_data(item))
            clean = sort_data(item, 'Udemy')
            data.append(clean)
    return data


def edx_courses(search_title, page, page_size):
    url = 'https://www.udemy.com/api-2.0/courses'
    client_id = 'Y5JE1ujYlCvHJtCwaUbMg2FS5a7IkUbbnMpttNZw'
    client_secret = 'tR4S9whpnnaUCJ93wf26OFlaYXgNobzDiox8IfLDonHuYUHotltl4xOAF5e071URoyJD3hokCnkQ49IvUwvnG6fphVPxLV75zLUB2ArcFQxM3w1DP2TnE6xkKZ0TqrCx'
    auth = (client_id, client_secret)
    headers = {
        'Content-Type': 'application/json;charset=utf-8'
    }
    params = {
        'page': page,
        'page_size': page_size,
        'search': search_title,
        'fields[course]': 'title,headline,avg_rating,price,url,num_subscribers,image_50x50,visible_instructors',
    }

    response = requests.get(url, auth=auth, headers=headers, params=params)
    courses = response.json()
    search_title = search_title.lower()
    data = []

    for item in courses['results']:
        if search_title in item['title'].lower():
            clean = sort_data(item, 'Edx')
            data.append(clean)
    return data


def sort_data(data, platform):

    parameters = {
        'id': data['id'],
        'title': data['title'],
        'description': data['headline'],
        'rating': data['avg_rating'],
        'url': data['url'],
        'price': data['price'],
        'suscribers': data['num_subscribers'],
        'instructor': data['visible_instructors'][0]['title'],
        'url_instructor': data['visible_instructors'][0]['url'],
        'platform': platform,
        'image': data['image_50x50'],
    }
    return parameters
