
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
    ArticlePostEdit, 
    BlogLiked, 
    BlogCommentPost,
    BlogCommentView,
    BlogCommentEditDelete
)
# from App_Article.views import Article, ArticleDetails, BlogCategories

urlpatterns = [
    path('', Article.as_view(), name='article'),
    path('blog/', ArticlePost.as_view(), name='article'),
    path('blog-edit/<int:id>', ArticlePostEdit.as_view(), name='articleEdit'),
    path('articles/<int:id>', PostPutUpdateDelete, name="PostPutUpdateDelete"),
    path('blog-category/', BlogCategories.as_view(), name='BlogCategories'),

    # Post like and Comment part
    path('liked/', BlogLiked.as_view(), name='BlogLike'),
    path('liked/<int:id>', BlogLiked.as_view(), name='BlogLikeDelete'),
    path('comment/', BlogCommentPost.as_view(), name='BlogPost'),
    path('comment-view/', BlogCommentView.as_view(), name='BlogComment'),
    path('comment/delete/<str:cid>', BlogCommentEditDelete.as_view(), name='BlogCommentEditDelete'),

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)