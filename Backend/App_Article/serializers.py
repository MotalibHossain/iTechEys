from dataclasses import fields
from pyexpat import model
from unicodedata import name
from rest_framework import serializers

from App_Article.models import BlogPost, BlogPostCategory, BlogComment, BlogLike
from App_UserProfile.serializers import UserProfileSerializers


# ------------------------------------
#      Post like and Comment part
# ------------------------------------

class BlogLikedSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogLike
        fields = "__all__"


class BlogCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogComment
        fields = "__all__"


# ------------------------------------
#      Main Article part
# -----------------------------------
class BlogPostCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPostCategory
        fields = '__all__'

    def create(self, validated_data):
        return BlogPost.objects.create(**validated_data)


# Blog post all model relation pass through this serializers
class BlogPostSerializer(serializers.ModelSerializer):
    category = BlogPostCategorySerializer(read_only=True)
    author = UserProfileSerializers(read_only=True)
    # post=BlogLikedSerializer(many=True, read_only=True)
    # comment=BlogCommentSerializer(many=True, read_only=True)

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

