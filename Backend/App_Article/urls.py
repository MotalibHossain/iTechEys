
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.conf import settings
from django.conf.urls.static import static

# Views import 
from App_Article.views import Article, PostPutUpdateDelete
# from App_Article.views import Article, ArticleDetails, BlogCategories

urlpatterns = [
    path('', Article, name='article'),
    path('articles/<int:id>',PostPutUpdateDelete, name="PostPutUpdateDelete")
    # path('blog-category/', BlogCategories, name='BlogCategories'),
    # path('article/details/<int:id>', ArticleDetails, name='ArticleDetails'),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)