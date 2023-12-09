from django.contrib.auth.models import User
from django.db import models
from django_countries.fields import CountryField


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    cell = models.CharField(max_length=15)
    country = CountryField(blank_label='(select country)')
    address_1 = models.CharField(max_length=255)
    address_2 = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip = models.CharField(max_length=20)
    createdAt = models.DateTimeField(auto_now_add=True)  # Automatically set when the object is first created.
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username


