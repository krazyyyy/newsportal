# Generated by Django 3.2.6 on 2021-11-11 08:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rssReader', '0016_adscode_sidebarad'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='adscode',
            name='category_three',
        ),
        migrations.AddField(
            model_name='adscode',
            name='megaBillboard',
            field=models.TextField(blank=True, help_text='Between TEHNOLOGIJA and Sports', null=True),
        ),
    ]
