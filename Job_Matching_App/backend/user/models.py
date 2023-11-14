from django.db import models


class User(models.Model):
    firstName = models.URLField(unique=True)
    lastName = models.CharField(max_length=255, null=True)
    email = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.title
