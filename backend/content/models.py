from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
class ArticleModel(models.Model):
    title = models.CharField(max_length = 500, null = True)
    date = models.CharField(max_length = 20, null=True)
    session =  models.CharField(max_length = 20, null = True)
    first = models.TextField(null = True)
    second = models.TextField(null = True)
    third = models.TextField(null = True)
    fourth = models.TextField(null = True)
    url = models.URLField(null = True)
    photo = models.ImageField(upload_to='pics', null = True)



    