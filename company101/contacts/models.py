from django.db import models

from home.models import CustomUser

class Category_contacts(models.Model):
    name = models.CharField(max_length=100, db_index=True, verbose_name='Название категории')
 
    class Meta:
        verbose_name = 'Категория контактов'
        verbose_name_plural = 'Категории контактов'
        ordering = ['name']

    def __str__(self):
        return self.name

class Contacts(models.Model):
    job_title = models.CharField(max_length=255, verbose_name='Должность')
    initials = models.CharField(max_length=255, verbose_name='Инициалы')
    phone = models.CharField(null=True, blank=True, max_length=255, verbose_name='Номер телефона')
    email = models.CharField(null=True, blank=True, max_length=255, verbose_name='электронная почта')
    description  =  models.TextField(null=True, blank=True, max_length=255, verbose_name='Описание')
    time_create = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    time_update = models.DateTimeField(auto_now=True, verbose_name='Дата изменения')
    is_published = models.BooleanField(default=True, verbose_name='Опубликована')
    author = models.ForeignKey(CustomUser, related_name='author_create_contacts', editable=False, on_delete=models.CASCADE, verbose_name='Автор')
    author_last_update = models.ForeignKey(CustomUser,blank = True, null=True, related_name='author_update_contacts', editable=False, on_delete=models.CASCADE, verbose_name='Автор изменения')
    cat = models.ForeignKey(Category_contacts, on_delete=models.PROTECT, verbose_name='Категория контакта')

    
    class Meta:
            verbose_name = 'Контакт'
            verbose_name_plural = 'Контакты'
            ordering = ['job_title', 'initials', 'description']

    def __str__(self):
        return self.job_title
