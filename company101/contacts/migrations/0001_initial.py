# Generated by Django 4.2.6 on 2023-11-26 14:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category_contacts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=100, verbose_name='Название категории')),
            ],
            options={
                'verbose_name': 'Категория контактов',
                'verbose_name_plural': 'Категории контактов',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Contacts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_title', models.CharField(max_length=255, verbose_name='Должность')),
                ('initials', models.CharField(max_length=255, verbose_name='Инициалы')),
                ('phone', models.CharField(blank=True, max_length=255, null=True, verbose_name='Номер телефона')),
                ('email', models.EmailField(blank=True, max_length=255, null=True, verbose_name='электронная почта')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Описание')),
                ('time_create', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
                ('time_update', models.DateTimeField(auto_now=True, verbose_name='Дата изменения')),
                ('is_published', models.BooleanField(default=True, verbose_name='Опубликована')),
                ('author', models.ForeignKey(editable=False, on_delete=django.db.models.deletion.CASCADE, related_name='author_create_contacts', to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
                ('author_last_update', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='author_update_contacts', to=settings.AUTH_USER_MODEL, verbose_name='Автор изменения')),
                ('cat', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='contacts.category_contacts', verbose_name='Категория контакта')),
            ],
            options={
                'verbose_name': 'Контакт',
                'verbose_name_plural': 'Контакты',
                'ordering': ['job_title', 'initials', 'description'],
            },
        ),
    ]
