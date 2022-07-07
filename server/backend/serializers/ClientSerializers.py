import imp
from venv import create
from rest_framework import serializers, viewsets, status
from backend.models import Patient,Sample

from backend.models import Patient

class PatientSerializer(serializers.Serializer):
    name=serializers.CharField(required=True)
    number = serializers.CharField(max_length=10, required=True)

    def create(self, validated_data):
        return Patient.objects.create(**validated_data)



class PatientLoginSerializer(serializers.Serializer):
    number = serializers.CharField(max_length=10, required=True)
  

class OtpLoginSerializer(serializers.Serializer):
    number = serializers.CharField(max_length=10, required=True)
    otp = serializers.IntegerField(required=True)



class PatientModelSerializer(serializers.ModelSerializer):
   
    class Meta:
        model=Patient
        exclude=('otp',)

class SampleModelSerializer(serializers.ModelSerializer):
    number=PatientModelSerializer(read_only=True,many=True)
    class Meta:
        model=Sample
        fields='__all__'

