from django.contrib import admin

import requests
from bs4 import BeautifulSoup

from .models import Feed, CustomUser, News, ADsCode, footerHTML, PRVINews

# Register your models here.

class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'source', 'category',) 
    search_fields = ['title', 'source', 'category']

    class Meta:
        verbose_name_plural = "News"

class FeedAdmin(admin.ModelAdmin):
    list_display = ('source', 'website_url', 'category',)
    search_fields = ['source']

    def save_model(self, request, obj, form, change):
        url = requests.get(obj.website_url)
        li = []
        insert_list = []
        soup = BeautifulSoup(url.content, 'xml')
        entries = soup.find_all('item')
        for i in entries:
            try:
                data = dict()
                chk = News.objects.filter(link__iexact=i.link.text)
                try:
                    img = i.enclosure['url'] 
                except:
                    try:
                        img = i.find("media:content")['url']
                    except:
                        try:
                            img = i.img.text
                        except:
                            try:
                                t = (i.find('description').text)
                                sp = BeautifulSoup(t, 'html5lib')
                                img = (sp.find("img")['src'])
                            except:
                                t = (i.find('content').text)
                                sp = BeautifulSoup(t, 'html5lib')
                                img = (sp.find("img")['src'])
                try:
                    category = i.category.text
                except:
                    category = obj.category
                pub_ = i.pubDate.text.replace("+0000", "")
                if not chk.exists():
                    insert_list.append(News(title=i.title.text, link=i.link.text, category=category, source=obj.source, pub_date=pub_, img=img))
                data['title'] = i.title.text
                data['link'] = i.link.text
                data['category'] = category
                data['img'] = img
                li.append(data)
            except:
                pass
        News.objects.bulk_create(insert_list)
        obj.save()
        super(FeedAdmin, self).save_model(request, obj, form, change)

admin.site.register(Feed, FeedAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(CustomUser)
admin.site.register(ADsCode)
admin.site.register(PRVINews)
admin.site.register(footerHTML)
