from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser, PermissionsMixin
)

# Create your models here.
class UserProfileManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        email=self.normalize_email(email)
        user=self.model(email)
        user.set_password(password)

        user.save(using=self._db)
        return user
    def create_superuser(self, email, password):

        user = self.create_user(email, password)
        user.is_stuff = True
        user.is_superuser=True
        user.save(using=self._db)
        return user


class UserProfile(AbstractBaseUser, PermissionsMixin):
    email=models.EmailField(max_length=255, unique=True)
    is_active=models.BooleanField(default=True)
    is_stuff=models.BooleanField(defualt=False)

    USERNAME_FIELD="email"

    object=UserProfileManager()

    def __str__(self):
        return self.email
