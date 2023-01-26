from dataclasses import fields
from pyexpat import model
from unicodedata import name
from rest_framework import serializers

from App_Article.models import BlogPost, BlogPostCategory
from App_UserProfile.serializers import UserProfileSerializers

# Blog category serializers
class BlogPostCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPostCategory
        fields = '__all__'
    
    def create(self, validated_data):
        return BlogPost.objects.create(**validated_data)
# Blog post all model relation pass through this serializers
class BlogPostSerializer(serializers.ModelSerializer):
    category=BlogPostCategorySerializer(read_only=True)
    author=UserProfileSerializers(read_only=True)
    class Meta:
        model = BlogPost
        fields = '__all__'
    def create(self, validated_data):
        return BlogPost.objects.create(**validated_data)
# only blog post
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'
        
    def create(self, validated_data):
        return BlogPost.objects.create(**validated_data)
