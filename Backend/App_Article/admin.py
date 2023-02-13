from django.contrib import admin
from App_Article.models import BlogPost, BlogPostCategory, BlogComment, BlogLike

# Register your models here.
admin.site.register(BlogPost)
admin.site.register(BlogPostCategory)
admin.site.register(BlogComment)
admin.site.register(BlogLike)
