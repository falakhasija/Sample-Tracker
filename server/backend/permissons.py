from typing import Type

from django.http.request import HttpRequest
from requests import request
from rest_framework.permissions import BasePermission

from backend.models import Member, Patient



class IsLabUser(BasePermission):
    

    def has_permission(self, request: Type[HttpRequest], view):
        if request.user.is_lab:
            return bool(request.user and request.user.is_lab and request.user.is_authenticated)
        return False


class IsClinicUser(BasePermission):
    
    def has_permission(self, request: Type[HttpRequest], view):
        if request.user.is_clinic:
            return bool(request.user and request.user.is_clinic and request.user.is_authenticated)
        return False

class IsMember(BasePermission):
       
    def has_permission(self, request: Type[HttpRequest], view):
        if (request.user.is_clinic or request.user.is_lab):
            return bool(request.user and (request.user.is_clinic or request.user.is_lab) and request.user.is_authenticated)
        return False

