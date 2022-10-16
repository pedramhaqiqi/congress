from rest_framework import serializers
from .models import *


class RetArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleModel
        fields = ["title", "date", "session", "url"]


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleModel
        fields = ["title", 
                  "date",
                  "session",
                  "url",
                  "photo"]
