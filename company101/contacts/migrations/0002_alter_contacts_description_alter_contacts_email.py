# Generated by Django 4.2.6 on 2023-11-26 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contacts',
            name='description',
            field=models.TextField(blank=True, max_length=255, null=True, verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='contacts',
            name='email',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='электронная почта'),
        ),
    ]
