from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.
class ArticleModel(models.Model):
    title = models.CharField(max_length = 500, null = True)
    date = models.DateTimeField(null=True)
    session =  models.CharField(max_length = 20, null = True)
    first = models.TextField(null = True)
    second = models.TextField(null = True)
    third = models.TextField(null = True)
    fourth = models.TextField(null = True)

class StoredArticle(models.Model):
    title = models.CharField(max_length = 500, null = True)
    date = models.DateTimeField(null=True)
    summary = models.TextField(null = True)

class Image(models.Model):
    article = models.ForeignKey(StoredArticle, on_delete = models.CASCADE, null = True)
    photo = models.ImageField(upload_to='pics')



    