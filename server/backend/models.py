from pyexpat import model
from time import timezone
from django.db import models
from django.db.models.signals import post_save
from django.conf import settings
from django.contrib.auth.models import AbstractUser,PermissionsMixin
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.contrib.auth.hashers import make_password
from numpy import number
from psutil import users
from django.contrib.auth.models import UserManager
from datetime import date, datetime, timedelta
from django.contrib.auth.hashers import make_password

from django.utils import timezone

from django.conf import settings


class MyUserManager(UserManager):

    def _create_user(self, username, email, password, **extra_fields):
        if not username:
            raise ValueError('The given username must be set')

        if not email:
            raise ValueError('The given email must be set')

        email = self.normalize_email(email)
        username = self.model.normalize_username(username)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, email,make_password(password), **extra_fields)

    def create_superuser(self, username, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(username, email,password, **extra_fields)


class Member(AbstractUser,PermissionsMixin):
    username_validator = UnicodeUsernameValidator()

    username = models.CharField(
        'username',
        max_length=150,
        unique=True,
    )
    email = models.EmailField('email address', blank=False, unique=True)
    is_staff = models.BooleanField(
        'staff status',
        default=False,
    )
    is_active = models.BooleanField(
        'active',
        default=True,
        
    )
    is_clinic=models.BooleanField(default=False)
    is_lab=models.BooleanField(default=False)
    date_joined = models.DateTimeField('date joined', default=timezone.now)

    objects = MyUserManager()

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']


class Clinic(models.Model):
    user=models.OneToOneField(Member,related_name="Clinic",on_delete=models.CASCADE)
    name_clinic=models.TextField()

    def __str__(self) -> str:
        return self.user.username


class Lab(models.Model):
    user=models.OneToOneField(Member,related_name="Lab",on_delete=models.CASCADE)
    name_lab=models.TextField()

    def __str__(self) -> str:
        return self.user.username

class Patient(models.Model):
    name=models.CharField(max_length=50)
    number=models.CharField(primary_key=True,max_length=10)
    otp=models.IntegerField(default=0000)

    def __str__(self) -> str:
        return self.number

class Sample(models.Model):
    phone=models.ForeignKey(Patient,on_delete=models.CASCADE,related_name="phone")
    sampleId=models.CharField(primary_key=True,max_length=10)
    lab=models.CharField(max_length=10,default="NONE")
    status=models.CharField(max_length=10,default="NONE")
    file = models.FileField(blank=True, null=True)
    date=models.DateField(default=date.today)


    
    def __str__(self) -> str:
        return self.sampleId