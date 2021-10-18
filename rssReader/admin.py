from django.contrib import admin

from .models import Feed, CustomUser, News

# Register your models here.

class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'source', 'category',) 


admin.site.register(Feed)
admin.site.register(News, NewsAdmin)
admin.site.register(CustomUser)
