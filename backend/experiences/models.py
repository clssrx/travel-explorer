from django.db import models


class Experience(models.Model):
    CATEGORY_CHOICES = [
        ('Adventure', 'Adventure'),
        ('Culture', 'Culture'),
        ('Food & Drink', 'Food & Drink'),
    ]

    title = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    duration = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    image = models.URLField()
    description = models.TextField()

    def __str__(self):
        return self.title
