from django.db import models
from django.contrib.auth.models import AbstractUser
from ckeditor.fields import RichTextField



# Create your models here.
class CustomUser(AbstractUser):
    pass

class Feed(models.Model):
    website_url = models.CharField(max_length=228)
    source = models.CharField(max_length=228, null=True, blank=True)
    category = models.CharField(max_length=228, null=True, blank=True)

    def __str__(self):
        return f"{self.source}"

class PRVINews(models.Model):
    title = models.CharField(max_length=228)
    category = models.CharField(max_length=228, null=True, blank=True)
    img = models.CharField(max_length=228)
    pub_date = models.CharField(max_length=228, null=True, blank=True)
    source = models.CharField(max_length=228, null=True, blank=True)
    news_context = RichTextField()
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title}"

class ADsCode(models.Model):
    top_banner = models.TextField(null=True, blank=True)
    bill_board = models.TextField(null=True, blank=True)
    category_one = models.TextField(null=True, blank=True)
    category_two = models.TextField(null=True, blank=True)
    category_three = models.TextField(null=True, blank=True)
    home_sideAD = models.TextField(null=True, blank=True)
    category_sideAD = models.TextField(null=True, blank=True)
    source_sideAD = models.TextField(null=True, blank=True)
    access_name = models.CharField(max_length=32, default="admin")
    sidebarAD = models.TextField(null=True, blank=True)


    def __str__(self):
        return "Banner AD Code"

class News(models.Model):
    title = models.CharField(max_length=228)
    link = models.CharField(max_length=228)
    category = models.CharField(max_length=228, null=True, blank=True)
    img = models.CharField(max_length=228)
    pub_date = models.CharField(max_length=228, null=True, blank=True)
    source = models.CharField(max_length=228, null=True, blank=True)
    time = models.DateTimeField(auto_now_add=True)

class footerHTML(models.Model):
    section_one = RichTextField(null=True, blank=True)
    section_two = RichTextField(null=True, blank=True)
    section_three = RichTextField(null=True, blank=True)
    access_name = models.CharField(max_length=128, default="admin")
    