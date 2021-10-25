from django.shortcuts import render
from django.http import JsonResponse
from django.forms import model_to_dict
from django.core.paginator import Paginator

from django.views.decorators.csrf import csrf_exempt
from bs4 import BeautifulSoup
import requests
import json

from .models import Feed, News

# Create your views here.
def getNews(request):
    feeds = Feed.objects.all()
    li = []
    insert_list = []
    
    for feed in feeds:
        url = requests.get(feed.website_url)

        soup = BeautifulSoup(url.content, 'xml')
        entries = soup.find_all('item')
        for i in entries:
            try:
                data = dict()
                chk = News.objects.filter(link=i.link.text)
                try:
                    img = i.enclosure['url'] 
                except:
                    try:
                        img = i.find("media:content")['url']
                    except:
                        img = i.img.text
                try:
                    category = i.category.text
                except:
                    category = feed.category
                pub_ = i.pubDate.text.replace("+0000", "")
                if not chk.exists():
                    insert_list.append(News(title=i.title.text, link=i.link.text, category=category, source=feed.source, pub_date=pub_, img=img))
                data['title'] = i.title.text
                data['link'] = i.link.text
                data['category'] = category
                data['img'] = img
                li.append(data)
            except:
                pass
    News.objects.bulk_create(insert_list)
    # feed = dict(feed=li)
    return JsonResponse({"message" : "success"})

def renderNews(request):
    news = News.objects.all()
    li = []
    for new in news:
        n = model_to_dict(new)
        li.append(n)
    feed = dict(feed=li)
    return JsonResponse(feed)


def renderByCategory(request, category):
    news = News.objects.filter(category__iexact=category)
    li = []
    for new in news:
        n = model_to_dict(new)
        li.append(n)
    feed = dict(feed=li)
    return JsonResponse(feed)

def randomNews(request, random_number):
    news = News.objects.all().order_by('?')[:random_number]
    li = []
    for new in news:
        n = model_to_dict(new)
        li.append(n)
    feed = dict(feed=li)
    return JsonResponse(feed)

def randomNewsCategory(request, random_number, category):
    news = News.objects.filter(category__iexact=category).order_by('?')[:random_number]
    li = []
    for new in news:
        n = model_to_dict(new)
        li.append(n)
    feed = dict(feed=li)
    return JsonResponse(feed)

@csrf_exempt
def newsCategory(request, category):
    data = json.loads(request.body)
    news = News.objects.filter(category__iexact=category)
    li = []
    paginator = Paginator(news, 20)
    page_number = data['page_no']
    news_pag = paginator.get_page(page_number)

    for new in news_pag:
        n = model_to_dict(new)
        li.append(n)
    feed = dict(feed=li, next=news_pag.has_next())
    return JsonResponse(feed)