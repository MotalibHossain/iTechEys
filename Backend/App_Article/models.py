from email.policy import default
from django.db import models
import uuid
# uuid=str(uuid.uuid4)

# model import from another app
from App_UserProfile.models import UserProfile

# Create your models here.


class BlogPostCategory(models.Model):
    name = models.CharField(max_length=15)

    def __str__(self) -> str:
        return self.name


class BlogPost(models.Model):
    author = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name="blog_author", default="")
    category = models.ForeignKey(
        BlogPostCategory, on_delete=models.CASCADE, related_name="BlogCategory")
    title = models.CharField(max_length=80)
    slug = models.SlugField(max_length=80, unique=True)
    description = models.CharField(max_length=500, default="")
    published = models.BooleanField(default=True)
    image = models.ImageField(upload_to="Articles/", default='Articles/defualt.jpg',
                              null=True, blank=True, verbose_name="Image")
    publish_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        ordering = ['-id',]


class BlogComment(models.Model):
    user = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name="commenter_user")
    post = models.ForeignKey(
        BlogPost, on_delete=models.CASCADE, related_name="Post_Comment")
    custom_id = models.CharField(max_length=8, primary_key=True)
    comment = models.CharField(max_length=500)
    publish_date = models.DateField(auto_now_add=True)
    update_date = models.DateField(auto_now=True)

    def __str__(self) -> str:
        return self.user.username + "--- comment on ---" + self.post.title

    # class Meta:
    #     ordering = ['-id',]


class BlogLike(models.Model):
    user = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name="Like_user")
    post = models.ForeignKey(
        BlogPost, on_delete=models.CASCADE, related_name="Post_Liked")

    def __str__(self) -> str:
        return self.user.username + "--- Liked at ---" + self.post.title
