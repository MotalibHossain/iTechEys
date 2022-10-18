from dataclasses import fields
from pyexpat import model
from rest_framework import serializers

from App_Article.models import BlogPost, BlogPostCategory


class BlogPostCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPostCategory
        fields = '__all__'
    
    def create(self, validated_data):
        return BlogPost.objects.create(**validated_data)


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'