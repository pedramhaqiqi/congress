from django.contrib import admin
from django.urls import path
from . import views



urlpatterns = [
    path('hearing/', views.RetrieveArticle.as_view())
]