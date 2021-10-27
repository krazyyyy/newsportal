from django.db import models
from django.contrib.auth.models import AbstractUser




# Create your models here.
class CustomUser(AbstractUser):
    pass

class Feed(models.Model):
    website_url = models.CharField(max_length=228)
    source = models.CharField(max_length=228, null=True, blank=True)
    category = models.CharField(max_length=228, null=True, blank=True)

    def __str__(self):
        return f"{self.source}"

class News(models.Model):
    title = models.CharField(max_length=228)
    link = models.CharField(max_length=228)
    category = models.CharField(max_length=228, null=True, blank=True)
    img = models.CharField(max_length=228)
    pub_date = models.CharField(max_length=228, null=True, blank=True)
    source = models.CharField(max_length=228, null=True, blank=True)
    time = models.DateTimeField(auto_now_add=True)