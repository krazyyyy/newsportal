from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("category/<str:pk>", views.categoryPage, name="category")
]