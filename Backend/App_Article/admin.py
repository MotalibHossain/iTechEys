from django.contrib import admin
from App_Article.models import BlogPost, BlogPostCategory

# Register your models here.
admin.site.register(BlogPost)
admin.site.register(BlogPostCategory)
