from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')

def categoryPage(request, pk):
    return render(request, 'frontend/category.html', {"main_item" : pk})