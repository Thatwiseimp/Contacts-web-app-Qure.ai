from django.db import models
from django.contrib.auth.models import User

class People(models.Model):
    name = models.CharField(max_length=50)
    phone_number = models.IntegerField(max_length=10)

    def __str__(self):
        return self.name()
