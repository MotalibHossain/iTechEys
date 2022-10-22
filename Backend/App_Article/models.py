from email.policy import default
from django.db import models

# Create your models here.
class BlogPostCategory(models.Model):
    name=models.CharField(max_length=15)

    def __str__(self) -> str:
        return self.name


class BlogPost(models.Model):
    # author=models.ForeignKey(User, on_delete=models.CASCADE, related_name="blog_author")
    # category=models.ForeignKey(BlogPostCategory, on_delete=models.CASCADE, related_name="BlogCategory", default="")
    title=models.CharField(max_length=80)
    # slug=models.SlugField(max_length=80, unique=True)
    # description=models.CharField(max_length=500, default="")
    # image=models.ImageField(upload_to="Articles/", default='Articles/defualt.jpg', verbose_name="Image")
    # published=models.BooleanField(default=False)
    # publish_date=models.DateField(auto_now_add=True)
    # update_date=models.DateField(auto_now=True)


    def __str__(self) -> str:
        return self.title



    