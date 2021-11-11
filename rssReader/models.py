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
    top_banner = models.TextField(null=True, blank=True,  help_text="Scroll Top Banner")
    
    bill_board = models.TextField(null=True, blank=True,  help_text="Between Top and Biznis")
    megaBillboard = models.TextField(null=True, blank=True, help_text="Between TEHNOLOGIJA and Sports")
    
    category_one = models.TextField(null=True, blank=True,  help_text="above Ostale Biznis Size : 728x90")
    category_two = models.TextField(null=True, blank=True,  help_text="above Ostale Sport Size : 728x90")
    
    topSideAD = models.TextField(null=True, blank=True, help_text="Home Page Top Section Side News, Size: 300x250")
    biznisSideAD = models.TextField(null=True, blank=True, help_text="Home Page Biznis Side News, Size: 300x250")
    techSideAD = models.TextField(null=True, blank=True, help_text="Home Page Tech Side News, Size: 300x250")
    
    vijestiSideBar = models.TextField(null=True, blank=True, help_text="Home Page Ostale Vijesti Side Bar, Size: 300x600")
    sportSideBar = models.TextField(null=True, blank=True, help_text="Home Page Ostale Sport Side Bar, Size: 300x600")
    
    category_sideAD = models.TextField(null=True, blank=True,  help_text="Category Side AD, Size: 300x250")
    source_sideAD = models.TextField(null=True, blank=True, help_text="Source Side AD, Size: 300x250")
    
    sidebarAD = models.TextField(null=True, blank=True, help_text="Category & Source Page Side Bar, Size: 300x600")
    access_name = models.CharField(max_length=32, default="admin")


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
    