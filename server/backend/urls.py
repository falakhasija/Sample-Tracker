from django.urls import path
from . import views
  
urlpatterns = [
    path('login/', views.LoginView.as_view(), name ='login'),
    path('lab/', views.LabView.as_view(), name ='lab'),
    path('clinic/', views.ClinicView.as_view(), name ='clinic'),
    path('updatepass/', views.PasswordUpdate.as_view(), name ='updatepass'),
    path('otpgen/', views.OtpCreateView.as_view(), name ='otpgen'),
    path('otplogin/', views.OtpLoginView.as_view(), name ='otplogin'),
    path('sampleadd/', views.ClinicSample.as_view(), name ='sampleadd'),
    path('upload/', views.UploadReport.as_view(), name ='uploadReport'),
    path('details/', views.PatientView.as_view(), name ='details'),
]