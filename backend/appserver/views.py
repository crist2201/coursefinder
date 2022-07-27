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
        page=request.GET.get('page',1)
        [count,udemy] = udemy_courses(search_title=title, page=page, page_size=6)
        courses = {'count':count, 'data': udemy}
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
    count=courses['count']
    data = []

    for item in courses['results']:
        if search_title in item['title'].lower():
            clean = order_data(item, 'Udemy')
            data.append(clean)
    return count,data

def order_data(data, platform):

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
