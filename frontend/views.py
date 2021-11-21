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

def redirectPage(request, pk, name):
    news = News.objects.get(id=pk)
    return render(request, 'frontend/redirect.html', {
        "news" : news
    })


from django.shortcuts import redirect

def view_404(request, exception=None):
    # make a redirect to homepage
    # you can use the name of url or just the plain link
    return redirect('/') # or redirect('name-of-index-url')