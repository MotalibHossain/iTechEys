from dataclasses import fields
from pyexpat import model
from rest_framework import serializers

from App_Article.models import BlogPost, BlogPostCategory



class BlogPostSerializer(serializers.ModelSerializer):
    # BlogCategory=BlogPostCategorySerializer(many=True, read_only=True)
    class Meta:
        model = BlogPost
        fields = '__all__'
        
    def create(self, validated_data):
        return BlogPost.objects.create(**validated_data)

class BlogPostCategorySerializer(serializers.ModelSerializer):
    BlogCategory=BlogPostSerializer(many=True, read_only=True)
    class Meta:
        model = BlogPostCategory
        fields = '__all__'
    
    def create(self, validated_data):
        return BlogPost.objects.create(**validated_data)