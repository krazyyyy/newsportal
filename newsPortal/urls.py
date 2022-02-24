"""newsPortal URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import  url
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from django.contrib.sitemaps import GenericSitemap 
from django.contrib.sitemaps.views import sitemap 
from django.core.paginator import Paginator
from django.urls import reverse

from rssReader.models import News
from django.contrib.sitemaps import views as sitemaps_views
from django.conf.urls import url


info_dict = {
    "queryset" : News.objects.all(),
}





urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('rss/', include('rssReader.urls')),
     path('site_map.xml', sitemap, # new
    {'sitemaps': {'news': GenericSitemap(info_dict, priority=0.6)}},
        name='django.contrib.sitemaps.views.sitemap'),
    #   url(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),
    # url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT, 'show_indexes': True}),
]


handler404 = 'frontend.views.view_404' 
