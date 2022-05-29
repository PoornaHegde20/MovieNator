from django.contrib.auth.models import Permission, User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

class Movie(models.Model):
	title   	= models.CharField(max_length=200)
	genre  		= models.CharField(max_length=100)
	movie_logo  = models.FileField() 

	def __str__(self):
		return self.title

class Myrating(models.Model):
	user   	= models.ForeignKey(User,on_delete=models.CASCADE) 
	movie 	= models.ForeignKey(Movie,on_delete=models.CASCADE)
	rating 	= models.IntegerField(default=1,validators=[MaxValueValidator(5),MinValueValidator(0)])

from django.apps import apps
from django.db import migrations, models
from django.db.models import F


def copy_field(app, schema):
    MyModel = apps.get_model('<your app>', 'MyModel')
    MyModel.objects.all().update(column_a=F('column_b'))


class Migration(migrations.Migration):
    dependencies = [
        ('<your app>', '<previous migration>'),
    ]

    operations = [
        migrations.RunPython(copy_field),
    ]