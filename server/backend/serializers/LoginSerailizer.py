from rest_framework import serializers, viewsets, status

class SignInSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=255, required=True)
    password = serializers.CharField(max_length=255, required=True, write_only=True)


class PasswordSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=255, required=True, write_only=True)

