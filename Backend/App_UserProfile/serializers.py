from dataclasses import fields
from pyexpat import model
from unicodedata import name
from rest_framework import serializers
# jwt

# Custom model 
from App_UserProfile.models import UserProfile

class UserProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields=["id","username", "email", "description", "password"]
        extra_kwargs={"password":{"write_only":True}, "style":{"input_type":"password"}}

    def create(self, validated_data):
        user= UserProfile.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
        )
        
        return user