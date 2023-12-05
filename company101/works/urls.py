from django.urls import path, re_path
 
from .views import *
 
urlpatterns = [
    path('', index),
    path('work/<int:works_id>/', works),


]
