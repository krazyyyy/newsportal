from django.urls import path

from . import views

urlpatterns = [
    path("feed", views.getNews, name="feed"),
    path("news", views.renderNews, name="news"),
    path("bycategory/<str:category>", views.renderByCategory, name="bycategory"),
    path("randomNews/<int:random_number>", views.randomNews, name="randomNews"),
    path("randomNewsCategory/<int:random_number>/<str:category>", views.randomNewsCategory, name="randomNewsCategory"),
    path("newsCategory/<str:category>", views.newsCategory, name="nameCategory")
]