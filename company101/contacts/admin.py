from django import forms
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.db import models
from django_json_widget.widgets import JSONEditorWidget
from django.contrib.auth.admin import UserAdmin
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django.utils.safestring import mark_safe

# from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import  Contacts, Category_contacts


class Category_contactsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('id', 'name')


class ContactsAdminForm(forms.ModelForm):
    description = forms.CharField(widget=CKEditorUploadingWidget())
    
    class Meta:
        model = Contacts
        fields = '__all__'


@admin.register(Contacts)
class ContactsAdmin(admin.ModelAdmin):
    form = ContactsAdminForm
    formfield_overrides = {
        # fields.JSONField: {'widget': JSONEditorWidget}, # if django < 3.1
        models.JSONField: {'widget': JSONEditorWidget},
    }

#    job_title initials  phone email description s_published cat




    fields = ['job_title', 'initials', 'phone', 'email', 'description', 'is_published', 'cat']
    list_display = ('id','job_title', 'initials', 'phone', 'email', 'description', 'author', 'time_create', 'author_last_update', 'time_update', 'is_published', 'cat')
    list_display_links = ('id', 'job_title', 'initials')
    search_fields = ('job_title', 'initials', 'phone', 'email', 'description', 'author', 'time_create', 'author_last_update', 'time_update', 'is_published', 'cat')
    list_editable = ('is_published',)

    def save_model(self, request, obj, form, change):
        """
        Переопределяем метод сохранения модели
        """
        if not change: # Проверяем что запись только создаётся
            obj.author = request.user # Присваеваем полю автор текущего пользователя
        else:
            obj.author_last_update = request.user

        super(ContactsAdmin, self).save_model(
            request=request,
            obj=obj,
            form=form,
            change=change
        )

admin.site.register(Category_contacts, Category_contactsAdmin)
