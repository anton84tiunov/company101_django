from django import forms
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.db import models
from django_json_widget.widgets import JSONEditorWidget
from django.contrib.auth.admin import UserAdmin
from django.utils.safestring import mark_safe

from ckeditor_uploader.widgets import CKEditorUploadingWidget

from home.models import CustomUser
from .models import  Works, Category_works

class Category_worksAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('id', 'name')

class WorksAdminForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget())

    class Meta:
        model = Works
        fields = '__all__'


@admin.register(Works)
class NewsAdmin(admin.ModelAdmin):
    form = WorksAdminForm
    formfield_overrides = {
        # fields.JSONField: {'widget': JSONEditorWidget}, # if django < 3.1
        models.JSONField: {'widget': JSONEditorWidget},
    }

    fields = ['title', 'photo', 'preview', 'short_description', 'cat', 'content', 'num_top', 'is_published', 'contents', 'contents_style', 'contents_script']
    list_display = ('id', 'title','preview' , 'author', 'time_create', 'author_last_update', 'time_update','num_top', 'is_published')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'content', 'author', 'time_create', 'author_last_update', 'time_update','num_top', 'is_published')
    list_editable = ('is_published', 'num_top',)
    readonly_fields = ["preview"]
    
    def preview(self, obj):
        return mark_safe(f'<img src="{obj.photo.url}" style="max-height: 50px;">')


    def save_model(self, request, obj, form, change):
        """
        Переопределяем метод сохранения модели
        """
        if not change: # Проверяем что запись только создаётся
            obj.author = request.user # Присваеваем полю автор текущего пользователя
        else:
            obj.author_last_update = request.user

        super(NewsAdmin, self).save_model(
            request=request,
            obj=obj,
            form=form,
            change=change
        )

admin.site.register(Category_works, Category_worksAdmin)
