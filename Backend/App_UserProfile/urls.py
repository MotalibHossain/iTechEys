
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.conf import settings
from django.conf.urls.static import static

# Views import 
from App_UserProfile.views import Profile

urlpatterns = [
    path('user/', Profile, name='article'),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)