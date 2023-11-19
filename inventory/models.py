from django.db import models

# Create your models here.
class inventory(models.Model):
    code = models.CharField(max_length=50, default="")
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    calib_now = models.DateField()
    calib_next = models.DateField()
    name_inspect_1 = models.CharField(max_length=50)
    name_inspect_2 = models.CharField(max_length=50)