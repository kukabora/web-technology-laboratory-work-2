# Generated by Django 3.2.8 on 2021-11-07 09:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Evdokimov', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='player',
            old_name='have been injured during vacation',
            new_name='injured',
        ),
    ]
