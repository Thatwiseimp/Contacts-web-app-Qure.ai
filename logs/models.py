from django.db import models
from django.contrib.auth.models import User

class People(models.Model):
    name = models.CharField(max_length=50)
    phone_number = models.IntegerField( unique=True)

    def __str__(self):
        return self.name()
