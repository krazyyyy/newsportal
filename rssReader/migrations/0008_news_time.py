# Generated by Django 3.2.6 on 2021-10-27 09:28

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('rssReader', '0007_auto_20211017_1400'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='time',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]