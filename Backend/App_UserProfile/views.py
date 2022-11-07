from django.shortcuts import render
from django.http import HttpResponse
from App_UserProfile.models import UserProfile

# import serializer 
from rest_framework import generics, parsers
from App_UserProfile.serializers import UserProfileSerializers

# Create your views here.
class Profile(generics.ListCreateAPIView):
    queryset=UserProfile.objects.all()
    serializer_class = UserProfileSerializers

    