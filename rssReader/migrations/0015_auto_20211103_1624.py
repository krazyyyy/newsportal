# Generated by Django 3.2.6 on 2021-11-03 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rssReader', '0014_alter_footerhtml_access_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='adscode',
            name='category_sideAD',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='adscode',
            name='home_sideAD',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='adscode',
            name='source_sideAD',
            field=models.TextField(blank=True, null=True),
        ),
    ]
