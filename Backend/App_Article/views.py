from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.parsers import JSONParser

# API import
from rest_framework import generics, parsers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from rest_framework.decorators import parser_classes
from rest_framework.parsers import MultiPartParser, FormParser

# Models import
from App_Article.models import BlogPost, BlogPostCategory, BlogLike, BlogComment

# serializers import
from App_Article.serializers import (
    BlogPostSerializer,
    BlogPostCategorySerializer,
    PostSerializer,
    BlogLikedSerializer,
    BlogCommentPostSerializer,
    BlogCommentViewSerializer
)

# Class based views


class Article(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

# Blog post view


class ArticlePost(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = PostSerializer
    parser_classes = [parsers.FormParser, parsers.MultiPartParser]


class ArticlePostEdit(APIView):
    def get(self, request, id):
        Item=BlogPost.objects.filter(pk=id).first()
        serializer=PostSerializer(Item)
        return Response(serializer.data)

    def patch(self, request, id):
        
        editItem=BlogPost.objects.filter(pk=id).first()
        serializer = PostSerializer(editItem, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()

        allPost=BlogPost.objects.all()
        allPostSerializer=BlogPostSerializer(allPost, many=True)
        return Response(allPostSerializer.data)
        # return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class BlogCategories(generics.ListCreateAPIView):
    queryset = BlogPostCategory.objects.all()
    serializer_class = BlogPostCategorySerializer

# @api_view(['GET', 'POST'])
# @parser_classes([MultiPartParser, FormParser])
# def Article(request, format=None):
#     if request.method == 'GET':
#         articles=BlogPost.objects.all()
#         serializer=BlogPostSerializer(articles, many=True)
#         return Response(serializer.data)

#     if request.method =='POST':
#         serializer=BlogPostSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#             # return Response({'received data': request.data})
#         return Response(serializer.errors)


@api_view(['GET', 'POST'])
def PostPutUpdateDelete(request, id):
    pass


# ------------------------------------
#      Post like and Comment part
# ------------------------------------

class BlogLiked(generics.ListCreateAPIView):
    queryset = BlogLike.objects.all()
    serializer_class = BlogLikedSerializer


class BlogCommentView(generics.ListCreateAPIView):
    queryset = BlogComment.objects.all()
    serializer_class = BlogCommentViewSerializer


class BlogCommentPost(generics.ListCreateAPIView):
    queryset = BlogComment.objects.all()
    serializer_class = BlogCommentPostSerializer


class BlogCommentEditDelete(APIView):
    def get(self, request, cid):
        articles = BlogComment.objects.filter(custom_id=cid)
        serializer=BlogCommentViewSerializer(articles, many=True)
        return Response(serializer.data)
    
    def put(self, request, cid):
        articles = BlogComment.objects.get(custom_id=cid)
        allComment=BlogComment.objects.filter(post=articles.post.id)
        CommentSerializer=BlogCommentViewSerializer(allComment, many=True, partial=True)

        editItem = BlogComment.objects.filter(custom_id=cid).first()
        serializer = BlogCommentPostSerializer(editItem, data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
        return Response(CommentSerializer.data)

    def delete(self, request, cid):
        comments=BlogComment.objects.all()
        serializer=BlogCommentViewSerializer(comments, many=True)
        deleteiItem = BlogComment.objects.get(custom_id=cid)
        deleteiItem.delete()
        return Response(serializer.data)
