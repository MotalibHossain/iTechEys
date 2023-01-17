from email.policy import default
from django.db import models

# model import from another app 
from App_UserProfile.models import UserProfile

# Create your models here.
class BlogPostCategory(models.Model):
    name=models.CharField(max_length=15)

    def __str__(self) -> str:
        return self.name


class BlogPost(models.Model):
    author=models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="blog_author", null=True)
    category=models.ForeignKey(BlogPostCategory, on_delete=models.CASCADE, related_name="BlogCategory")
    title=models.CharField(max_length=80)
    slug=models.SlugField(max_length=80, unique=True)
    description=models.CharField(max_length=500, default="")
    image=models.ImageField(upload_to="Articles/", default='Articles/defualt.jpg', null=True, blank=True, verbose_name="Image")
    published=models.BooleanField(default=False)
    publish_date=models.DateField(auto_now_add=True)
    update_date=models.DateField(auto_now=True)


    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering=['-id',]



    