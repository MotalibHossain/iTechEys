# Generated by Django 4.1.2 on 2023-05-18 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App_Article', '0007_alter_blogpost_published'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='published',
            field=models.BooleanField(default=0),
            preserve_default=False,
        ),
    ]
