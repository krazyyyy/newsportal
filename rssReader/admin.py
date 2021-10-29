from django.contrib import admin

from .models import Feed, CustomUser, News, ADsCode, PRVINews

# Register your models here.

class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'source', 'category',) 
    search_fields = ['title', 'source', 'category']

    class Meta:
        verbose_name_plural = "News"

class FeedAdmin(admin.ModelAdmin):
    list_display = ('source', 'website_url', 'category',)
    search_fields = ['source']


admin.site.register(Feed, FeedAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(CustomUser)
admin.site.register(ADsCode)
admin.site.register(PRVINews)
