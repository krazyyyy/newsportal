from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("category/<str:pk>", views.categoryPage, name="category"),
    path("source/<str:pk>", views.sourcePage, name="source"),
    path("post/<str:pk>", views.prvi, name="newsprvi"),
    path("news/<str:pk>/<str:name>", views.redirectPage, name="redirectPage" )
]