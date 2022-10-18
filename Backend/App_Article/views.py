from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.parsers import JSONParser
# API import
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.response import Response
from rest_framework import status

# Models import 
from App_Article.models import BlogPost, BlogPostCategory

# serializers import 
from App_Article.serializers import BlogPostSerializer, BlogPostCategorySerializer



@api_view(['GET', 'POST'])
def Article(request):
    if request.method == 'GET':
        articles=BlogPost.objects.all()
        serializer=BlogPostSerializer(articles, many=True)
        return Response(serializer.data)
    
    if request.method =='POST':
        serializer=BlogPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET', 'POST'])
def PostPutUpdateDelete(request, id):
    pass
