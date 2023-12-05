import os
from django.db import models
from django.urls import reverse

from home.models import CustomUser

class Category_works(models.Model):
    name = models.CharField(max_length=100, db_index=True, verbose_name='Название категории')
 
    class Meta:
        verbose_name = 'Категория работ'
        verbose_name_plural = 'Категории работ'
        ordering = ['name']

    def __str__(self):
        return self.name

class Works(models.Model):
    title = models.CharField(max_length=255, verbose_name='Заголовок')
    object = models.CharField(max_length=255, verbose_name='Обьект')
    photo = models.ImageField(upload_to="home/img/%Y/%m/%d/", blank = True, verbose_name='Главное фото')
    short_description = models.TextField(max_length=255, blank=True, verbose_name='Краткое описаниеписание')
    content = models.TextField(blank=True, verbose_name='Тема стстьи')
    time_create = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    time_update = models.DateTimeField(auto_now=True, verbose_name='Дата изменения')
    num_top = models.IntegerField(default=0, verbose_name='Номер в топе')
    is_published = models.BooleanField(default=True, verbose_name='Опубликована')
    author = models.ForeignKey(CustomUser, related_name='author_create_works', editable=False, on_delete=models.CASCADE, verbose_name='Автор')
    author_last_update = models.ForeignKey(CustomUser,blank = True, null=True, related_name='author_update_works', editable=False, on_delete=models.CASCADE, verbose_name='Автор изменения')
    cat = models.ForeignKey(Category_works, on_delete=models.PROTECT, verbose_name='Категория работ')
    contents_style  =  models.TextField(null=True, blank=True, verbose_name='Стили контента')
    contents_script = models.TextField(null=True, blank=True, verbose_name='Скрипт контента')
    contents = models.TextField(null=True, blank=True, verbose_name='Дополнительный контент')
    
    class Meta:
        verbose_name = 'Наша работа'
        verbose_name_plural = 'Наши работы'
        ordering = ['time_create', 'title']

    def __str__(self):
        return self.title

