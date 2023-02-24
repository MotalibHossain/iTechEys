
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.conf import settings
from django.conf.urls.static import static

# Views import
from App_Article.views import (
    Article,
    PostPutUpdateDelete,
    BlogCategories,
    ArticlePost,
    BlogLiked,
    BlogComment,
)
# from App_Article.views import Article, ArticleDetails, BlogCategories

urlpatterns = [
    path('', Article.as_view(), name='article'),
    path('blog/', ArticlePost.as_view(), name='article'),
    path('blog-category/', BlogCategories.as_view(), name='BlogCategories'),
    path('articles/<int:id>', PostPutUpdateDelete, name="PostPutUpdateDelete"),

    # Post like and Comment part
    path('liked/', BlogLiked.as_view(), name='BlogCategories'),
    path('comment/', BlogComment.as_view(), name='BlogCategories'),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
