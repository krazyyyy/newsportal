from django.shortcuts import render

from rssReader.models import News

# Create your views here.
def index(request):
    news = News.objects.all().order_by('?')[:5]
    return render(request, 'frontend/index.html', {
        "cars_news" : news
    })

def categoryPage(request, pk):
    return render(request, 'frontend/category.html', {"main_item" : pk})