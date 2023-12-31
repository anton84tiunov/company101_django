# Generated by Django 4.2.6 on 2023-11-26 11:20

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
            name='Category_works',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=100, verbose_name='Название категории')),
            ],
            options={
                'verbose_name': 'Категория работ',
                'verbose_name_plural': 'Категории работ',
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Works',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Заголовок')),
                ('object', models.CharField(max_length=255, verbose_name='Обьект')),
                ('photo', models.ImageField(blank=True, upload_to='home/img/%Y/%m/%d/', verbose_name='Главное фото')),
                ('short_description', models.TextField(blank=True, max_length=255, verbose_name='Краткое описаниеписание')),
                ('content', models.TextField(blank=True, verbose_name='Тема стстьи')),
                ('time_create', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
                ('time_update', models.DateTimeField(auto_now=True, verbose_name='Дата изменения')),
                ('num_top', models.IntegerField(default=0, verbose_name='Номер в топе')),
                ('is_published', models.BooleanField(default=True, verbose_name='Опубликована')),
                ('contents_style', models.TextField(blank=True, null=True, verbose_name='Стили контента')),
                ('contents_script', models.TextField(blank=True, null=True, verbose_name='Скрипт контента')),
                ('contents', models.TextField(blank=True, null=True, verbose_name='Дополнительный контент')),
                ('author', models.ForeignKey(editable=False, on_delete=django.db.models.deletion.CASCADE, related_name='author_create_works', to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
                ('author_last_update', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='author_update_works', to=settings.AUTH_USER_MODEL, verbose_name='Автор изменения')),
                ('cat', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='works.category_works', verbose_name='Категория работ')),
            ],
            options={
                'verbose_name': 'Наша работа',
                'verbose_name_plural': 'Наши работы',
                'ordering': ['time_create', 'title'],
            },
        ),
    ]
