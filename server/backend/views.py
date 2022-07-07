from datetime import date, datetime
import random
from re import template
from django.shortcuts import render
from requests import session
import requests
from rest_framework import viewsets,generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from backend.models import Patient, Sample

from .permissons import IsClinicUser,IsLabUser,IsMember
from .serializers.LoginSerailizer import SignInSerializer,PasswordSerializer
from .serializers.ClientSerializers import PatientSerializer,PatientLoginSerializer,OtpLoginSerializer,SampleModelSerializer

from django.http import JsonResponse
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.parsers import MultiPartParser, FormParser



class LoginView(APIView):
    permission_classes = ()
    authentication_classes = ()

    def post(self, request):
        received_json_data=request.data
        serializer = SignInSerializer(data=received_json_data)
        if serializer.is_valid():
            userauth = authenticate(
                request, 
                username=received_json_data['username'], 
                password=received_json_data['password'])
            if userauth is not None:
                refresh = RefreshToken.for_user(userauth)
                return JsonResponse({
                    'status':200,
                    'data':{
                    'username':userauth.get_username(),
                    'is_lab':userauth.is_lab,
                    'is_clinic':userauth.is_clinic,
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    }
                }, status=200)
            else:
                return JsonResponse({
                    'message': 'invalid username or password',
                }, status=403)
        else:
            return JsonResponse({'message':serializer.errors}, status=400)

class ClinicView(APIView):
    permission_classes = (IsAuthenticated, IsClinicUser)
  
    
    def post(self,request):
        received_json_data=request.data
        serializer = PatientSerializer(data=received_json_data)
        if serializer.is_valid():
            pat=Patient.objects.filter(number=serializer.validated_data['number'])
            if pat:
                return JsonResponse({
                    'status':404,
                    'data':{
                    'message':'Already Exist'
                    }
                }, status=404)
            serializer.save()
            return JsonResponse({
                    'status':200,
                    'data':{
                    'message':'Patient Created'
                    }
                }, status=200)

        return JsonResponse({'message':serializer.errors}, status=400)
            
class LabView(APIView):
    permission_classes = (IsAuthenticated, IsLabUser)
  
    def get(self, request):
        lab=request.data['labid']
        time=date.today()
        query1=Sample.objects.filter(date=time,lab=lab,status="FREEZER",).count()
        query2=Sample.objects.filter(date=time,lab=lab,status="SENT").count()
        content = {'FREEZER': query1,'SENT':query2}
        return JsonResponse({
                    'status':200,
                    'data':[content]
                }, status=200)


class PasswordUpdate(APIView):
    permission_classes = (IsAuthenticated,)
  
    def post(self, request):
        received_json_data=request.data
        serializer = PasswordSerializer(data=received_json_data)
        if serializer.is_valid():
            userobj=request.user
            print(userobj)
            password_new=serializer.validated_data['password']
            print(password_new)
            userobj.set_password(password_new)
            userobj.save()
            return JsonResponse({
                    'status':200,
                    'data':{
                    'message':'password set'
                    }
                }, status=200)
        return JsonResponse({'message':serializer.errors}, status=400)

class OtpCreateView(APIView):
    permission_classes = ()
    authentication_classes = ()

    def post(self,request):
        received_json_data=request.data
        serializer = PatientLoginSerializer(data=received_json_data)
        if serializer.is_valid():
            try:
                user=Patient.objects.get(number=serializer.validated_data['number'])
                print(user)
                otpnum=random.randint(1111,9999)
                user.otp=otpnum

                user_phone=serializer.validated_data['number']
                user.save(update_fields=['otp'])
                api_key='19a69a24-e4f3-11ec-9c12-0200cd936042'
                

                try:
                    url=f'https://2factor.in/API/V1/{api_key}/SMS/{user_phone}/{otpnum}'
                    res=requests.get(url)

                    return JsonResponse({
                                'status':200,
                                'data':{
                                'message':'Message Sent to user'
                                }
                }, status=200)

                except Exception as e:
                   return JsonResponse({
                                'status':400,
                                'data':{
                                'message':'Message Not touser'
                                }
                }, status=400)
                
                    # sms message send
                
            except Patient.DoesNotExist:
                return JsonResponse({
                                'status':404,
                                'data':{
                                'message':'User Doestnt Exist'
                                }
                }, status=404)
        return JsonResponse({'message':serializer.errors}, status=400)

class OtpLoginView(APIView):
    permission_classes = ()
    authentication_classes = ()

    def post(self,request):
        received_json_data=request.data
        serializer = OtpLoginSerializer(data=received_json_data)
        if serializer.is_valid():
            try:
                user=Patient.objects.get(number=serializer.validated_data['number'])
                print(user)
                print(user.otp,serializer.validated_data['otp'])
                if user.otp == serializer.validated_data['otp']:
                    
                    return JsonResponse({
                                    'status':200,
                                    'data':{
                                    'message':'login done'
                                    }
                    }, status=200)
                else:
                    return JsonResponse({
                                    'status':403,
                                    'data':{
                                    'message':'login not done'
                                    }
                    }, status=403)

            except Patient.DoesNotExist:
                return JsonResponse({
                                'status':404,
                                'data':{
                                'message':'User Doestnt Exist'
                                }
                }, status=404)
        return JsonResponse({'message':serializer.errors}, status=400)

class ClinicSample(APIView):
    permission_classes = (IsAuthenticated, IsMember)

    def post(self,request):
        received_json_data=request.data
        serializer = SampleModelSerializer(data=received_json_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                                    'status':200,
                                    'data':{
                                    'message':'Added'
                                    }
                    }, status=200)
        return Response(serializer.errors, status=400)
    
    def patch(self,request):
        received_json_data=request.data
        try:
            query=Sample.objects.get(pk=request.data['sampleId'])
            serializer = SampleModelSerializer(query,data=received_json_data,partial=True)

            if serializer.is_valid():
                serializer.save()

                return JsonResponse({
                                            'status':200,
                                            'data':{
                                            'message':'Updated'
                                            }
                            }, status=200)
        except Sample.DoesNotExist:
                return JsonResponse({
                                'status':404,
                                'data':{
                                'message':'Sample Doesnt Exist'
                                }
                }, status=404)


class UploadReport(APIView):
    permission_classes = (IsAuthenticated, IsMember)
    parser_classes = (MultiPartParser, FormParser)

    def post(self,request):
        received_json_data=request.data
        try:
            query=Sample.objects.get(pk=request.data['sampleId'])
            serializer = SampleModelSerializer(query,data=received_json_data,partial=True)

            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return JsonResponse({
                                            'status':200,
                                            'data':{
                                            'message':'Updated'
                                            }
                            }, status=200)
        except Sample.DoesNotExist:
                return JsonResponse({
                                'status':404,
                                'data':{
                                'message':'Sample Doesnt Exist'
                                }
                }, status=404)
        return JsonResponse({
                                'status':404,
                                'data':{
                                'message':'Sample Doesnt Exist'
                                }
                }, status=404)

class PatientView(APIView):
    def post(self,request):

            try:
                userph=request.data['number']
                user=Patient.objects.get(number=userph)
                contents = Sample.objects.filter(phone=userph)
                serializer = SampleModelSerializer(contents, many=True)
                return JsonResponse({
                                    'status':200,
                                    'data':serializer.data
                    }, status=200)
            except Patient.DoesNotExist:
                    return JsonResponse({
                                    'status':404,
                                    'data':{
                                    'message':'User Doestnt Exist'
                                    }
                    }, status=404)

