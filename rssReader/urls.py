from django.urls import path

from . import views

urlpatterns = [
    path("feed", views.getNews, name="feed"),
    path("news", views.renderNews, name="news"),
    path("bycategory/<str:category>", views.renderByCategory, name="bycategory")
]