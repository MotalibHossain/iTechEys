from django.shortcuts import render
from django.http import HttpResponse
from App_UserProfile.models import UserProfile

# import serializer 
from rest_framework import generics, parsers
from App_UserProfile.serializers import UserProfileSerializers
# jwt
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your views here.
class Profile(generics.ListCreateAPIView):
    queryset=UserProfile.objects.all()
    serializer_class = UserProfileSerializers

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

    