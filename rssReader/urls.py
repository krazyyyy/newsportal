from django.urls import path

from . import views

urlpatterns = [
    path("feed", views.getNews, name="feed"),
    path("news", views.renderNews, name="news"),
    path("bycategory/<str:category>", views.renderByCategory, name="bycategory"),
    path("randomNews/<int:random_number>", views.randomNews, name="randomNews"),
    path("randomNewsCategory/<int:random_number>/<str:category>", views.randomNewsCategory, name="randomNewsCategory"),
    path("getNewsCategory/<int:random_number>/<str:category>", views.getNewsCategory, name="getNewsCategory"),
    path("newsCategory/<str:category>", views.newsCategory, name="nameCategory"),
    path("newsSource/<str:source>", views.newsSource, name="nameSource"),
    path("latest/<int:random_number>", views.latestNews, name="latestNews"),
    path("count/<str:pk>", views.countQuery, name="count"),
]