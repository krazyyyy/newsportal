from django.shortcuts import render

from rssReader.models import News, PRVINews

# Create your views here.
def index(request):
    news = News.objects.all().order_by('?')[:5]
    return render(request, 'frontend/index.html', {
        "cars_news" : news
    })

def categoryPage(request, pk):
    return render(request, 'frontend/category.html', {"main_item" : pk})

def sourcePage(request, pk):
    return render(request, 'frontend/source.html', {"main_item" : pk})

def prvi(request, pk):
    news = PRVINews.objects.get(id=pk)
    return render(request, 'frontend/single.html', {
        "news" : news
    })